let calcularMayor = (numero1, numero2)=> {
    if (numero1 > numero2) {
        alert("El número mayor es: " + numero1);
    } else if (numero2 > numero1) {
        alert("El número mayor es: " + numero2);
    } else {
        alert("Ambos números son iguales: " + numero1);
    }
}
const numero1 = parseFloat(prompt("Ingresa el primer número:"));
const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

calcularMayor(numero1, numero2);