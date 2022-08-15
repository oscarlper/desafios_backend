const express = require('express')
const app = express()
const path = require('path')
const { Server: IOServer } = require('socket.io')
const expressServer = app.listen(3000, () => console.log('server ok !!!'))
const io = new IOServer(expressServer)

const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const util = require('util')

let userName = 'NN'

const mongoose = require('mongoose')
const mongodbConfig = require('./db')

const mdb_mensaje = require('./models/schemaMongodbChat')

mongoose.connect(mongodbConfig.mongodb.connectionString)

async function saveMessageMDB(inputMessage) {
    mdb_mensaje.create(
            { author:{
                timestamp: inputMessage.dateMark,
                id: inputMessage.id,
                nombre: inputMessage.nombre,
                apellido: inputMessage.apellido,
                edad: inputMessage.edad,
                alias: inputMessage.alias,
                avatar: inputMessage.avatar,
            },
            text: inputMessage.message
            })
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const Contenedor = require('./container')

const { database } = require('../src/db')

const tableName = 'products';

const db = new Contenedor( database,tableName );

const messages = [] 

const createProductTable = async () => {
    try {
        const exists = await database.schema.hasTable(tableName)
        if (!exists) {
            await database.schema
            .createTable(tableName, (table) => {
                table.increments("id").primary();
                table.string("title", 50).notNullable();
                table.integer("price");
                table.string("thumbnail", 255);
            })
            console.log("Table created");
            await insertProducts()
        }
    } catch (error) {
        console.log(error);
        database.destroy();
}
};

async function insertProducts() {
    try {
        const productsObject = [
            {"title":"Tablero","price":15000,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-128.png"},
            {"title":"Microscopio","price":64500,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-128.png"},
            {"title":"Lapiz","price":260,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-128.png"},
            {"title":"Escuadra","price":480,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-128.png"}]
    
    await database(tableName).insert(productsObject)

    console.log('Products created')

    } catch(err) {
        console.log(err)
        database.destroy()
    }
}

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://mongodba:7ANW9tHm5OT7UHi4@cluster0.vtuqq.mongodb.net/desafio24?retryWrites=true&w=majority",
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false,
    rolling: true, // Reinicia el tiempo de expiracion con cada request
    cookie: {
      maxAge: 60000,
    }, 
  })
);

function authMiddleware(req, res, next) {
    if (req.session.username) {
    userName=req.session.username
    next();
    } else {
    res.redirect("/login");
    }
}

function loginMiddleware(req, res, next) {
    if (req.session.username) {
    res.redirect("/");
    } else {
    next();
    }
}

app.get("/", authMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get("/login", loginMiddleware, (req, res) => {
    res.sendFile(path.join(__dirname, "./public/login.html"));
});

app.get("/api/login", async (req, res) => {
    try {
    req.session.username = req.query.username;

    res.redirect("/");
    } catch (err) {
    res.json({ error: true, message: err });
    }
});

app.get("/api/logout", async (req, res) => {
    try {
        req.session.destroy()
        res.redirect("/");
    } catch (err) {
    res.json({ error: true, message: err });
    }
});

app.use((req,res) => {
    res.status(404).json({ error : 'not found' })
});

io.on('connection', async socket => {
    console.log('Se conecto un usuario nuevo')
    socket.emit('server:chat', messages)

    socket.emit('server:username', userName)
    
    socket.emit('server:products', await db.getAll())
    
    socket.on('server:products', async newProduct => {
        await db.insertProduct(newProduct.title, newProduct.price, newProduct.thumbnail)
        io.emit('server:products', await db.getAll())
    })

    socket.emit('server:chat', messages)

    socket.on('server:chat', async inputMessage => {
        messages.push(
                { author:{
                    timestamp: inputMessage.dateMark,
                    id: inputMessage.id,
                    nombre: inputMessage.nombre,
                    apellido: inputMessage.apellido,
                    edad: inputMessage.edad,
                    alias: inputMessage.alias,
                    avatar: inputMessage.avatar,
                },
                text: inputMessage.message
                }
        )

        // Guardo mensajes en mongoDB
        await saveMessageMDB(inputMessage)
        io.emit('server:chat', messages)
    })
})

async function saveMessages() {
    try {
        await fs.promises.writeFile(fileName, JSON.stringify(messages));
        }
    catch(e) {
        console.log("Hubo un error de escritura: ", e);
    }
}

( async () => {
    createProductTable()
    try {
        // historial chat mongodb
        let mensajes = await mdb_mensaje.find({},{__v:0})
        mensajes = JSON.parse(JSON.stringify(mensajes))
        mensajes.forEach(element => {
            messages.push(element)
        });
    } catch(e) {
        console.log('error al leer mensajes historicos: ',e) 
    }
})();
