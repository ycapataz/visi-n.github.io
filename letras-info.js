const elementosTextoInfo = [
    "En la penumbra de un club",
    "cinco sombras danzaban al ritmo de una música envolvente.",
    "Los cuerpos se movían con una elegancia casi sobrenatural,",
    "como si estuvieran conectados por un hilo invisible.",
    "Cada giro y cada paso parecían contar una historia de anhelos y secretos ocultos.",
    "La luz intermitente revelaba sus rostros por momentos,",
    "mostrando expresiones de pasión y desasosiego.",
    "En ese espacio cargado de energía,",
    "el número cinco se convirtió en un símbolo de complicidad,",
    "un recordatorio de que a veces,",
    "la danza es la única forma de enfrentar las sombras que nos rodean.",

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
            setTimeout(escribirTextoInfo, 10); // Tiempo entre cada letra
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