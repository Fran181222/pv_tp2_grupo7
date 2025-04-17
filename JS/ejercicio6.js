// 6. Crear un array denominado edades con al menos 8 edades distintas.

const edades = [18, 29, 37, 16, 45, 61, 28, 55];
const suma = edades.reduce((sum, edad) => sum + edad, 0); //usé const porque no es una variable que no voy a volver a reasignar 
const promedio = suma / edades.length; //usé length para que recorra la array saber cuantos objetos hay en la array

console.log(suma);
console.log(promedio);


// Recorrer el array y obtener el promedio de las edades del array.
