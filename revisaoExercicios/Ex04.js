const prompt = require('prompt-sync')();

let valorHora = Number(prompt("Que valor você ganha por hora?"))
let horaTrbalhada = Number(prompt("Digite o número de horas trabalhadas"))
let salario = valorHora * horaTrbalhada
console.log(salario);

