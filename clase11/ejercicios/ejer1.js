// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 1: ¿Positivo, negativo o cero? 

//Consigna: Vamos a trabajar con números y aprender a clasificarlos. Escribe un programa que le pida al usuario un número cualquiera. El programa deberá analizar si el número ingresado es positivo, negativo o cero. Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.

const prompt = require("prompt-sync")();

//Pedir número al usuario
let numero = parseFloat(prompt("Ingrese un número: "));

//Analizar el número
if (isNaN(numero)) {   //isNaN para validar que el valor ingresado por el usuario sea un número antes de realizar comparaciones o cálculos.
    console.log("Por favor, ingrese un número válido.");
} else if (numero > 0) {
    console.log("El número ingresado es positivo.");
} else if (numero < 0) {
    console.log("El número ingresado es negativo.");
} else {
    console.log("El número ingresado es cero.");
}
