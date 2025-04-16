// 7. Declarar un array denominado nombres con al menos 6 nombres.
// Obtener el nombre más largo del array nombres.
// Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length)
// que indica su tamaño.

let nombres = ["Gabriel", "Ruan", "Davide", "Brian", "Francisco", "Pablo"];

// Variable para guardar el nombre más largo
let nombreMasLargo = nombres[0];
let i = 0;
for (i = 1; i < nombres.length; i++) {
  if (nombres[i].length > nombreMasLargo.length) {
    nombreMasLargo = nombres[i];
  };
};
console.log("El nombre más largo es: " + nombreMasLargo);