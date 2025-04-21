const campo = document.getElementById("campoTexto");
const salida = document.getElementById("salidaTexto");

document.addEventListener("input", ()=> {
const texto = campo.value;
salida.textContent = texto

if (texto.length > 20) {
    salida.style.backgroundColor = "red";
} else{
    salida.style.backgroundColor = "black";
}
})