const prompt = require('prompt-sync')();

function Divisao (nr1 , nr2){
let resultado = (nr1 / nr2)
console.log(resultado);

}
let nr1 = prompt('Qual é o número 1?');
let nr2 = prompt('Qual é o número 2 ?');
Divisao (nr1,nr2)