const prompt = require ('prompt-sync') ();

//Declarando variável sem dados (undefined)
let nota;
//Declarando variável com informacao 
let nome ='Gabriel';

//Reatribuindo um valor á variável nome
nome = 'Eliana';
nota = 8,5;

//Entrada de dados em nosso 
let sobrenome = prompt ('Digite seu sobrenome:');
let nota1 = Number (prompt ('Digite a nota da 1º prova:')); 
let nota2 = Number (prompt ('Digite a nota da 2º prova:'));

//Processamento dos dados 
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + '' + sobrenome;
let nomeCompleto2= `${nome} ${sobrenome}`;
let idade = prompt ('Dgite sua idade:');
let idadeNumero = parseInt (idade)

//Saida dos dados 
console.log('--- relatorio final---');
console.log(` O seu nome é: ${nomeCompleto} \n sua idade ${idade}`);
console.log('O seu nome é: '+ nomeCompleto + '\n sua idade' + idade);
console.log(`Sua média é: ${média}`);

let n = 0; //0
n = n + 1; //1
n = n + 1; //2
n = n  +1; //3
n += 1;    //4
n++;       //5
n += 3;    //8
n--;       //7
n = n -1;  //6
n -= 2;    //4


let horasPorDia = Number(prompt('Quantas horas trabalhou por dia?'));
let diasTrabalhados = Number(prompt('Quantos dias trabalhou?'));
let valorHora = Number(prompt('Qual é o valor da hora?'));
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * valorHora;
console.log(`O custo total é de R$ ${custoTotal}`);








