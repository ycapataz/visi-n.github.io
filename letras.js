const elementosTexto = [
    "¡Te damos la bienvenida!",
    "Estás invitado a un evento único...",
    "Donde la magia y la diversión se encuentran...",
    "Prepárate para una experiencia inolvidable...",
    "Muy pronto, todo comenzará."
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