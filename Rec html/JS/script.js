let btnheader = document.getElementById('btn-header');

document.body.className = localStorage.getItem('modo') || 'modo-claro';
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
btnheader.addEventListener('click', function() {
    if (document.body.className === 'modo_claro') {
        document.body.className = 'modo_escuro';
    } else {
        document.body.className = 'modo_claro';
    }
    localStorage.setItem('modo', document.body.className);
});

async function buscaEndereco(cep) {
    try {
        const verificarCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const verificarCepCerto = await verificarCEP.json();
        if (verificarCepCerto.erro) {
            throw Error('CEP não existe');
        }
        
        const cidade = document.getElementById('cidade');
        cidade.value = verificarCepCerto.localidade;

        const bairro = document.getElementById('bairro');
        bairro.value = verificarCepCerto.bairro;

        const rua = document.getElementById('rua');
        rua.value = verificarCepCerto.logradouro;

        const estado = document.getElementById('estado');
        estado.value = verificarCepCerto.uf

        console.log(verificarCepCerto);
    }

    catch(erro) {
        console.log(erro);
        mensagemErro.innerHTML = `<p>Cep não existe.</p>`
    }
}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));