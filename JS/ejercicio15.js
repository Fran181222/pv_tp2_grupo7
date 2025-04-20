// Escribir una función llamada retornar mes, que reciba un número entero y si corresponde a un mes del año devolver el nombre del mes, si no se cumple entonces mostrar un mensaje que no es un mes.
export const nombremes = () =>{
    let mes = parseFloat(document.getElementById("txtmes").value);
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    if (mes>0 && mes<=12) {
        document.getElementById("resultado").innerText=`Nombre del mes: ${meses[mes-1]}`;
    } else {
        document.getElementById("resultado").innerText=`No es un mes`;
    }
}
document.getElementById("btnvalidar").addEventListener("click",nombremes);