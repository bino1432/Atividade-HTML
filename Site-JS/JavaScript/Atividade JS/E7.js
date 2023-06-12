var palavra = porta;
var reverso;

reverso = palavra.split('').reverse().join('')
    if (reverso == palavra) {
        console.log(`é um palidromo`);
    } else {
        console.log(`não é um palidromo`);
    }