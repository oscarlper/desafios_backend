import Router from "koa-router";
import productoController from "../controllers/producto.controller.js";

const router = new Router({
  prefix: "/producto",
});

router.get("/", productoController.getAllProduct);

router.get("/:id", productoController.getProductById);

router.post("/", productoController.createProduct);

router.put("/:id", productoController.updateProduct);

router.delete("/:id", productoController.deleteProduct);

export default router;