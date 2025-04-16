export let mostrarDatos = () =>{
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let libreta = document.querySelector("#libreta").value;

    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
}

document.querySelector("#mostrarBtn").addEventListener("click", mostrarDatos);

