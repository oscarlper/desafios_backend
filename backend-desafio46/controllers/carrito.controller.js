import Carrito from "../models/carrito.model.js";

const getCartById = async (ctx) => {
  const { id } = ctx.params;
  try{
    const books = await Carrito.find({_id:id});
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

const createCart = async (ctx) => {

  const { timestamp_cart, timestamp_prod, stock, cant, id_prod } = ctx.request.body;

  if (!timestamp_cart || !stock || !cant || !timestamp_prod || !id_prod) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const createdCart = await Carrito.create({ timestamp_cart, products:[{timestamp_prod, id_prod, stock, cant}]});

    ctx.response.status = 201;
    ctx.body = {
      status: "Created!",
      data: createdCart,
    };
  }
};

const deleteCart = async (ctx) => {
  const { id } = ctx.params;

  try{
    const carrito = await Carrito.deleteOne({_id:id});
    ctx.response.status = 200;
    ctx.body = {
      status: "Succes",
      data: carrito,
    };
  } catch(err) {
    ctx.response.status = 404;
    ctx.body = {
      status: "Not found",
    };
  }
};

const getAllCart = async (ctx) => {
  const carritos = await Carrito.find({});

  ctx.response.status = 200;
  ctx.body = {
    status: "Succes",
    data: carritos,
  };
};

const delProdCart = async (ctx) => {
  const { id, id_prod } = ctx.params;

  console.log('carrito: '+id+'producto: '+id_prod)

  if (!id_prod || !id ) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const result = await Carrito.updateOne(
      { "_id": id },
      { $pull: { "products": { "id_prod": id_prod } } },
  );

    ctx.response.status = 201;
    ctx.body = {
      status: "Updated!",
      data: result,
    };
  }
};

const addProdCart = async (ctx) => {
  const { id } = ctx.params;
  const { timestamp_prod, stock, cant, id_prod } = ctx.request.body;

  if (!id_prod || !id || !timestamp_prod || !stock || !cant) {
    ctx.response.status = 400;
    ctx.body = {
      status: "Missing data",
      message: "Please enter the data",
    };
  } else {
    const updatedCart = await Carrito.updateOne({_id: id},{$push: {products: { timestamp_prod, stock, cant, id_prod }}});

    ctx.response.status = 201;
    ctx.body = {
      status: "Updated!",
      data: updatedCart,
    };
  }
};

export default {
  getCartById,
  createCart,
  deleteCart,
  getAllCart,
  delProdCart,
  addProdCart,
};