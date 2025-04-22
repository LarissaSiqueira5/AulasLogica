const prompt = require('prompt-sync')();

let valorHora = Number(prompt("Que valor você ganha por hora?"))
let horaTrbalhada = Number(prompt("Digite o número de horas trabalhadas"))
let salarioBruto = valorHora * horaTrbalhada
console.log(salarioBruto);
let ir = salarioBruto * 11/100
console.log(`O valor do IR é ${ir}`);

let INSS = salarioBruto * 8/100
console.log(`Valor do INSS ${INSS}`);

let sindicato = salarioBruto *  5/100
console.log(` Valor do sindicato ${sindicato} `);

let salarioLiquido = (salarioBruto - (ir + INSS + sindicato))
console.log(salarioLiquido);
