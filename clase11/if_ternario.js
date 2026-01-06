// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejemplo: verificar si una persona es mayor de edad

//1. Importación de la librería
const prompt = require("prompt-sync")();

//2. Entrada de datos - Ingresar la edad
let edad = parseInt(prompt("Ingrese su edad: "));

//3. Lógica con el If ternario
//If ternario tiene una forma abreviada en una sola línea.
// Estructura: (condición) ? "valor si es verdadero" : "valor si es falso";

// El signo de interrogación (?) actúa como el "if" (Se cumple esto?)
// Los dos puntos (:) actúa como el "else" (si no, esto otro)

let mensaje = (edad >= 21) ? "Sos mayor de edad" : "Sos menor de edad";

console.log(mensaje);