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

module.exports = { database, chatdb }