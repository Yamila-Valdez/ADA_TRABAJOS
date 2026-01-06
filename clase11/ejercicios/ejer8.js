// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 8: Encuentra los múltiplos de un número 
//Consigna: 
//Escribe un programa que le pida al usuario un número entero positivo y muestre todos los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.

const prompt = require("prompt-sync")();

//pedir número al usuario
let numero = parseInt(prompt("Ingrese un número entero positivo: "));

//validar el número
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingrese un número entero positivo válido.");
} else {
    console.log(`Múltiplos de ${numero} entre 1 y 100:`);

    // Recorrer del 1 al 100
    for (let i = 1; i <= 100; i++) {
        if (i % numero === 0) { //i es divisible por numero sin resto
            console.log(i);
        }
    }
}
