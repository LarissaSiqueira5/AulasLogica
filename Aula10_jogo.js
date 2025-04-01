const prompt = require('prompt-sync')();

console.log('========================================');
console.log('🤔          JOGO DA ADIVINHAÇÃO      🤔');
console.log('========================================');

let nrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentatvas = 0;
while (acertou == false) {
    let chute = Number(prompt('Digite um nº entre 1 e 100:'))
    tentatvas ++;
    if (chute == nrSecreto) {
        console.log(`Parabéns você acertou em ${tentatvas} tentativas! 👏👏 `)
        acertou = true;
    } else if (chute > nrSecreto) {
        console.log(` Você chutou ${chute}, tente um número👇`)
    } else if (chute < nrSecreto) {
        console.log(` Você chutou ${chute}, tente um número👆`)
    }
}
console.log('FIM');
