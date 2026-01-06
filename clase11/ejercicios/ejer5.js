// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 5: Encuentra los números pares entre dos valores 
//Consigna: 
//Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa debe mostrar todos los números pares que se encuentran entre esos dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un mensaje indicando que los valores son inválidos. 

const prompt = require("prompt-sync")();

//pedir valores al usuario
let inicio = parseInt(prompt("Ingrese el número inicial: "));
let fin = parseInt(prompt("Ingrese el número final: "));

//validaciones
if (isNaN(inicio) || isNaN(fin)) {
    console.log("Por favor, ingrese valores numéricos válidos.");
} else if (inicio > fin) {
    console.log("Valores inválidos: el número inicial no puede ser mayor que el número final.");
} else {

    //recorrer y mostrar números pares
    console.log("Números pares en el rango:");

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
