const prompt = require('prompt-sync')();

let valorVendaMes = Number(prompt('Digite o valorVendaMes:'))
if (valorVendaMes > 5000.00) {
    console.log('comissão 5%')
    let comissão = valorVendaMes * 0.05
    console.log(comissão)
} if (valorVendaMes < 5000.00) {
    console.log('comissão 3%')
    let comissão = valorVendaMes * 0.03
    console.log(comissão)
} 
