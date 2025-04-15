const prompt = require('prompt-sync')();

function receba(nr1, nr2, op) {
    if (op === '+') {
        console.log(`A soma de ${nr1} + ${nr2} é ` + (nr1 + nr2))
    } else if (op === '-') {
        console.log(`A subtração de ${nr1} - ${nr2} é ` + (nr1 - nr2))
    } else if (op === '/') {
        console.log(`A divisão de ${nr1} / ${nr2} é ` + (nr1 / nr2))
    } else if (op === '*') {
        console.log(`A multplicação de ${nr1} * ${nr2} é ` + (nr1 * nr2))
    } else if (op === '**') {
        console.log(`A exponencação de ${nr1} ** ${nr2} é ` + (nr1 ** nr2))
    }
}

let nr1 = prompt('Qual é o número 1?');
let nr2 = prompt('Qual é o número 2 ?');
let operacao = prompt('Que tipo de cálculo deseja realizar, sugestão + - / * **')
receba(nr1, nr2, operacao)