# Ecommerce-Backend Entrega #44

http://localhost:3000/graphql

### Devuelve un producto por id


```

{
  obtenerProducto(id: "62d588217a6ba0cb6301f378")
  {
    title
    stock
    price
    thumbnail
  }
}


```

### Devuelve todos los productos

```

{
  obtenerProductos(value: "")
  {
    title
    stock
    price
    thumbnail
  }
}


```

### Crea un producto

```

mutation createProduct{
  createProduct(datos: {code: "ABC", title: "Producto GraphiQL", price: 999, stock: 1, thumbnail: "http://www.google.com.ar"}) {
    id
  }
}

```

### Borra un producto por id

```

mutation delProduct{
  delProduct(id: "634766aea844ed51466ca2b7") {
    id
  }
}

```

### Actualiza un producto por id

```

mutation updateProduct{
  updateProduct(id: "63473679a844ed51466ca2a8",datos:{code: "ABCDE", title: "Producto GraphiQL", price: 999, stock: 1, thumbnail: "http://www.google.com.ar"})
  {
    id
    code
    title
    price
    stock
    thumbnail
  }
}

```