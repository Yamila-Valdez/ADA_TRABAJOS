const prompt = require('prompt-sync')();

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Pedimos al usuario que ingrese dos números
let primerNum = parseFloat(prompt("Ingrese el primer número: "));
let segundoNumero = parseFloat(prompt("Ingrese el segundo número: "));

//Calculo de la suma de ambos números
let suma = primerNum + segundoNumero;

//Mostrar el resultado de la suma en la consola
console.log("La suma de los números es: " + suma);