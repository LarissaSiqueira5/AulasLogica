const prompt = require ('prompt-sync') ();

let larguraMetros = Number (prompt ('Digite o largura em Metros:'));
let alturaMetros = Number (prompt ('Digite o altura em Metros:'));
let area = larguraMetros*alturaMetros;
let litros = area/2;
console.log(area);
console.log(litros);


