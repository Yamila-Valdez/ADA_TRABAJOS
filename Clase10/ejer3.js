// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 3 :  Constantes / Validación de Edad: Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 y 99 respectivamente. 
// - Pide al usuario que ingrese su edad. 
// - Usa “parseInt” para convertir la entrada del usuario a un número entero. 
// - Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.

const prompt = require("prompt-sync")({ sigint: true });

// 1) Constantes para el rango permitido
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// 2) Pedir edad al usuario
let edad = parseInt(prompt("Ingrese su edad: "));

// 3) Validar si la edad está dentro del rango
if (edad >= EDAD_MINIMA && edad <= EDAD_MAXIMA) {
    console.log(`Edad válida: ${edad} años. ¡Bienvenido/a!`);
} else {
    console.log(`Edad inválida. Debe estar entre ${EDAD_MINIMA} y ${EDAD_MAXIMA} años.`);
}