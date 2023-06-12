const frase = "Programacao web e mobile";
let letra = 0;
let vezes = 0;

for (let contador = 0; contador < frase.length; contador++) {
    for (let cont = 0; cont < frase.length; cont++) {
        if (frase.charAt(letra) == frase.charAt(cont)) {
            vezes++;
        }
    }
    if (vezes >= 2) {
        console.log("A letra " + frase.charAt(letra) + " aparece: " + vezes + " vezes");
    }
    letra++;
    vezes = 0;
}