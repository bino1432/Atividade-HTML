for (let cont = 0; cont <= 100; cont++){
    if (cont % 3 == 0 && cont % 5 == 0){
        console.log("FizzBuzz");
    } else if (cont % 3 == 0){
        console.log("Fizz");
    } else if (cont % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(cont)
    }
}