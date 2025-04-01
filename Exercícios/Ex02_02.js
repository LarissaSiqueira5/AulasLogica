const prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite o n1:'))
let n2 = Number(prompt('Digite o n2:'))
if (n1 > n2) {
    console.log('n1 é o maior')
}
if (n1 < n2) {
    console.log('n2 é o maior')
}
