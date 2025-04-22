const prompt = require('prompt-sync')();

let letra = prompt("Digite uma letra")
if (letra == "f") {
    console.log(`Se a letra for  ${letra} o sexo é feminino`);
} else if (letra == "m") {
    console.log(`Se a letra for ${letra} o sexo é masculino`);
} else {
    console.log(`Se a letra for ${letra} o sexo é inválido`);
    
}

