import dotenv from "dotenv";
dotenv.config();

import SingletonClass from '../classes/singleton.class.js'

//prueba de instancias

let instance = 0
let actualInstance = SingletonClass.getInstance()

if (!instance) {
    instance = SingletonClass.getInstance()
}

console.log(instance.value === actualInstance.value)

let ProductoDao;
let CarritoDao;

switch (process.env.DATABASE) {
    case "firebase":
        const { default: ProductoDaoFirebase } = await import(
        "./productoDaoFirebase.class.js"
        );
        const { default: CarritoDaoFirebase } = await import(
        "./carritoDaoFirebase.class.js"
        );
        
        ProductoDao = ProductoDaoFirebase;
        CarritoDao = CarritoDaoFirebase;

        break;
    case "mongodb":
        const { default: ProductoDaoMongodb } = await import(
        "./productoDaoMongodb.class.js"
        );
        const { default: CarritoDaoMongo } = await import(
        "./carritoDaoMongodb.class.js"
        );

        ProductoDao = ProductoDaoMongodb;
        CarritoDao = CarritoDaoMongo;

        break;
}

export default { ProductoDao , CarritoDao };
