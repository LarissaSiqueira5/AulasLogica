// Estrutura de laço de produção
const prompt = require('prompt-sync')();

// Ex1
let resposta = 'S';
while (resposta == 'S') {
    console.log("Você está dentro do bloco");
    resposta = prompt('Deseja continuar? S/N')
}
console.log('FIM');

//Ex2
let senhaSecreta = 'Senai'
let senhaDigitada = prompt('Qual a senha secreta')
while (senhaSecreta != senhaDigitada) {
    console.log("Descubra a senha secreta");
}
console.log('FIM');

//Ex3
let contador = 1;
while (contador <= 5) {
    console.log(`O contador está no nº ${contador}`);
    contador = contador++;
}

// EX4 
let total = 0;
let qtde = 0;

while (true) {
    let valor = Number(prompt('Dgite o valor do produto (0 para encerrar):'))

    if (valor == 0) {
        break;
    } else {
        total = valor + total
        qtde++;
    }
}

console.log(`Você comprou no total ${qtde} produtos`);
console.log(`Valor total em compra R$ ${total.toFixed(2)}`);

