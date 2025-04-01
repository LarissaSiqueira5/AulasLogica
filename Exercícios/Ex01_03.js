const prompt = require ('prompt-sync') ();

let numero = Number (prompt ('Digite o numero:'));
let dobro = numero * 2;
let triplo = numero * 3;
let elevado = numero **3;
console.log(dobro,triplo,elevado);
