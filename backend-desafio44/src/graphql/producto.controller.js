import config from "../config/config.js";
import mongoose from "mongoose";
import productoClass from './producto.class.js' 
await mongoose.connect(config.mongodb.connectionString);

const mdb = mongoose.model('productos', {
    timestamp: { type: String, required: true },
    code: { type: String, required: true },
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
  })

async function obtenerProducto(id) {
    const query = await mdb.find({_id:id.id},{ __v: 0 })
    return query[0] 
}

async function obtenerProductos() {
    const query = await mdb.find({},{ __v: 0 })
    return query 
}

async function createProduct({datos}) {
    datos.timestamp = Date.now()
    console.log({datos})
    try {
        const result = await mdb.create(datos);
        return obtenerProductos()
    } catch(err) {
        
        console.log(err)
    }
}

async function delProduct(id) {
    try {
        await mdb.deleteOne({ _id:id.id})
        return id
    } catch (err) {
        console.log(err)
    }
}

async function updateProduct({id,datos}) {
    datos.timestamp = Date.now()
    try {
        const doc = await mdb.updateOne({ _id: id }, datos);
        return {id: id, code: datos.code, title: datos.title, price: datos.price, stock: datos.price, thumbnail: datos.thumbnail}
    } catch (err) {
        console.log(err)
    }
}

export default { 
    obtenerProducto, 
    obtenerProductos, 
    createProduct, 
    delProduct,
    updateProduct
};