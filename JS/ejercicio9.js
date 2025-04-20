// Solicitar al usuario que ingrese su nombre, luego muestre un mensaje de bienvenida: Hola (aquí el nombre del usuario), bienvenido a Programación Visual!
export const saludar = () => {
    const nombre = document.getElementById("nombre").value;
    console.log(`Hola ${nombre}, bienvenido a Programaciòn Visual!`);
};
document.getElementById("btnvalidar").addEventListener("click",saludar);