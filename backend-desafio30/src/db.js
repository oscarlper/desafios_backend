const knex = require('knex')
const path = require('path')
const DB_USER=process.env.DB_USER 
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_NAME=process.env.DB_NAME
const DB_CLUSTER=process.env.DB_CLUSTER

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
    connectionString: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    //connectionString: "mongodb+srv://mongodba:7ANW9tHm5OT7UHi4@cluster0.vtuqq.mongodb.net/desafio24?retryWrites=true&w=majority",
    }

module.exports = { database, chatdb, mongodb }