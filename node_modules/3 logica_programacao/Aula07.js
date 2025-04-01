const prompt = require ('prompt-sync') ();
//Operadores relacionais
// (==) igual/igualdade
// (!=) diferente
// (>=) maior/igual
// (<=) menor/igual
let a = 2;
let b = 3;
console.log(a > b); //false
console.log(a == b); //false
console.log(a != b); //true
console.log(a >= 2); //true
console.log(a > 2); //false

// if estrutura de condição muito ultilizada na programação 
let idade = Number (prompt('Qual é a sua idade?'))
if (idade >= 18) { 
    console.log('Pode dirigir');
}
let age = Number (prompt('Qual é a sua idade?'))
if (age <= 18) { 
    console.log('Não pode dirigr');
}
    
//ELSE complemento do IF
//IF-ELSE 1 será executada
tenhoIngresso = false;
if (tenhoIngresso == true) {// SE a condição for verdadeira 
    console.log(' Posso entrar no show');
    } else { // Se a primeira condição for false}
        console.log('Estou barrado na portara');
    }

    tenhoIngresso = false;
if (tenhoIngresso == true) {// SE a condição for verdadeira 
    console.log(' Posso entrar no show');
    } 

    let Id = Number (prompt('Qual é a sua idade?'))
    if (Id <= 18) { 
        console.log('Maior de idade');
    } else { // Se a prmeira condição for falsa
     console.log('Menor de idade');
    }


















































































































































