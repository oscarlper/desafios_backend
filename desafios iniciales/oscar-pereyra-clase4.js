const fs = require('fs');

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
            console.log("\nBuscando id:"+number+" ");
            console.log(object.find(x => x.id === number));
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

randomValue = parseInt(Math.random()*1000)

async function runProgram() {

await productos.save({id,title:"prodNumber"+randomValue,price:randomValue*100,thumbnail:"http://thumbnail_"+randomValue});

await productos.getById(1);

console.log(await productos.getAll());

await productos.deleteById(1);

await productos.deleteAll();

}

runProgram();