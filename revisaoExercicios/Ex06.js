const prompt = require('prompt-sync')();

let altura =  prompt("Digite a altura")
let sexo =  prompt("Digite o sexo")
        
if (sexo == "f") {
    let pesoIdealF = ((61.2 * altura)-44.7)
    console.log(`Se a sexo for  ${sexo} o peso ideal é ${pesoIdealF}`);
} else if (sexo == "m") {
    let pesoidealM = ((72.7 * altura)-58)
    console.log(`Se a sexo for ${sexo}  o peso ideal é ${pesoidealM}`);
} else {
    console.log(`Se a sexo for ${sexo} o sexo é inválido`);
}
                                                