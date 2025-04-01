const prompt = require ('prompt-sync') ();
//Criando nossa primeira variável
// Uma variável serve para armazenar uma informação/valor
//O memória crie um espaço com o nome curso e receba o valor 'Desenvolvimento de sistemas'
var curso = 'Desenvolvimento de sistemas';

//Exibindo o conteúdo da variável
console.log(curso);
console.log ('curso',curso)

//Criando e atribuindo valores a uma variável
var idade = 16; //inteira // integer
var temperatura = 24.5; // real // float
var nome = "Larissa"; // string 

console.log('Olá,' + nome + 'você tem' + idade + 'anos')
console.log ( ' está cursando'  +curso + 'hoje faz'  +temperatura + 'ºC'); 
//Declarando uma variável lógica/boleno (true/false)
var podeDirigir = true;
var estaChovendo = false;

//Declarando uma variável nula
//sempre começar com letra ou_
var escola;


// Exercício 
//Nota1
//nomeCompleto
//Nome Completo
//Média
//console
//_salario
//9idade
//Minha_Variavel
//var
//valor$
//nome-completo
//escola_
//TELEFONE
//true

let cidade = 'Andradina'
var turma ='2ºB'
const ano = 2025

console.log (turma);
turma - '3ºB'
console.log (turma);
//ano = 2026; //Não podemos  reatribuir valor a uma constante

let _nome = "Larissa"
let _idade = '16'
let _peso = '69'
console.log (_nome, _idade, _peso)

_nome = prompt ('Qual é o nome?');
_idade = prompt ('Qual é o idade?');
_peso = prompt ('Qual é o peso?');
console.log (_nome, _idade, _peso);

console.log(typeof _nome, typeof _idade, typeof _peso);

//Criem 2 variaveis num1 e num2 e recebam as informações pelo prompt
let num1 = prompt('Digite o primeiro nº:');
let num2 = prompt ('Digite o segundo nº:');
console.log (num1 + num2);

console.log (typeof num1); //string
num1 = Number (num1); //Convertendo a variavel do tipo string para number
console.log(typeof num1); // number

//Receber uma informação já convertendo seu tipo de dados
let nr1 = Number (prompt ('Digita o primeiro nº'));//Number
let nr2 = Number (prompt ('Digita o segundo nº')); //Number
console.log(nr1 + nr2);

//Convertendo os dados de uma variável 
nr1 = '100.14'; //string
nr1 = ('100.14');// convertendo  string para number
nr1 = parseInt ('100.14'); //convertendo string para integer
nr1 = parseFloat ('100'); // convertendo string para float 100.00
nr1 = String (100.14); //convertendo um number para string

_nome = prompt ('Qual é o nome?');
_idade = parseInt (prompt ('Qual é o idade?'));
_peso = parseFloat (prompt ('Qual é o peso?'));
console.log (_nome, _idade, _peso);










