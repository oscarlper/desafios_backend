import Router from "koa-router";
import productoRouter from "./producto.router.js";
import carritoRouter from "./carrito.router.js";

const router = new Router({
  prefix: "/api",
});

router.use(productoRouter.routes());
router.use(carritoRouter.routes());

export default router;