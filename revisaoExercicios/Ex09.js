const prompt = require('prompt-sync')();

function parImpar (num) {
    num = Number(prompt("Qual o numero?"))
 if (num % 2 == 0) {
    console.log('É par');
 }
   if (num % 2 == 1) {
    console.log('É impar');
 }
}
parImpar()
parImpar()