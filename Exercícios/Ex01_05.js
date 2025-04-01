const prompt = require ('prompt-sync') ();

//lendo o valor em metros 
let metros = Number (prompt ('Digite o metros:'));
//convertendo em cm
let centimetros = metros *100;
//convertendo em mm
let milimetros = metros *1000;
//convertendo em km
let km = metros/1000;
//exibindo o valor 
console.log(centimetros,milimetros,km);
