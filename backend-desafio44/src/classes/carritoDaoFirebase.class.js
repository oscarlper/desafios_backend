import ContenedorFirebase from "../controllers/controller.Firebase.js";

class CarritoDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("carritos");
  }
}

export default CarritoDaoFirebase;