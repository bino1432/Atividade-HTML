function quadrado(a,l) {
    return a*l;
}

function triangulo(a,l){
    return a*l / 2;
}

function circulo(r){
    return r * r * 3.14 
}

module.exports.quadrado = quadrado
module.exports.triangulo = triangulo
module.exports.circulo = circulo