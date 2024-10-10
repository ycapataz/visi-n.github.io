const elementosTexto = [
    "Bienvenido.!",
    "Esta es tu invitación...",
    "Las sombras susurran...",
    "La oscuridad aguarda..",
    "30/11/2024."
];

const elementoTexto = document.getElementById("texto");
const cursor = document.getElementById("cursor");
let indexElemento = 0;
let indexChar = 0;

function escribirTexto() {
    if (indexElemento < elementosTexto.length) {
        if (indexChar < elementosTexto[indexElemento].length) {
            // Agregar la letra actual al contenido principal
            elementoTexto.innerHTML += elementosTexto[indexElemento].charAt(indexChar);
            indexChar++;
            setTimeout(escribirTexto, 10); // Tiempo entre cada letra
        } else {
            // Saltar a la siguiente línea
            elementoTexto.innerHTML += "<br>"; // Agrega un salto de línea
            indexElemento++; // Cambia al siguiente texto
            indexChar = 0; // Reinicia el índice de caracteres
            setTimeout(escribirTexto, 200); // Espera antes de comenzar la siguiente línea
        }
    }
}

// Iniciar la escritura
escribirTexto();