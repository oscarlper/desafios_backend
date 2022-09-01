const express = require("express");
const { fork } = require("child_process");
const os = require('os')

process.on("uncaughtException", (error) => {
    console.error(`Error: ${error}`);
  });

const api = express();
api.use(require('body-parser').urlencoded({ extended: false }));

api.get("/api/random", (req, res) => {
    const forked = fork("./src/apis/child.js",);

    const iteraciones = req.query.iteraciones ? req.query.iteraciones : 1e8

    forked.send(iteraciones);
    forked.on("message", (msg) => {
    res.json({'Numeros Random Duplicados': msg});
    });

});

api.get("/info", (req, res) => {

    res.json({
            'Argumentos de entrada':process.argv ,
            'Nombre de la plataforma': process.platform,
            'Versión de node.js': process.version,
            'Memoria total reservada': process.memoryUsage().rss,
            'Path de ejecución': process.execPath,
            'Process ID': process.pid,
            'Carpeta del proyecto': process.argv[1],
            '#vCPU(Threads)': os.cpus().length,
            'HTTP_PORT':Number(process.argv[2])
    });
});

module.exports = api