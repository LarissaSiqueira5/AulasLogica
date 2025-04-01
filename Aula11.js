const prompt = require('prompt-sync')();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Inicialização da variável; condção do for ; incremento da variável
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
}

for (let contador = 5; contador <= 50; contador++) {
    console.log(contador);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log('Entregando os notebooks');
for (let nr = 1; nr <= 32; nr ++) {
    let nome = prompt(` Quem é o nº ${nr}:`)
    let presente = prompt(` 0(A) ${nome} está presente (S ou N)?`)

    if (presente == "S") {
        console.log(` Pegar o notebook ${nr}`);
        console.log(`Levar o notebook até o(a) ${nome}`);
    } else {
        console.log(`Não pegar o notebook ${nr}`);
    }
}

// tabuada com for
let nr = 6;
for ( let contador = 1; contador <=10; contador++) {
    console.log(`${nr} x ${contador}= ${nr * contador}`);
    
}
