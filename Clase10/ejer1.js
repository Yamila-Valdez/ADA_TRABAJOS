// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 1 - Declarar dos variables
//Declarar dos variables con nombre "Edad" y "Peso", utilizar la palabra reservada "Let"

//Importo libreria
const prompt = require("prompt-sync")({ sigint: true });

let edad = 32;  //edad asignada
let peso = 75;  //peso en kg

console.log(`Tu edad es: ${edad}`);
console.log(`Tu peso es: ${peso} kg`);