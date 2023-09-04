function primo(a) {

    let soma = 0

    for (let cont = 1; cont <= a; cont++) {
        if (a % cont == 0) {
            soma++;
        }
    }
    if (soma == 2) {
        return "o numero é primo";
    } else {
        return "o numero não é primo";
    }
}

module.exports.primo = primo;