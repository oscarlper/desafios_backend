
import { buildSchema } from "graphql"

export const productoSchema = buildSchema(`
    input ProductoInput {
        code: String,
        title: String,
        thumbnail: String,
        stock: Int,
        price: Int,
    }

    type Producto {
        id: ID!
        timestamp: String,
        code: String,
        title: String,
        thumbnail: String,
        stock: Int,
        price: Int,
    }

    type Query {
        obtenerProducto(id: ID!): Producto,
        obtenerProductos(value: String): [Producto],
    }

    type Mutation {
        createProduct(datos: ProductoInput): Producto,
        updateProduct(id: ID!, datos: ProductoInput): Producto,
        delProduct(id: ID!): Producto, 
    }
`);

export default productoSchema;