const prompt = require('prompt-sync')();

let nota1 = Number(prompt('Digite o nota1:'));
let nota2 = Number(prompt('Digite o nota2:'));
let media = (nota1 + nota2)
if (media >= 7) {
    console.log("Aprovado");
} else if (media > 5 && media < 7) {
    console.log('Recuperação');
} else if (media < 5) {
    console.log('reprovado');

}
