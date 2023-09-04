function media(a){
    
    let soma = 0

    for(let cont = 0; cont < a.length; cont++){
        soma = soma + a[cont]; 
    }
    
    let mediaArray = soma / a.length

    return mediaArray
}

module.exports.media = media;