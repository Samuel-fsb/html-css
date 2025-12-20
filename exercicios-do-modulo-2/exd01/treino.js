let numeros = [3, 7, 2, 9, 4, 6, 1]
let soma = 0

for (let i = 0; i < numeros.length ; i++){
    soma = soma + numeros[i]
}

let t = soma / 2
if (t < numeros.length){
    console.log(t)
}

let m = (numeros.length + numeros.length ) / 2 
let acumular = [0] 
if (numeros[0] < m ){
    acumular = numeros[0]
}
console.log(acumular)