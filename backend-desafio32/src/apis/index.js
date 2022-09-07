const express = require("express");
//const { fork } = require("child_process");
const os = require('os')
const compression = require('compression')
const logger = require('../controllers/logger.js')

process.on("uncaughtException", (error) => {
    console.error(`Error: ${error}`);
});

const api = express();
api.use(compression())
api.use(require('body-parser').urlencoded({ extended: false }));

api.get("/api/random", (req, res) => {
    
    //forked
    //const forked = fork("./src/apis/child.js",);
    //not forked

    const iteraciones = req.query.iteraciones ? req.query.iteraciones : 1e8

    //forked msg
    //forked.send(iteraciones);
    //forked.on("message", (msg) => {
    
    //not forked msg
    msg = numerosRandom(iteraciones)
    res.json({'Numeros Random Duplicados': msg});

    //});

});

api.get("/info", (req, res) => {

    const { url, method } = req;
    logger.warn(`timestamp: ${Date.now()} - url: ${url} - method: ${method}`);
    
    // Test node prof / artillery
    /*
    console.log({
        'Argumentos de entrada':process.argv ,
        'Nombre de la plataforma': process.platform,
        'Versión de node.js': process.version,
        'Memoria total reservada': process.memoryUsage().rss,
        'Path de ejecución': process.execPath,
        'Process ID': process.pid,
        'Carpeta del proyecto': process.argv[1],
        '#vCPU(Threads)': os.cpus().length,
        'HTTP_PORT':Number(process.argv[2])||3000
    })
    */
    res.json({
        'Argumentos de entrada':process.argv ,
        'Nombre de la plataforma': process.platform,
        'Versión de node.js': process.version,
        'Memoria total reservada': process.memoryUsage().rss,
        'Path de ejecución': process.execPath,
        'Process ID': process.pid,
        'Carpeta del proyecto': process.argv[1],
        '#vCPU(Threads)': os.cpus().length,
        'HTTP_PORT':Number(process.argv[2])||3000
    });
});

// random notforked
function numerosRandom(iteraciones) {

    let objetoRandom = []
    for (let iter=0;iter<iteraciones;iter++) {
        let randomNum = Math.floor(Math.random()*1000)+1;
        objetoRandom.push(randomNum)
    }
    
    const duplicados = objetoRandom.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
    
    return duplicados
}

module.exports = api