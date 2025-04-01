const prompt = require('prompt-sync')();

let nInteiro = parseInt(prompt('Digite o nInteiro:'))
if (nInteiro % 2 == 0) {
    console.log('nInteiro é par')
} else {
    console.log('Impar')
}