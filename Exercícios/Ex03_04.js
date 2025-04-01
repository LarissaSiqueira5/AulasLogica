const prompt = require('prompt-sync')();

let nomeMes = (prompt('Dgte o nome do mês:'))
if (nomeMes == "janeiro" || nomeMes == "Março" || nomeMes == "Maio" || nomeMes == "Julho" || nomeMes == "Agosto" || nomeMes == "Outubro" || nomeMes == "Dezembro") {
    console.log('31 Dias');
} else if (nomeMes == "Abril " || nomeMes == 'Junho' || nomeMes == 'Setembro' || nomeMes == 'Novembro') {
    console.log('30 dias');
} else if (nomeMes == 'Fevereiro') {
    console.log('28 dias');
}



