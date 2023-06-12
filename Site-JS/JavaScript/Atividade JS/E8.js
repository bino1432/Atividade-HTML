var array = [1, 10, 40, 30];
var maior = 0;

for(cont = 0; cont < array.length; cont++) {
    if(array[cont] > maior) {
        maior = array[cont];
    }
}
console.log(`o maior numero é ${maior}`);