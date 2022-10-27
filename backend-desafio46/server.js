import Koa from "koa";
import koaBody from "koa-body";
import router from "./routes/index.js";
import mongoose from "mongoose";

const app = new Koa();

dotenv.config(); 
const DB_USER=process.env.DB_USER 
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_NAME=process.env.DB_NAME
const DB_CLUSTER=process.env.DB_CLUSTER

import dotenv from "dotenv";

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
);

app.use(koaBody());

app.use(router.routes());

app.use((ctx) => {
  ctx.response.status = 404;
  ctx.body = {
    status: "Not found !!!",
    message: "Route not found",
  };
});

app.listen(3000);
console.log("Serlver listening http://127.0.0.1:3000");