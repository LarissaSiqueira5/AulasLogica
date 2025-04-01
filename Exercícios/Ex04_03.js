const prompt = require('prompt-sync')();

let qtdePares = 0;
let qtdeImpares = 0;
let somaPares = 0;
let somaIMpares = 0;

while (true) {
    let num = Number(prompt('Dgite um numero (0 para encerrar):'))

    if (num == 0) {
        break;
    } if (num % 2 == 0) {
        qtdePares++;
        somaIMpares = somaPares + num;
    } else {
        qtdeImpares++;
        somaIMpares = somaIMpares + num;
    }

}
console.log(`Você comprou no total ${qtde} produtos`);
co
nsole.log(`Valor total em compra R$ ${total.toFixed(2)}`);

