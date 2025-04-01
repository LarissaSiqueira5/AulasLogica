const prompt = require('prompt-sync')();

let nInteiro = parseInt(prompt('Digite o nInteiro:'))
if (nInteiro <= 0) {
    console.log('nInteiro é negativo')
} else {
    console.log('postivo')
}