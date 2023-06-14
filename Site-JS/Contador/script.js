let contar = document.querySelector('#numero');
let add = document.querySelector('#add');
let remove = document.querySelector('#remove');
let zerar = document.querySelector('#zerar');

add.addEventListener('click', addNum);

remove.addEventListener('click', removeNum);

zerar.addEventListener('click', zerarNum);

function addNum(){
    var numero = parseInt(contar.textContent) + 1;
    contar.textContent = numero;
}   

function removeNum(){
    var numero = parseInt(contar.textContent) - 1;
    contar.textContent = numero;
}

function zerarNum(){
    var numero = 0;
    contar.textContent = numero;
}