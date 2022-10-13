const express = require('express')
const app = express()
const path = require('path')
const { Server: IOServer } = require('socket.io')
const yargs = require("yargs")(process.argv.slice(2))

const logger = require('./libs/logger.js')

const args = yargs
.alias({
    p: "port",
    m: "modo" 
})
.default({
    port: 8080,
    modo: "fork"
}).argv

const cluster = require('cluster')
const os = require('os')

const api = require('./apis/index')

app.use('/', api)

const cpus = os.cpus()
const PORT = process.env.PORT || Number(process.argv[2]) || 3000
const isCluster = process.argv[3] == 'cluster'

if (isCluster && cluster.isPrimary) {
    cpus.map(()=> {
        
    cluster.fork()
    })

    cluster.on("exit", (worker) => {
        console.log(`Worker ${worker.process.id} stopped`);

        cluster.fork()

    })
} else {
    expressServer = app.listen(PORT, () => 
    console.log(`Server listening on port ${PORT}`))

    const io = new IOServer(expressServer)

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
}

require('dotenv').config()

const SESSION_SECRET=process.env.SESSION_SECRET

app.set("view engine", ".ejs");

const session = require("express-session");

const bcrypt = require("bcrypt");

const { passport } = require('./controllers/passport')
const { LocalStrategy } = require('./controllers/passport')

const config = require("./config/config");
const routes = require("./routes/routes");

let userName = 'NN'

const mongoose = require('mongoose')
const mongodbConfig = require('./config/db')

const mdb_mensaje = require('./models/schemaMongodbChat')
const User = require("./models/userModel");

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

app.use(
    session({
        secret: SESSION_SECRET,
        cookie: {
            httpOnly: false,
            secure: false,
            maxAge: config.TIEMPO_EXPIRACION,
        },
        rolling: true,
        resave: false,
        saveUninitialized: false,
        })
);

app.use(passport.initialize());
app.use(passport.session());

const Contenedor = require('./daos/producto.dao')

const { database } = require('./config/db')

const tableName = 'products';

const db = new Contenedor( database,tableName );

const messages = [] 

const { createProductTable } = require('./daos/producto.functions')
const insertProducts = require('./daos/producto.functions')

function hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

function isValidPassword(reqPassword, hashedPassword) {
    return bcrypt.compareSync(reqPassword, hashedPassword);
}

const signupStrategy = new LocalStrategy(
    { passReqToCallback: true },
    async (req, username, password, done) => {
    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
        routes.getFailsignup
        logger.error(`timestamp: ${Date.now()} - Username: ${username} - Fail Signup`);
        return done(null, false);
        }

        const newUser = {
        username: username,
        password: hashPassword(password),
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        };

        const createdUser = await User.create(newUser);

        return done(null, createdUser);
    } catch (err) {
        console.log(err);
        done(err);
    }
    }
);

const loginStrategy = new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ username });

    if (user && isValidPassword(password, user.password)) {
        return done(null, user);
    } else {
        routes.getFaillogin
        logger.error(`timestamp: ${Date.now()} - Username: ${username} - Fail Login`);
        return done(null, null)
    }
});

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

passport.use("register", signupStrategy);
passport.use("login", loginStrategy);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

app.get("/signup", routes.getSignup);

app.post(
    "/register",
    passport.authenticate("register", { failureRedirect: "/failsignup" }),
    routes.postSignup
);

app.get("/failsignup", routes.getFailsignup);

app.get("/", routes.getLogin);

app.get("/login", routes.getLogin);

app.post("/login",
  passport.authenticate("login", { failureRedirect: "/faillogin" }),
  routes.postLogin
);
app.get("/faillogin", routes.getFaillogin);

app.get("/api/logout", routes.destroySession);

app.use((req,res) => {
    const { url, method } = req;
    logger.warn(`timestamp: ${Date.now()} - url: ${url} method: ${method} - Not found`);

    res.status(404).json({ error : 'not found' })
});

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
        logger.error(`timestamp: ${Date.now()} - Read error - ${e}`);
        console.log('error al leer mensajes historicos: ',e) 
    }
})();