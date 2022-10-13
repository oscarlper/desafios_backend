# Test con Axios

## >node ./axios-test.js

### TODOS LOS PRODUCTOS

```

[
  {
    _id: '62d588217a6ba0cb6301f377',
    timestamp: '1657257479910',
    title: 'Molinillo cafe',
    code: 'molicoffe01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340876.png',
    price: 1700,
    stock: 100
  },
  {
    _id: '62d588217a6ba0cb6301f374',
    timestamp: '1657257479790',
    title: 'Celular 4G',
    code: 'cel4g128gb',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340753.png',
    price: 1280,
    stock: 100
  },
  {
    _id: '62d588217a6ba0cb6301f373',
    timestamp: '1657257479760',
    title: 'Speaker bluetooth',
    code: 'spkbth20w',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340824.png',
    price: 4320,
    stock: 0
  },
  {
    _id: '62d588217a6ba0cb6301f375',
    timestamp: '1657257479820',
    title: 'Lampara Camping',
    code: 'lampCamp5w',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340807.png',
    price: 2300,
    stock: 100
  },
  {
    _id: '62d588217a6ba0cb6301f372',
    timestamp: '1657257479730',
    title: 'Video Camara',
    code: 'vidcam01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340787.png',
    price: 4990,
    stock: 0
  },
  {
    _id: '62d588217a6ba0cb6301f378',
    timestamp: '1665624403322',
    title: 'Encendedor acero',
    code: 'encace01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340907.png',
    price: 3350,
    stock: 0
  },
  {
    _id: '62d588217a6ba0cb6301f371',
    timestamp: '1657154479730',
    title: 'Campana',
    code: 'bellsm01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7989/7989073.png',
    price: 2860,
    stock: 100
  },
  {
    _id: '633b6b2a06ecd05b847e75b6',
    title: 'Borrador',
    description: 'Borrador item 8',
    timestamp: '16312849723',
    code: 'BORR01',
    thumbnail: 'https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IVxP28r6py0bNb_Q4Z46jAAAAA%26pid%3DApi&f=1&ipt=7bdf7769c6c14c0f403f6e0a0f66c8bf63b8c6672b042a7e1d81f8cd5dba86d6&ipo=images',
    price: 525
  },
  {
    _id: '63473679a844ed51466ca2a8',
    timestamp: '1665611385964',
    code: '2546',
    title: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 15,
    price: 4675
  },
  {
    _id: '63476679a844ed51466ca2b0',
    timestamp: '1665623673500',
    code: '3005',
    title: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 9,
    price: 6157
  },
  {
    _id: '634766aea844ed51466ca2b7',
    timestamp: '1665623726823',
    code: '695',
    title: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 3,
    price: 6479
  },
  {
    _id: '63476952a844ed51466ca2c1',
    timestamp: '1665624402949',
    code: '3638',
    title: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 14,
    price: 9482
  }
]

```

### SOLO PRODUCTO ID: 633b6b2a06ecd05b847e75b6

```

[
  {
    _id: '633b6b2a06ecd05b847e75b6',
    title: 'Borrador',
    description: 'Borrador item 8',
    timestamp: '16312849723',
    code: 'BORR01',
    thumbnail: 'https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IVxP28r6py0bNb_Q4Z46jAAAAA%26pid%3DApi&f=1&ipt=7bdf7769c6c14c0f403f6e0a0f66c8bf63b8c6672b042a7e1d81f8cd5dba86d6&ipo=images',
    price: 525
  }
]

```

### SE CREA NUEVO PRODUCTO AXIOS Y SE LISTA

```

{ id: '634769e7a844ed51466ca2d0' }
[
  {
    _id: '634769e7a844ed51466ca2d0',
    timestamp: '1665624551785',
    code: 'Axi0',
    title: 'Nuevo producto Axios',
    thumbnail: 'https://images.opencollective.com/axios/f4438d6/logo/256.png',
    stock: 9999999,
    price: 1000000
  }
]

```

