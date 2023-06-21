let listaCompras = document.getElementById('lista-Compras');
let btn = document.getElementById('adicionar-btn');
let item = document.getElementById('item-input');

let itensSalvos =  JSON.parse(localStorage.getItem('itens')) || [];
itensSalvos.forEach(adicionarItemNaLista);

btn.addEventListener('click', function() {
    let nomeItem = item.value;
    adicionarItemNaLista(nomeItem);

    itensSalvos.push(nomeItem);

    localStorage.setItem('itens', JSON.stringify(itensSalvos));
    inputItem.value = '';

});
function adicionarItemNaLista(nomeItem) {

    let itemLista = document.createElement('li')
    itemLista.innerText = nomeItem;
    listaCompras.appendChild(itemLista);

}