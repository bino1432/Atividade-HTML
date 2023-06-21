let campoTarefa = document.querySelector('#campo-tarefa');
let botaoAdd = document.querySelector('#botao-adicionar');
let listaTarefa = document.querySelector('#lista-tarefas');

// evento pelo GetElementById
// botaoAdd = document.getElementById('botao-adicionar');
// botaoAdd.onclick = function() {
//     alert('clicado (GetElementById)');
// }

let itensSalvos = JSON.parse(localStorage.getItem('itens')) || []; 

itensSalvos.forEach(adicionarTarefa);

// evento pelo addEventListener
botaoAdd.addEventListener('click', function () {
    
    let tarefaNome = campoTarefa.value;

    adicionarTarefa(tarefaNome)

    itensSalvos.push(tarefaNome);

    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    campoTarefa.value = '';

});

// Adicionando o atalho "Enter"
campoTarefa.addEventListener('keyup', function (enter) {
    
    let tarefaNome = campoTarefa.value;

    if (enter.key === 'Enter') {
        adicionarTarefa(tarefaNome)

    itensSalvos.push(tarefaNome);

    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    campoTarefa.value = '';
    }
    
});


// function para adicionar uma tarefa
function adicionarTarefa(tarefaNome) {

    // alerta em cima da pagina
    // alert('Tarefa Adicionada!');

    // pegando o valor do campo de texto
    let nomeTarefa = tarefaNome;
    // adicionando um novo elemento LI   
    let novaTarefa = document.createElement('li');

    // definindo o conteúdo do elemento li
    novaTarefa.innerText = nomeTarefa;

    // Adicionar o item da lista ao final da lista
    listaTarefa.appendChild(novaTarefa);

    // Adicionar um ouvinte ao item da lista
    novaTarefa.addEventListener('click', function () {
        // Quando o item da lista é clicado adicionamos a classe 'concluido'
        novaTarefa.classList.toggle("concluida");
    });

    // Removendo Elementos
    // Criar botao excluir
    let botaoExcluir = document.createElement("button");

    botaoExcluir.className = "BotaoExcluir";

    // Definir o texto do botão excluir
    botaoExcluir.innerText = "Remover";

    // Adicionar o botão excluir
    novaTarefa.appendChild(botaoExcluir);

    // Adicionar um ouvinte ao botão excluir
    botaoExcluir.addEventListener('click', function () {

        // Deleta a tarefa da lista
        listaTarefa.removeChild(novaTarefa);

        // Aleta que removeu
        // alert('Tarefa Removida');
    });

    // Limpar o campo de texto
    campoTarefa.value = "";

    // Focar no campo de texto
    campoTarefa.focus();
};

// tema escuro
let tema = document.getElementById('btntema');

document.body.className = localStorage.getItem('modo') || 'modo-claro';

tema.addEventListener('click', function () {
    if (document.body.className === 'modo-claro') {
        document.body.className = 'modo-escuro'
    } else {
        document.body.className = 'modo-claro'
    }

    localStorage.setItem('modo', document.body.className);

});