import { Schema, model } from "mongoose";

const carritoSchema = new Schema({
  timestamp_cart: { type: String, required: true },
  products:[{
    timestamp_prod: { type: String, required: true },
    id_prod: { type: String, required: true },
    stock: { type: Number, required: true },
    cant: { type: Number, required: true },
  }]
});

const Carrito = model("carritos", carritoSchema )

export default Carrito;