//exercicio 1
const numero = 5;
console.log("o numero é: " + numero);
console.log("o sucessor é: " + (numero + 1));
console.log("o antecessor é: " + (numero - 1));

//exercicio 2
let valor = 100;
let numeroReajustado;
numeroReajustado = valor + (valor * 0.15);
console.log("o valor é: " + numeroReajustado);

//exercicio 3
let tempo = 3;
let velocidade = 45;
let distancia;
distancia = velocidade * tempo;
console.log("a distancia percorrida é: " + distancia + "Km");

//exercicio 4
let digito = 30;
if(digito > 20){
    console.log(digito / 2);
}

//exercicio 5
let valor1 = 8;
let valor2 = 7;

if (valor1 + valor2 > 10){
    console.log(valor1 + valor2);
}

//exercicio 6
let salario = 1000;
let prestacao = 600;
let emprestimo;

emprestimo = salario * 0.20
if (prestacao > emprestimo){
    console.log("Empréstimo não pode ser concedido.");
} else {
    console.log("Empréstimo pode ser concedido.");
}

//exercicio 7
let precoCompra = 30;
if(precoCompra > 20){
    console.log("aumento de 30%: " + ((precoCompra * 0.30) + precoCompra));
} else {
    console.log("aumento de 45%: " + ((precoCompra * 0.45) + precoCompra));
}

//exercicio 8
let idade = 24;
if(idade < 16){
    console.log("Não eleitor");
} else if(idade >= 16 || idade > 65){
    console.log("Eleitor obrigatório");
} else {
    console.log("Eleitor facultativo");
}

//exercicio 9
let array = [5, 7, 3];

console.log(sort());

function sort() {
    return array.sort();
}

//exercicio 10
let array1 = [1, 2, 3]
console.log(array1.reverse());

//exercicio 11
let array2 = [4, 1, 3, 7, 8, 9, 6, 5, 2];

console.log(sort1());

function sort1(){
    return array2.sort();
}

//exercicio 12
let array3 = [2, 4, 6];
let array4 = [9, 7, 5];

console.log(soma());

function soma() {
    
    let newArray = [3];
    for(let cont = 0; cont < array3.length; cont++){
        newArray[cont] = array3[cont] + array4[cont]
    }
    return newArray;
}

//exercicio 13
let C = 2000;
let I = 0.20;
let T = 3;

console.log(calculo())

function calculo() {

    let M;

    M = C * (1 + I) * T;
    return M;
}

//exercicio 14
let palavra = "amendoas";
let caracter = "a";

console.log(palavra);
console.log(caracter);
console.log("aparece: " + verificacao());

function verificacao(){

    let contador = 0;

    for(let cont = 0; cont < palavra.length; cont++){
        if (palavra.charAt(cont) == caracter){
            contador++;
        }
    }
    return contador;
}

//exercicio 15
const pessoa = {
    nome : "jão",
    idade : 69,
    profissao : "jogadorDeTibia", 
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

//exercicio 16
const pessoa1 = {
    nome : "jão",
    idade : 69,
    profissao : "jogadorDeTibia",
    hobbies : ["jogar", "lavarRoupa", "correr"],
}

console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.profissao);
console.log(pessoa1.hobbies);

//exercicio 17
let nome = ["Bernardo", "Daniel", "Kevin", "Nicolas", "Mathias", "João"];
console.log(nome);
nome.push("Kaue");
console.log(nome);
nome.pop();
console.log(nome);
nome.unshift("Kaue");
console.log(nome);
nome.shift();
console.log(nome);

//exercicio 18
let numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let nomes = ["Daniel", "Bernardo", "Kevin", "Nicolas", "Joao", "Matias"]
console.log(numeros.join());
console.log(numeros.reverse());
numeros.reverse();
console.log(numeros.slice(0,2));
console.log(nomes.sort());
const pares = numeros.filter((numeros) => {
    return numeros % 2 == 0;
});
console.log(pares)
const elevado = numeros.map((numeros) => {
    return numeros * numeros;
});
console.log(elevado)
const soma = numeros.reduce((acumulador, numeros) => {
    return acumulador + numeros;
}, 0);
console.log(soma);
nomes.forEach((nomes) => {
    console.log(nomes)
});

//exercicio 19
let idades = [40, 12, 53, 34, 20, 5];
const ehaceito = (aceito) => aceito >= 18;

console.log(idades.every(ehaceito));

//exercicio 20
let pi;
pi = Math.PI;
console.log(pi);

//exercicio 21
let meiaquatro = 64;
console.log(Math.sqrt(meiaquatro));