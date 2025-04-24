// Solicitar al usuario que ingrese un número. Comparar si es par o no, usando un if/else determinar si es par que muestre un alert
// indicando que el número es par o sino mostrar un alert indicando que es impar.
let input = prompt("Ingrese un numero");
let numero = Number(input);

    if(numero === 0){
        alert ("El numero es 0")
    }else if (numero % 2 === 0) {
        alert("El numero es par");
    }else{
        alert("El numero no es par");
    }