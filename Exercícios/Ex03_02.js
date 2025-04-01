const prompt = require('prompt-sync')();

let anoAtual = Number(prompt('Digite o anoAnual:'));
let anoNascimento = Number(prompt('Digite o ano nascimento:'));
let faixaEtária = anoAtual - anoNascimento
console.log(faixaEtária)

if (faixaEtária <= 10) {
    console.log('Criança');
} if (faixaEtária >= 11 && faixaEtária <= 17) {
    console.log('Adolescente');
} if (faixaEtária >= 18 && faixaEtária <= 59) {
    console.log('adulto');
} if (faixaEtária >= 60) {
    console.log('idoso');
}


