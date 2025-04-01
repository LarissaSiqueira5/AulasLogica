const prompt = require('prompt-sync')();

let nInteiro1 = parseInt(prompt('Digite o nInteiro1:'))
let nInteiro2 = parseInt(prompt('Digite o nInteiro2:'))
if (nInteiro1 == nInteiro2) {
    console.log('Igual')
} else {
    console.log('Diferente')
}