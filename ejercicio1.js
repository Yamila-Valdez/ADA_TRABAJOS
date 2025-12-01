const prompt = require('prompt-sync')();

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Pedimos al usuario que ingrese un número cualquiera
let numero = parseFloat(prompt("Ingrese un número: "));

//Calculamos el doble del número ingresado
let dobleNumero = numero * 2;

//Mostramos el resultado en la consola
console.log("El doble de tu número ingresado es: " + dobleNumero);