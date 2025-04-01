const prompt = require ('prompt-sync') ();
let numero = Number (prompt ('Digite o numero:'));
let antecessor = numero - 1;
let sucessor = numero + 1;
console.log(antecessor, sucessor);
