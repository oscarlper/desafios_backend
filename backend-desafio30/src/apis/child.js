function numerosRandom(iteraciones) {

let objetoRandom = []
for (let iter=0;iter<iteraciones;iter++) {
    let randomNum = Math.floor(Math.random()*1000)+1;
    objetoRandom.push(randomNum)
}

const duplicados = objetoRandom.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})

return duplicados
}

process.on("message", (iteraciones) => {
    const resultado = numerosRandom(iteraciones)
process.send(resultado)
process.exit()
});