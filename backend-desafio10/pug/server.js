const express = require('express')
const app = express()
const path = require('path')
const rutas = require('./routes/index')
const puerto = 8888


app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(`${__dirname}/public`))

app.use('/', rutas)

app.listen(puerto,(e)=> {
    if(e) {
        console.log(`Error!!! Puerto ${puerto} en uso ?`)    
    }else{      
        console.log(`Servidor escuchando en puerto ${puerto}`)
    }
})
