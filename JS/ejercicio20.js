const paisesCapitales = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "México": "Ciudad de México",
    "Perú": "Lima"
};
const cargarPaises = () => {
    const selectPais = document.getElementById("pais");
    const selectCapital = document.getElementById("capital");

    for (const pais in paisesCapitales) {
        const opcionPais = document.createElement("option");
        opcionPais.value = pais;
        opcionPais.textContent = pais;
        selectPais.appendChild(opcionPais);

        const opcionCapital = document.createElement("option");
        opcionCapital.value = paisesCapitales[pais];
        opcionCapital.textContent = paisesCapitales[pais];
        selectCapital.appendChild(opcionCapital);
    }

    selectPais.selectedIndex = 0;
    selectCapital.selectedIndex = 0;
}

let actualizarCapital = () => {
    const selectPais = document.getElementById("pais");
    const selectCapital = document.getElementById("capital");

    const paisSeleccionado = selectPais.value;
    const capitalCorrespondiente = paisesCapitales[paisSeleccionado];

    for (let i = 0; i < selectCapital.options.length; i++) {
        if (selectCapital.options[i].value === capitalCorrespondiente) {
            selectCapital.selectedIndex = i;
            break;
        }
    }
    console.log("País:", paisSeleccionado);
    console.log("Capital:", capitalCorrespondiente);
}

window.onload = cargarPaises;