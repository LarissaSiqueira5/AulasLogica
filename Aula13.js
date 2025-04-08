const prompt = require('prompt-sync')();

//Interção sobre nossos vetores (arrays/listas)

//Vetor         0         1        2       3
let frutas = ['maçã', 'banana', 'Abacaxi', 'Uva'];
//Para interar sobre um vetor, ultilizamos o for
for (let x = 0; x < frutas.length; x++) {
    let frutaAtual = frutas[x]
    console.log(`'Afrutga da posição ${x} é ${frutas[x]}`);
}
console.log('FIM');

//Interando sobre uma lista usando o for of
let listaJogadores = ['Gabriel Carmo', 'Richard Rios', 'Endrick', 'Veiga']
for (let jogador of listaJogadores) {
    console.log(`O jogador é ${jogador}`);
}

let soma = 0;
let listaNumeros = [5, 22, 10, 23]
for (let numeros of listaNumeros) {
    console.log(`O numero é ${numeros}`);
    soma = numeros + soma;
}
console.log(soma);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verficando se  ujm element existe em um array
let vogais = ['a', 'e', 'i', 'o', 'u'];
let consolantes = ['b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numeroS = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

let letrasParaVerificar = prompt('Digite uma letra:')
if (vogais.includes(letrasParaVerificar.toLowerCase())) {
    console.log(`A letra ${letrasParaVerificar} é uma vogal`);
} else if (consolantes.includes(letrasParaVerificar.toLowerCase())) {
    console.log(`A letra ${letrasParaVerificar} é uma consolante`);
} else if (numeroS.includes(letrasParaVerificar.toLowerCase())) {
    console.log(`${letrasParaVerificar}  é um número`);

} else {
    console.log(`${letrasParaVerificar} não  é um número`);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let listaFrutas = ['maça', 'banana', 'abacaxi', 'uva'];
for (const [pos, fruta] of listaFrutas.entries()) {
    console.log(fruta);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let produtos = 'celular, notebook, tv, tablet, monitor'
let listaProdutos = produtos.split(',')
console.log(produtos);
console.log(listaProdutos
);

let escola = 'SENAI'
console.log(escola[0]);
for (const letra of escola) {
    console.log(letra);

}



