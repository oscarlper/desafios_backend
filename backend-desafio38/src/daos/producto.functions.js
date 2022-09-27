const { database } = require('../config/db')
const logger = require('../libs/logger')
const Contenedor = require('../daos/producto.dao')
const tableName = 'products';
const db = new Contenedor( database,tableName );

const createProductTable = async () => {
    try {
        const exists = await database.schema.hasTable(tableName)
        if (!exists) {
            await database.schema
            .createTable(tableName, (table) => {
                table.increments("id").primary();
                table.string("title", 50).notNullable();
                table.integer("price");
                table.string("thumbnail", 255);
            })
            console.log("Table created");
            await insertProducts()
        }
    } catch (error) {
        console.log(error);
        logger.error(`timestamp: ${Date.now()} - Product table - Error: ${error}`);
        database.destroy();
}
};

async function insertProducts() {
    try {
        const productsObject = [
            {"title":"Tablero","price":15000,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-128.png"},
            {"title":"Microscopio","price":64500,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-128.png"},
            {"title":"Lapiz","price":260,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-128.png"},
            {"title":"Escuadra","price":480,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-128.png"}]
    
    await database(tableName).insert(productsObject)

    console.log('Products created')

    } catch(err) {
        console.log(err)
        database.destroy()
    }
}

module.exports = { createProductTable, insertProducts }