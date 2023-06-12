let nota1 = 7
let nota2 = 7
let nota3 = 7

if ((nota1 + nota2 + nota3) / 3 >= 7) {
    console.log("aluno aprovado");
} else if ((nota1 + nota2 + nota3) / 3 >= 5 && (nota1 + nota2 + nota3) / 3 < 7) {
    console.log("aluno em recuperaçao");
} else {
    console.log("aluno reprovado");
}