// Objeto que mapea cada letra y número al correspondiente código Morse
const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----', ' ': ' '  // Se incluye el espacio como ' '
};

// Crear un objeto que sea el reverso de morseCode, es decir, que mapee el código Morse a la letra/número correspondiente
const reverseMorseCode = Object.fromEntries(
    Object.entries(morseCode).map(([k, v]) => [v, k])  // Invertir clave y valor
);

// Función para convertir el texto ingresado a código Morse
const convertToMorse = () => {
    const input = document.getElementById('inputText').value.trim().toUpperCase();  // Obtener el texto del campo y convertirlo a mayúsculas
    const output = document.getElementById('output');  // Obtener el contenedor de salida
    const errorMessage = document.getElementById('errorMessage');  // Obtener el contenedor de mensaje de error

    if (input === '') {  // Validación: Si el campo está vacío
        errorMessage.textContent = 'El campo no puede estar vacío';  // Mostrar mensaje de error
        output.textContent = '';  // Limpiar la salida
        return;  // Salir de la función
    }

    let morseText = '';  // Variable para almacenar el resultado en Morse
    for (let char of input) {  // Iterar sobre cada carácter del texto ingresado
        if (morseCode[char]) {  // Si el carácter existe en el objeto morseCode
            morseText += morseCode[char] + ' ';  // Convertir el carácter a Morse y agregar un espacio
        } else {  // Si el carácter no está soportado
            errorMessage.textContent = 'Carácter no soportado: ' + char;  // Mostrar mensaje de error
            return;  // Salir de la función
        }
    }
    errorMessage.textContent = '';  // Limpiar mensajes de error
    output.textContent = morseText.trim();  // Mostrar el texto en Morse en la salida, eliminando espacios extra
};

// Función para convertir código Morse a texto
const convertToText = () => {
    const input = document.getElementById('inputText').value.trim();  // Obtener el código Morse ingresado
    const output = document.getElementById('output');  // Obtener el contenedor de salida
    const errorMessage = document.getElementById('errorMessage');  // Obtener el contenedor de mensaje de error

    if (input === '') {  // Validación: Si el campo está vacío
        errorMessage.textContent = 'El campo no puede estar vacío';  // Mostrar mensaje de error
        output.textContent = '';  // Limpiar la salida
        return;  // Salir de la función
    }

    const morseArray = input.split(' ');  // Dividir el código Morse por espacios para procesar cada carácter/código
    let text = '';  // Variable para almacenar el resultado en texto
    for (let code of morseArray) {  // Iterar sobre cada código Morse
        if (reverseMorseCode[code]) {  // Si el código Morse existe en el objeto reverseMorseCode
            text += reverseMorseCode[code];  // Convertir el código Morse a letra/número y agregarlo al texto
        } else if (code === ' ') {  // Si el código es un espacio
            text += ' ';  // Agregar un espacio en el texto
        } else {  // Si el código no es válido
            errorMessage.textContent = 'Código Morse no válido: ' + code;  // Mostrar mensaje de error
            return;  // Salir de la función
        }
    }

    errorMessage.textContent = '';  // Limpiar mensajes de error
    output.textContent = text;  // Mostrar el texto convertido en la salida
};
