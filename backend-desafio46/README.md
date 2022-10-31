# Ecommerce-Backend Entrega #46 KOA

## Listar todos los productos (GET)

http://localhost:3000/api/producto/

## Listar un producto por id (GET)

http://localhost:3000/api/producto/[id_prod]

## Crear un nuevo producto (POST)

```

x-www-form-urlencoded:
    timestamp
    code
    title
    thumbnail
    stock
    price

```

## Borrar un producto por id (DELETE)

http://localhost:3000/api/producto/[id_prod]

## Actualizar un producto por id (PUT)

```

x-www-form-urlencoded:
    timestamp
    code
    title
    thumbnail
    stock
    price

```

## Agregar un producto al carrito por id (POST)

localhost:3000/api/carrito/[id_cart]/productos

```

x-www-form-urlencoded:
    timestamp_prod
    id_prod
    stock
    cant

```

## Quitar un producto del carrito por id_cart e id_prod (DELETE)

localhost:3000/api/carrito/[id_cart]/productos/[id_prod]

## Crea un nuevo carrito (POST)

localhost:3000/api/carrito

```

x-www-form-urlencoded:
    timestamp_cart
    timestamp_prod
    id_prod
    stock
    cant

```

## Elimina un carrito por id (DELETE)

http://localhost:3000/api/carrito/[id_cart]