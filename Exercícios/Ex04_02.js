const prompt = require('prompt-sync')();

let num = 1;
while (num <= 20) {
    if (num % 2 == 0) {
        console.log(`O num está no nº ${num}`);
    } 
    num++;
}
