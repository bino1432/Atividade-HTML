//exercicio 1
function soma(a, b) {
    return a + b;
}
console.log(soma(3, 4))

//exercicio 2
const subtrair = function(a, b) {
    return a - b;
}
console.log(subtrair(10, 3));

//exercicio 3
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 4));

//exercicio 4
function ehPar(a) {
    if (a % 2 == 0){
        return true;
    } else {
        return false;
    }
}
console.log(ehPar(3));

//exercicio 5
function multiplicar(){
    const media = [6, 8, 9, 6, 10];
    let soma = 0;
    for(cont = 0; cont < media.length; cont++){
        soma += media[cont];
    }
    soma = soma / 5;
    return soma;
}
console.log(multiplicar());

//exercicio 6
function maiusculo() {
    let palavra = "javascript";
    palavra = palavra.toUpperCase();
    return palavra;
}
console.log(maiusculo());

//exercicio 7
function filtro() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numero = 5;
    for (cont = 0; cont < num.length; cont++) {
        const maiores = num.filter(num[cont] < numero);
    }
}
console.log(maiores);

//exercicio 8
function contador() {
    let num = [1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4];
    let valor = 4;
    let x = 0
    for(cont = 0; cont < num.length; cont++){
        if(num[cont] == valor) {
            x++;
        }
    }
    return x;
}
console.log(contador());

//exercicio 9
function vogal(palavra) {
    const vogais = ["a", "e", "i", "o", "u"];
    let contador = 0

    for(let cont = 0; cont < palavra.length; cont++){
        if(vogais.includes(palavra.charAt(cont))){
            contador++;
        }
    }
    return contador;
}
console.log(vogal("javascript"));

//exercicio 10
function array(numero){
    let sequencia = [];
    for(let cont = 1; cont <= numero; cont++){
        sequencia.push(cont)
    }
    return sequencia;
}
console.log(array(5));

//exercicio 11
let carro = {
    marca: "fiat",
    modelo: "palio",
    ano: 1996,
}
function diferenca(idade) {
    idade -= carro.ano;
    return idade;
}
console.log(diferenca(2023));

//exercicio 12
console.log(Math.random(100));