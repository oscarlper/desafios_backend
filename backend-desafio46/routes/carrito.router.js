import Router from "koa-router";
import carritoController from "../controllers/carrito.controller.js";

const router = new Router({
  prefix: "/carrito",
});

router.get("/", carritoController.getAllCart);

router.get("/:id", carritoController.getCartById);

router.post("/", carritoController.createCart);

router.post("/:id/productos", carritoController.addProdCart);

router.delete("/:id/productos/:id_prod", carritoController.delProdCart);

router.delete("/:id", carritoController.deleteCart);

export default router;