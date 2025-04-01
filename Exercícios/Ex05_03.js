const prompt = require('prompt-sync')();

let totalPar = 0;
let totalImpar = 0;
let qtdeImpares = 0;
let qtdePares = 0;

for (let contador = 1; contador <= 5; contador++) {
    let numero = Number(prompt('Digite um número '));
    if(numero % 2 ==0){
        totalPar = totalPar + numero;
        qtdePares++;
    }else{
        totalImpar = totalImpar + numero;
        qtdeImpares++;
    }
} 
console.log(`Total da soma de números pares ${totalPar} e a quantidade ${qtdePares}`)
console.log(`Total da soma de números pares ${totalImpar} e a quantidade ${qtdeImpares}`)
