let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let array2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let array3 = [10];
let casa = 0;

console.log(juntarArrays());

function juntarArrays() {
    for(let cont = 0; cont <= array1.length; cont++){
        for(let contador = 0; contador <= array2.length; contador++){
            if (array1[cont] == array2[contador]){
                array3[casa] = array1[cont];
                casa++;
            }
        }
    }

    return array3;
}