const prompt = require('prompt-sync')();

let velocidade = Number(prompt('Digite a velocidade:'))
if (velocidade > 80) {
    console.log('multa')
    let multa = (velocidade - 8) * 7.0
    console.log(multa)
} else {
    console.log('Não multa')
}