### SE MODIFICA NUEVO PRODUCTO

```

[
  {
    _id: '634769e7a844ed51466ca2d0',
    timestamp: '1665624552015',
    code: 'Axi0-v2',
    title: 'Nuevo producto Axios (Modificado)',
    thumbnail: 'https://images.opencollective.com/axios/f4438d6/logo/256.png',
    stock: 0,
    price: 2000000
  }
]

```

### SE BORRA NUEVO PRODUCTO

```

[
  {
    _id: '62d588217a6ba0cb6301f377',
    timestamp: '1657257479910',
    title: 'Molinillo cafe',
    code: 'molicoffe01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340876.png',
    price: 1700,
    stock: 100
  },
  {
    _id: '62d588217a6ba0cb6301f374',
    timestamp: '1657257479790',
    title: 'Celular 4G',
    code: 'cel4g128gb',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340753.png',
    price: 1280,
    stock: 100
  },
  {
    _id: '62d588217a6ba0cb6301f373',
    timestamp: '1657257479760',
    title: 'Speaker bluetooth',
    code: 'spkbth20w',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340824.png',
    price: 4320,
    stock: 0
  },
  {
    _id: '62d588217a6ba0cb6301f375',
    timestamp: '1657257479820',
    title: 'Lampara Camping',
    code: 'lampCamp5w',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340807.png',
    price: 2300,
    stock: 100
  },
  {
    _id: '62d588217a6ba0cb6301f372',
    timestamp: '1657257479730',
    title: 'Video Camara',
    code: 'vidcam01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340787.png',
    price: 4990,
    stock: 0
  },
  {
    _id: '62d588217a6ba0cb6301f378',
    timestamp: '1665624403322',
    title: 'Encendedor acero',
    code: 'encace01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7340/7340907.png',
    price: 3350,
    stock: 0
  },
  {
    _id: '62d588217a6ba0cb6301f371',
    timestamp: '1657154479730',
    title: 'Campana',
    code: 'bellsm01',
    thumbnail: 'https://cdn-icons-png.flaticon.com/128/7989/7989073.png',
    price: 2860,
    stock: 100
  },
  {
    _id: '633b6b2a06ecd05b847e75b6',
    title: 'Borrador',
    description: 'Borrador item 8',
    timestamp: '16312849723',
    code: 'BORR01',
    thumbnail: 'https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IVxP28r6py0bNb_Q4Z46jAAAAA%26pid%3DApi&f=1&ipt=7bdf7769c6c14c0f403f6e0a0f66c8bf63b8c6672b042a7e1d81f8cd5dba86d6&ipo=images',
    price: 525
  },
  {
    _id: '63473679a844ed51466ca2a8',
    timestamp: '1665611385964',
    code: '2546',
    title: 'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 15,
    price: 4675
  },
  {
    _id: '63476679a844ed51466ca2b0',
    timestamp: '1665623673500',
    code: '3005',
    title: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 9,
    price: 6157
  },
  {
    _id: '634766aea844ed51466ca2b7',
    timestamp: '1665623726823',
    code: '695',
    title: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 3,
    price: 6479
  },
  {
    _id: '63476952a844ed51466ca2c1',
    timestamp: '1665624402949',
    code: '3638',
    title: 'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    thumbnail: 'http://placeimg.com/640/480',
    stock: 14,
    price: 9482
  }
]

```

# TEST con Mocha Supertest y Chai

### >npm test

### >backend-desafio42@1.0.0 test

### >mocha ./api-test.js

```

    - POST /api/productos
      √ Deberia devolver status 201 (67ms)
    - GET /api/productos
      √ Deberia devolver status 201 (89ms)
    - DELETE /api/productos
      √ Deberia devolver status 201 (138ms)
    - PUT /api/productos
      √ Deberia devolver status 201 (227ms)
    - GET Unkown
      √ Deberia devolver status 404

  5 passing (533ms)

```
