const consultaCEP = fetch('https://viacep.com.br/ws/99999999/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if(r.erro) {
            throw Error('Esse CEP não existe!');
        } else {
            console.log(r)
        }
    })
    .catch(err => console.log(err))
    .finally(mensagem => console.log('Processamento concluido'));

console.log(consultaCEP);