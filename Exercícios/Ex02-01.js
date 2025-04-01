const prompt = require('prompt-sync')();


let nota2 = Number(prompt('Digite o nota2:'));
let media = (nota1 + nota2)
if (media >= 7) {
    console.log("Aprovado");
} else { // Se a prmeira condição for falsa
    console.log('Menor de idade');
}let nota1 = Number(prompt('Digite o nota1:'));
 