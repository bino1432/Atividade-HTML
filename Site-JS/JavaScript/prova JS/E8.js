const estudante = {
    nome: "Kristian Erdmann",
    idade: 15,
    nota1: 5,
    nota2: 9,
    nota3: 6,
}
estudante.media = (estudante.nota1 + estudante.nota2 + estudante.nota3) / 3;
if (estudante.media >= 7){
    estudante.situacao = "Aprovado";
} else {
    estudante.situacao = "reprovado";
}
console.log("Nome: " + estudante.nome + ", média: " + estudante.media + ", situação: " + estudante.situacao);