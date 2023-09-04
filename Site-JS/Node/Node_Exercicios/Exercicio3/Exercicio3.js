function CforF(a){
    let farenheit = (a * 9/5) + 32

    return farenheit
}

function FforK(a){
    let Kevin = (a - 32) * 5/9 + 273.15

    return Kevin
}

function KforC(a){
    let Celsius = a - 273.15

    return Celsius
}

module.exports.CforF = CforF;
module.exports.FforK = FforK;
module.exports.KforC = KforC;