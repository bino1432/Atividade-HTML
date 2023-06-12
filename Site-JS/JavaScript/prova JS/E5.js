const livro = {
    titulo: "O alquimista",
    autor: "Paulo Coelho",
    anoPublicacao: 1988, 
}
console.log(livro.titulo);
livro.anoPublicacao = 1992;
console.log(livro.anoPublicacao);
livro.editora = "Rocco";
console.log(livro.editora);
livro.getIdade = 2023 - livro.anoPublicacao;
console.log(livro.getIdade);
livro.getDescricao = "O livro " + livro.titulo + " foi escrito por " + livro.autor + " e publicado em " + livro.anoPublicacao;
console.log(livro.getDescricao);