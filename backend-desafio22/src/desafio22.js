const { Router } = require('express')
const routerD22 = Router()
const { faker } = require("@faker-js/faker")

faker.locale = "es";

routerD22.get("/", async (req, res) => {
    const response = fakeProducts();
    res.status(201).json(response)
    }
);

function fakeProducts() {
    const response = []
    for (let i = 1; i <= 5; i++) {
        response.push({
            id: i,
            title: faker.commerce.product(),
            price: faker.random.numeric(5),
            thumbnail: faker.image.abstract()
        });
    }
    return response
}

module.exports = routerD22;