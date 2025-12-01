const prompt = require('prompt-sync')();

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Pedimos al usuario que ingrese un nombre
let nombre = prompt("Ingresa tu nombre: ");

//Mostramos el saludo personalizado
console.log("Hola, " + nombre + "! ¿Cómo estas?.");