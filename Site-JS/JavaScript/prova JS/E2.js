let array = [0, 1]
let numeroArray = 1
let soma = 0;

for(let cont = 0; soma < 50000; cont++){
    array.push(array[numeroArray - 1] + array[numeroArray]);
    console.log(array[cont]);
    numeroArray++;
    if(array[cont] % 2 == 0){
        soma += array[cont];
    }
}
console.log("a soma dos pares é: " + soma);