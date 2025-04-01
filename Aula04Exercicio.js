const prompt = require ('prompt-sync') ();

//1º Crie 4 variáveis já atribuindo valores e exiba elas no console
let _nomeAluno = 'Larissa';
let _Altura = 1.57;
let _Escola ='Sesi';
let _anoAtual = 2025;
console.log(_nomeAluno, _Altura, _Escola, _anoAtual);

//2º Crie variáveis com...
let _nomeProfessor = prompt ('Qual o nome da professora?');
let _matéria = prompt('Qual a matéria?');
let _anoIngresso = prompt ('Qual o ano de ingresso?');

//3º
 _nomeAluno = prompt ('Qual é o seu nome?');
 _Altura = parseFloat(prompt('Qual sua altura?'));
 _Escola = prompt('Qual sua escola?');
 _anoAtual = parseInt (prompt('Qual o ano atual?' ));
console.log(_nomeAluno, _Altura, _Escola, _anoAtual);
