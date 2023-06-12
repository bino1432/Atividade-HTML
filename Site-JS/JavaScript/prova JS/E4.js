let frutas = ["maçã", "banana", "laranja"];

console.log(frutas);
frutas.push("manga", "abacaxi");
console.log(frutas);
frutas.shift();
console.log(frutas);
frutas.splice(1, 0, "tangerina", "abacate")
console.log(frutas);
frutas.unshift("abacaxi");
console.log(frutas);
console.log(frutas.length);

    const tamanho = frutas.map((fruta) => {
        return fruta.length;
    });
console.log(tamanho);

const maiores = frutas.filter((fruta) => {
    return fruta.length > 5;
});
console.log(maiores);

console.log(frutas);