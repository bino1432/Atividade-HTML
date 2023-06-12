console.log(numerosPrimos());

function numerosPrimos(){

    for (let cont = 1; cont <= 100; cont++){
        if (cont == 2){
            console.log(cont);
        } else if (cont == 3){
            console.log(cont);
        } else if (cont == 5){
            console.log(cont);
        } else if (cont == 7){
            console.log(cont);
        } else if (cont % 2 != 0 && cont % 3 != 0 && cont % 5 != 0 && cont % 7 != 0){
            console.log(cont);
        }
    }
}