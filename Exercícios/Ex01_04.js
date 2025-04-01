const prompt = require ('prompt-sync') ();

let nota1 = Number (prompt ('Digite o nota1:'));
let nota2 = Number (prompt ('Digite o nota2:'));
let media = (nota1 + nota2) / 2;
console.log(media);

