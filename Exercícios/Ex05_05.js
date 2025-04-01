const prompt = require('prompt-sync')();
let somaidadeM = 0;
let qtdeM = 0;
let somaIdadeF = 0;
let qtdeF = 0;
for (let x = 1; x <= 10; x++) {
    let idade = Number(prompt('Digita sua idade'))
    let sexo = prompt('Digite seu sexo; (M/F)')

    if (sexo == "M") {
        qtdeM++;
        somaidadeM = somaidadeM + idade;
    } else if (sexo == "F") {
        qtdeF++;
        somaIdadeF = somaIdadeF + idade;
    }
}

console.log( `A média dos sexo M é de ${somaidadeM / qtdeM}`);
console.log( `A média dos sexo F é de ${somaidadeF / qtdeF}`);
console.log( `A média dos sexo F é de ${(somaidadeF +  qtdeM) / 10}`);
