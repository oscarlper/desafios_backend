const express = require('express')
const app = express()
const rutas = require('./routes/index')
const { engine } = require('express-handlebars')
const path = require('path')

const puerto = 8888

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: path.join(__dirname, './views/layouts/main.hbs'),
    layoutsDir: path.join(__dirname, './views/layouts'),
    partialsDir: path.join(__dirname, './views/partials')
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))

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
