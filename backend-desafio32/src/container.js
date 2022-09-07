const producto = []

class Contenedor {
    
    constructor (database,tableName) {
        try{
            this.database = database
            this.tableName = tableName
        } catch(e) {
            console.log('Error db en constructor', e)
        } 
        this.producto = producto
    }

    async getAll() {
        try {
                return await this.database.from(this.tableName).select('*');
            } catch (e) {
                console.log("Error en getall: ",e);
            } 
    }
    
    getById(id) {
        return this.producto.find(x => x.id == id)    
    }

    deleteAll() {
            productos = []
            return this.producto
    }

    allItems() {
            this.producto = this.database.from(this.tableName).select('*')
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
    async insertProduct(title, price, thumbnail){
        const elemento = {
            title,
            price,
            thumbnail,
        }
        const product= await this.database.from(this.tableName).insert(elemento)
        return product
    }

}

module.exports= Contenedor 