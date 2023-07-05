async function buscaEndereco(cep) {
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCEPConvertida = await consultaCEP.json();
        console.log(consultaCEP);
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existe');
        }
        
        const cidade = document.getElementById('cidade');
        cidade.value = consultaCEPConvertida.localidade;
        console.log(consultaCEPConvertida);
    }

    catch(erro) {
        console.log(erro);
    }
}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));