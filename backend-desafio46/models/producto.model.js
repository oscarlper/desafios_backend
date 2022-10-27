import { Schema, model } from "mongoose";

const productoSchema = new Schema({
  timestamp: { type: String },
  code: { type: String },
  title: { type: String },
  description: { type: String },
  thumbnail: { type: String },
  stock: { type: Number },
  price: { type: Number },
});

const Producto = model("productos", productoSchema )

export default Producto;