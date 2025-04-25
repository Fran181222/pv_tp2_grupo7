// Escribir una función llamada duplicar que reciba un arreglo de números y retorne un 
// nuevo arreglo donde cada número esté multiplicado por dos (2)
function duplicar(arreglo) {
    return arreglo.map(function(num) {
        return num*2;
    });
}
function numeros(){
let pedir=prompt("Ingrese números (separados con coma)")
let arreglo=pedir.split(",").map(function(num){
return Number(num.trim()); 
});
let resultado=duplicar(arreglo);
document.getElementById("resultado").textContent="El resultado es: "+resultado.join(", ");
}

