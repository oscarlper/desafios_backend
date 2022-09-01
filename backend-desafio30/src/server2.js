const express = require('express')
const app = express()
const path = require('path')

const cluster = require('cluster')
const os = require('os')

const cpus = os.cpus()
const PORT = Number(process.argv[2]) || 3000
const isCluster = process.argv[3] == 'cluster'

if (isCluster && cluster.isPrimary) {
    cpus.map(()=> {
        cluster.fork()
    })

    cluster.on("exit", (worker) => {
        console.log(`Worker ${worker.process.id} stopped`);

        cluster.fork()
    })

} else {
    expressServer = app.listen(PORT, () => 
        console.log(`Server listening on port ${PORT}`)
        )
    }
    
require('dotenv').config()

const api = require('./apis/index')
app.use('/', api)
