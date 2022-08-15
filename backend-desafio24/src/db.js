const knex = require('knex')
const path = require('path')

const configMySql = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'backend-desafio16'
    },
    "pool": { "min": 2, "max": 600}
}
const database = knex(configMySql)

const configSQLite3 = {
    client: 'sqlite3',
    connection: {
        filename: (path.join(__dirname,'./db_storage/chatdb.sqlite'))
    },
    useNullAsDefault: true
}
const chatdb = knex(configSQLite3)

const mongodb = {
//    connectionString: "mongodb://localhost:27017/desafio22",
    connectionString: "mongodb+srv://mongodba:7ANW9tHm5OT7UHi4@cluster0.vtuqq.mongodb.net/desafio24?retryWrites=true&w=majority",
    }

module.exports = { database, chatdb, mongodb }