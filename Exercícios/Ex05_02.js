const prompt = require('prompt-sync')();

console.log('===========================');
console.log('🤔       MEGA SENA      🤔');
console.log('===========================');

for (let contador = 1; contador <= 6; contador++) {
    let nrMega = Math.floor(Math.random() * 60) + 1;
    console.log(nrMega);
    
}