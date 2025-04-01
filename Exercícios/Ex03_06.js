const prompt = require('prompt-sync')();

let salarioMes = Number(prompt('Digite o salarioMes:'))
if (salarioMes <= 2000.00) {
    console.log('ajuste 12%')
    let ajuste = salarioMes * 0.12
    console.log(ajuste + salarioMes)
} if (salarioMes <= 4000.00) {
    console.log('ajuste 10%')
    let rAjuste = salarioMes * 0.10
    console.log(rAjuste + salarioMes)
} if (salarioMes > 4000.00) {
    console.log('ajuste 8%')
    let rrAjuste = salarioMes * 0.08
    console.log(rrAjuste + salarioMes);
}