async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json();
        console.log(consultaCEP);
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existe');
        }
        
        const cidade = document.getElementById('cidade');
        cidade.value = consultaCEPConvertida.localidade;

        const bairro = document.getElementById('bairro');
        bairro.value = consultaCEPConvertida.bairro;
        
        const complemento = document.getElementById('complemento');
        complemento.value = consultaCEPConvertida.complemento;

        const estado = document.getElementById('estado');
        estado.value = consultaCEPConvertida.uf;

        const endereco = document.getElementById('endereco');
        endereco.value = consultaCEPConvertida.logradouro;

        console.log(consultaCEPConvertida);
    }

    catch(erro) {
        mensagemErro.innerHTML = `<p>CEP inválido, Tente Novamente.</p>`
        console.log(erro);
    }
}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));