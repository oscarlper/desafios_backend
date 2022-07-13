const { Router } = require('express')
const router = Router()

router.get('/productos',(req,res) => {
    if (db.allItems() >0) {
        res.status(201).json(db.getAll())
    } else {
        return res.status(404).json({error: "no se encontraron productos"});
    }
})

router.get('/:id',(req,res) => {
    id = req.params.id
    if (db.getById(id) === undefined) {
        res.status(404).json({error: "producto no encontrado"})
    } else {
        res.status(201).json(db.getById(id))
    }
})

router.post('/',(req,res) => {
    id = db.lastId()
    //console.log("lastId "+db.lastId())
    //console.log("id "+id)
    const { title, price, thumbnail } = req.body
    db.producto.push({id,title,price,thumbnail})
    res.status(201).json(db.getById(id))
})

// Envio el id por metodo put y le cambio el price a sin stock.
router.put('/:id',(req,res) => {
    id = req.params.id
    let resultado = "";
    let i;

    for (i = 0; i < db.allItems() ; i++) {
        if (Number(id) === db.producto[i].id) {
            resultado = 'encontrado';
            db.producto.splice(i, 1, {
                                        id: db.producto[i].id,
                                        title: db.producto[i].title,
                                        price: 'SIN STOCK',
                                        thumnail: db.producto[i].title
                                    });
            res.status(201).json(db.getById(id))
        } 
    }

    if (resultado !== 'encontrado') {
        res.status(404).json({ error : 'producto no encontrado' })
    }
})

router.delete('/:id',(req,res) => {
    id = req.params.id
    if (db.getById(id) !== undefined) {
        db.producto = (db.producto.filter(buscaId => buscaId.id !== Number(id)))
        res.status(201).json(db.producto)
    } else {
        res.status(404).json({ error : 'producto no encontrado' })
    }
})

class Contenedor {

    constructor () {
        this.producto = producto
    }

    getAll() {
            return this.producto
    }
    
    getById(id) {
        return this.producto.find(x => x.id == id)    
    }

    deleteAll() {
            productos = []
            return this.producto
    }

    allItems() {
            return (Object.keys(this.producto).length)
    }

    lastId() {
        let newItem = this.allItems()
        if (newItem === 0) {
            return(1)
        } else {
            return this.producto[newItem-1].id+1
        }
    }

}

let id;
const producto = []

const db = new Contenedor();
db.producto = [{"id":1,"title":"prodNumber387","price":38700,"thumbnail":"http://thumbnail_387"},{"id":2,"title":"prodNumber444","price":44400,"thumbnail":"http://thumbnail_444"},{"id":3,"title":"prodNumber641","price":64100,"thumbnail":"http://thumbnail_641"}]
//db.producto = []
module.exports = router