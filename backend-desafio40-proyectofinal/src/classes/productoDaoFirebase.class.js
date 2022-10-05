import ContenedorFirebase from "../controllers/controller.Firebase.js";

class ProductoDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("productos");
  }
}

export default ProductoDaoFirebase;