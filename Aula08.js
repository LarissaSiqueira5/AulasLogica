const prompt = require('prompt-sync')();
// Estrutura condicional composta e encadeada 
//Operadores Lógicas 
//&& - e
// || - ou 
// ! - não

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2); // False pq 2 condição é F
console.log(a > 1 && b < 2); // True pq apenas 1 condição é V 
console.log(a > 1 && b < 4); // True pq 2 condição é V 
console.log(a > 1 && b < 4 && c > 5); // false

console.log(a > 2 || b > 2);// false nunhuma condição  e V
console.log(a > 1 || b > 2);//true pelo menos 1 v
console.log(a > 1 || b > 4);//true pelo menos 1 v
console.log(a > 1 || b > 4 || c > 4); // true

let altura = Number(prompt('Dgte sua altura:'))
let peso = Number(prompt('Dgte seu peso:'))
let IMC = peso / (altura ** 2);
if (IMC < 18.5) {
    console.log("Você está abaixo do peso ideal")
} else if (IMC > 18.5 && IMC < 24.5) {
    console.log("Você está no peso ideal")
} if (IMC > 25 && IMC < 29.9) {
    console.log(" Você está acima do seu peso ideal")
} else if (IMC > 30) {
    console.log(' Você está obeso')
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let lado1 = Number(prompt('Dgte seu lado1:'))
let lado2 = Number(prompt('Dgte seu lado2:'))
let lado3 = Number(prompt('Dgte seu lado3:'))
if (lado1 == lado2 && lado2 == lado3 && lado3 == lado1) {
    console.log("Equilátero");
} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
    console.log("escaleno");
} //else if ((lado1 == lado2 != lado3 && lado3 != lado1))
else {
    console.log('Seu triangulo é um isóceles');
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let valorVendasV = Number(prompt('Dgte o valor das vendas :'))
let qntdHoras = Number(prompt('Dgte a qtd d hrs:'))
if (valorVendasV > 5000 || qntdHoras > 40) {
    console.log('tem direto a bonus');
} else {
    console.log('Não rem direto a bonus')
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let letra = (prompt('Dgte a letra:'))
if (letra == "a"||letra=="e"||letra=="i"||letra=="o"||letra=="u") {
    console.log('vogal');
} else {
    console.log('consolante');
}













