const prompt = require('prompt-sync')();

let anoNascimento = parseInt(prompt('qual o anoNascimento?'))
if (anoNascimento <= 2007) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}
