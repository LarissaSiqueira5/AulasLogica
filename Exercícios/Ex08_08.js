function senhaAleatoria (qtdecaracteres){
let listacaracteres = ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%¨&*()_+=']
let senha = ';'

for (let x =1; x <= qtdecaracteres; x++){
let posSorteada = Math.floor(Math.random()* listacaracteres.length) 
senha = senha + listacaracteres[posSorteada]
}
return senha;
}
let senhaGerada = senhaAleatoria(500)
console.log(senhaGerada);
