//Estruturas condicionas alinhadas 
// Switch case

const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVip = true;

if (valorCompra >= 100) {
    if (clienteVip == true)
        console.log(`Você ganhou R$ ${valorCompra * 10 / 100}`);
} else {
    let restante = valorCompra - 100;
    console.log(`compre mas R$ ${restante} e ganhe desconto`);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let idade = (prompt('Dgte a idade:'))
if (idade < 16) {
    console.log("Não pode votar")
} else if (idade > 18 && idade < 70) {
    console.log('Obrgatório');
} else if (idade > 16 && idade < 18) {
    console.log("Facultativo")
} else if (idade > 70) {
    console.log('Facultativo')

}////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let n1 = Number(prompt('Dgte a n1:'))
let n2 = Number(prompt('Dgte a n2:'))
let op = (prompt('Dgte  o operador ( + - / * **):'))
switch (op) {
    case "+":
        console.log(n1 + n2);
        break;
    case '-':
        console.log(n1 - n2);
        break;
    case '/ ':
        console.log(n1 / n2);
        break;
    case '*':
        console.log(n1 * n2);
        break;
    case '**':
        console.log(n1 ** n2);
        break;
    default: console.log('Operador inválido ');
}




