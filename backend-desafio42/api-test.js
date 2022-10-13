import supertest from "supertest";
import { expect } from "chai";
import productFactory from "./factory/product.factory.js";

let request;

describe("Test sobre API REST FULL", () => {
    before(() => {
    request = supertest("http://localhost:3000");
});

describe("- POST /api/productos", () => {
    it("Deberia devolver status 201", async () => {
        const productToCreate = productFactory.generateProduct();
        const response = await request.post("/api/productos").send(productToCreate);

        expect(response.status).to.eql(201);
    });
});

describe("- GET /api/productos", () => {
    it("Deberia devolver status 201", async () => {
        const response = await request
        .get("/api/productos/62d588217a6ba0cb6301f372")
        expect(response.status).to.eql(201);
        expect(response.body[0]).to.keys("_id","timestamp","title","code","thumbnail","price","stock");
    });
});

describe("- DELETE /api/productos", () => {
    it("Deberia devolver status 201", async () => {
        const response = await request
        .delete("/api/productos/634768f4a844ed51466ca2bc")
        expect(response.status).to.eql(201);
        expect(response.body[0]).to.keys("_id","timestamp","title","code","thumbnail","price","stock");
    });
});

describe("- PUT /api/productos", () => {
    it("Deberia devolver status 201", async () => {
            const productToModify = {timestamp: Date.now(), stock: 0}
            const response = await request.put("/api/productos/62d588217a6ba0cb6301f378").send(productToModify);

            expect(response.status).to.eql(201);
    });
});


describe("- GET Unkown", () => {
    it("Deberia devolver status 404", async () => {
        const response = await request.get("/Unkown");

        expect(response.status).to.eql(404);
    });
});
});