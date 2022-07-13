const fs = require('fs');
const express = require('express')
const app = express()
const puerto = 8888

class Contenedor {
    constructor (nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }

    async getAll() {
        try {
            return JSON.parse(await fs.promises.readFile(this.nombreArchivo,'utf-8'));
        }
        catch(e) {
            console.log("Hubo un error de lectura: ", e);
        }
    }
    

    async save(objectNew) {
        try {
            const object = JSON.parse(await fs.promises.readFile(this.nombreArchivo,'utf-8'));
            let items = object.length;
            objectNew.id=items+1;
            object.push(objectNew);
            console.log(`\nNuevo ID Agregado: ${objectNew.id}`);

            try {
                await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(object));
            }
            catch(e) {
                console.log("Hubo un error de escritura: ", e);
            }
        }
        catch(e) {
            console.log("Hubo un error de lectura: ", e);
        }

    }
        
    async getById(number) {
        try {
            const object = JSON.parse(await fs.promises.readFile(this.nombreArchivo,'utf-8'));
            return object.find(x => x.id === number)
        }
        catch(e) {
            console.log(e);
        }
    }


    async deleteById(number) {
        try {
            const object = JSON.parse(await fs.promises.readFile(this.nombreArchivo,'utf-8'));
            let newObject = object.filter(idDelete => idDelete.id != number);

            try {
                await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(newObject));
            }
            catch(e) {
                console.log("Hubo un error de escritura: ", e);
            }

        }
        catch(e) {
            console.log(e);
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.nombreArchivo,"[]");
            console.log("Archivo borrado/inicializado");
        }
        catch(e) {
            console.log("Hubo un error de escritura: ", e);
        }
    }
}

let id;

const productos = new Contenedor('./productos.txt');

//defino un valor random para generar productos aleatorios
randomValue = parseInt(Math.random()*1000)

//defino la funcion async del webserver
async function execWebServer() {

    // genero nuevos productos
    //await productos.save({id,title:"prodNumber"+randomValue,price:randomValue*100,thumbnail:"http://thumbnail_"+randomValue});

    // root webserver con menu basico
    app.get('/', (req,res)=> {
        res.status(200).send("<h1>Desafio Clase 6</h1> \
                            <a href='/productos'>Lista de producto</a> \
                            <p/><a href='/productoRandom'>Producto Random</a>")
    })

    // ruta productos, llama a la funcion getAll
    app.get('/productos', async(req,res)=> {
        cntProd = Object.keys(await productos.getAll()).length
        if (cntProd > 0) {
            res.status(200).json(await productos.getAll())
        } else {
            res.status(404).json({error: 'No hay productos'})
        }
    })

    // ruta productoRandom, genero numero aleatorio obteniendo el tamaño total del objeto JSON
    app.get('/productoRandom', async(req,res)=> {
        cntProd = Object.keys(await productos.getAll()).length
        if (cntProd > 0) {
            rndProd = Math.floor(Math.random()*cntProd)+1
            res.status(200).json(await productos.getById(rndProd))
        } else {
            res.status(404).json({error: 'No hay productos'})
        }
    })

    // habilito el servicio en puerto 8888
    app.listen(puerto,(e)=> {
        if(e) {
            console.log(`Error!!! Puerto ${puerto} posiblemente en uso`)    
        }else{      
            console.log(`Servidor escuchando en puerto ${puerto}`)
        }
    })

}
execWebServer();
