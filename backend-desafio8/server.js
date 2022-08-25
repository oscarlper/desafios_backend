const express = require('express')
const app = express()
const rutas = require('./routes/index')

const puerto = 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(`${__dirname}/public`))

app.use('/api/productos', rutas)

app.listen(puerto,(e)=> {
    if(e) {
        console.log(`Error!!! Puerto ${puerto} en uso ?`)    
    }else{      
        console.log(`Servidor escuchando en puerto ${puerto}`)
    }
})
