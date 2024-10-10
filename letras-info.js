const elementosTextoInfo = [
    "Esta es la página de información.",
    "Aquí puedes encontrar más detalles.",
    "Gracias por visitar."
];

const elementoPrincipalInfo = document.getElementById("texto-info");
const cursorInfo = document.getElementById("cursor-info");
let indexElementoInfo = 0;
let indexCharInfo = 0;

function escribirTextoInfo() {
    if (indexElementoInfo < elementosTextoInfo.length) {
        if (indexCharInfo < elementosTextoInfo[indexElementoInfo].length) {
            // Agregar la letra actual al contenido principal
            elementoPrincipalInfo.innerHTML += elementosTextoInfo[indexElementoInfo].charAt(indexCharInfo);
            indexCharInfo++;
            setTimeout(escribirTextoInfo, 200); // Tiempo entre cada letra
        } else {
            // Saltar a la siguiente línea
            elementoPrincipalInfo.innerHTML += "<br>"; // Agrega un salto de línea
            indexElementoInfo++; // Cambia al siguiente texto
            indexCharInfo = 0; // Reinicia el índice de caracteres
            setTimeout(escribirTextoInfo, 200); // Espera antes de comenzar la siguiente línea
        }
    } else {
        // Cuando todo el texto haya sido escrito, ocultar el cursor
        cursorInfo.style.display = "none"; // Opcional: ocultar el cursor después de escribir
    }
}

// Iniciar la escritura del texto
escribirTextoInfo();