// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []
 
//Ejercicio 3: ¿Sabes contar? 

//Consigna: 
//Crea un programa que le pida al usuario un número positivo. El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. Usa un ciclo for para realizar la tarea.

const prompt = require("prompt-sync")();

//pedir al usuario un número
let numero = parseInt(prompt("Ingrese un número positivo: "));

//validar y contar
if (isNaN(numero) || numero <= 0) {
    console.log("Por favor, ingrese un número positivo válido.");
} else {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}
