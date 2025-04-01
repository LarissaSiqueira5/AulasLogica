const prompt = require ('prompt-sync') ();

let real = Number (prompt ('Digite o real:'));
let dollar = real / 5.79;
//.toFixed(2) para por a quantidade de casas q deseja exibir. 
console.log(dollar.toFixed(2));
