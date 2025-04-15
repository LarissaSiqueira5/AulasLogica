const prompt = require('prompt-sync')();

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`A tabuada de ${numero} x ${i} = ` + (numero * i));
    }
}
let nr = prompt('Qual é o número?');
tabuada(nr)