function media(a){
    
    let soma = 0
    let tamanho = 0

    for(let cont = 0; cont <= a.lenght; cont++){
        soma = soma + a[cont]; 
        tamanho++;
    }
    
    let media = soma / tamanho

    return media;
}

module.exports.media = media;