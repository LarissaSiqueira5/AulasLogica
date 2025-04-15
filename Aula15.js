//escopo de variavel 
//Varavel global pode ser acessada em qualquer lugar
//Variavel local so pode ser acessada dentro do bloco

function nomeEscola (){
    let escola = 'SESI'
    console.log(`Valor dentro  da função: ${escola}`);
}
let escola = 'SENAI';
console.log(`Valor fora da função: ${escola}`);
nomeEscola();
console.log(`Valor após a função: ${escola}`);

//* soma de dois numeros 
/**
 * @param {number}a - primeiro numero
 * @param {number}b - segundo numero
 * @returns {number} - soma dos dois numeros 
 */
function soma (a,b){
    return a+b
}
soma (2,4);