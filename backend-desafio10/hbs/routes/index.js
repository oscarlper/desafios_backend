const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('form')
})

router.get('/productos', (req, res) => {
        datos = db.getAll()
        res.render('listado', {datos, hasAny: true})
})

router.post('/productos',(req,res) => {
    id = db.lastId()
    const { title, price, thumbnail } = req.body
    db.producto.push({id,title,price,thumbnail})
    res.render('form', {datos: db.producto})
})

/*
router.get('/api/productos',(req,res) => {
    if (db.allItems() >0) {
        res.status(201).json(db.getAll())
    } else {
        return res.status(404).json({error: "no se encontraron productos"});
    }
})
*/

router.get('/api/productos/:id',(req,res) => {
    id = req.params.id
    if (db.getById(id) === undefined) {
        res.status(404).json({error: "producto no encontrado"})
    } else {
        res.status(201).json(db.getById(id))
    }
})
/*
router.post('/api/productos/',(req,res) => {
    id = db.lastId()
    //console.log("lastId "+db.lastId())
    //console.log("id "+id)
    const { title, price, thumbnail } = req.body
    db.producto.push({id,title,price,thumbnail})
    res.status(201).json(db.getById(id))
})
*/
// Envio el id por metodo put y le cambio el price a sin stock.
router.put('/api/productos/:id',(req,res) => {
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

router.delete('/api/productos/:id',(req,res) => {
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
db.producto = [
    {"id":1,"title":"Tablero","price":15000,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/board-math-class-school-128.png"},
    {"id":2,"title":"Microscopio","price":64500,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/microscope-lab-science-school-128.png"},
    {"id":3,"title":"Lapiz","price":260,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-128.png"},
    {"id":4,"title":"Escuadra","price":480,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-128.png"},
    {"id":5,"title":"Cuaderno","price":1420,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/book-note-paper-school-128.png"}]

//db.producto = []
module.exports = router