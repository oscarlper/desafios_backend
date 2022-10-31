import Producto from "../models/producto.model.js";

const getProductById = async (ctx) => {
  const { id } = ctx.params;
  try{
    const books = await Producto.find({_id:id});
    ctx.response.status = 200;
    ctx.body = {
      status: "Succes",
      data: books,
    };
  } catch(err) {
    ctx.response.status = 404;
    ctx.body = {
      status: "Not found",
    };
  }
};

const createProduct = async (ctx) => {

  console.log(ctx.request.body)

  const { timestamp, code, title, thumbnail, stock, price } = ctx.request.body;

  if (!timestamp || !code || !title || !thumbnail || !stock || !price) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const createdProduct = await Producto.create({ timestamp, code, title, thumbnail, stock, price });

    ctx.response.status = 201;
    ctx.body = {
      status: "Created!",
      data: createdProduct,
    };
  }
};

const updateProduct = async (ctx) => {
  const { id } = ctx.params;
  const { timestamp, code, title, thumbnail, stock, price, description } = ctx.request.body;

  console.log({ id, timestamp, code, title, thumbnail, stock, price, description })

  if (!id || !timestamp || !code || !title || !thumbnail || !stock || !price || !description) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const { id } = ctx.params;
    
    const updatedProduct = await Producto.updateOne({ _id: id}, { timestamp, code, title, thumbnail, stock, price, description });

    ctx.response.status = 201;
    ctx.body = {
      status: "Updated!",
      data: { id, timestamp, code, title, thumbnail, stock, price, description },
    };
  }
};

const deleteProduct = async (ctx) => {
  const { id } = ctx.params;

  try{
    const producto = await Producto.deleteOne({_id:id});
    ctx.response.status = 200;
    ctx.body = {
      status: "Succes",
      data: producto,
    };
  } catch(err) {
    ctx.response.status = 404;
    ctx.body = {
      status: "Not found",
    };
  }
};

const getAllProduct = async (ctx) => {
  const productos = await Producto.find({});

  ctx.response.status = 200;
  ctx.body = {
    status: "Succes",
    data: productos,
  };
};

export default {
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
};