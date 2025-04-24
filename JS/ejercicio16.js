const sumarRango = (inicial, final) => {
    if (inicial > final) {
        return "El numero inicial debe ser menor que el numero final"
    }
    let suma = 0
    for (let i = inicial; i <= final; i++) {
        suma += i
    }
    return suma; 
}

const inicial = Number(prompt("Ingrese numero inicial: "))
const final = Number(prompt("Ingrese numero final: "))

const resultado = sumarRango(inicial, final);
alert("La suma de los numeros es: " + resultado)
