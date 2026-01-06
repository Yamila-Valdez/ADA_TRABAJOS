// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 6: La tabla de multiplicar 
//Consigna: 
//Crea un programa que le pida al usuario un número y luego imprima su tabla de multiplicar desde el 1 hasta el 10. Usa un ciclo for. 

const prompt = require("prompt-sync")();

//pedir número al usuario
let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar: "));

//validar y mostrar tabla
if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    console.log(`Tabla de multiplicar del ${numero}:`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
