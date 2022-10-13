import faker from "faker";
faker.locale = "es";

function generateProduct() {
  return {
    nombre: faker.commerce.productName(),
    timestamp: faker.commerce.price(1600000,1700000,0),
    title: faker.commerce.productDescription(),
    code: faker.commerce.price(500,5000,0),
    thumbnail: faker.image.imageUrl(),
    price: faker.commerce.price(1000,9900,0),
    stock: faker.commerce.price(1,20,0),
  };
}

export default {
  generateProduct,
};




