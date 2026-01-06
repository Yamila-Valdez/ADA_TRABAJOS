// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 4: ¿Es par o impar? 
//Consigna: 
//Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso. 

const prompt = require("prompt-sync")();

//pedir al usuario un número
let numero = parseInt(prompt("Ingrese un número: "));

//validar y evaluar
if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else if (numero % 2 === 0) {
    console.log("El número ingresado es par. Los números pares se pueden dividir por 2 sin dejar resto.");
} else {
    console.log("El número ingresado es impar. Los números impares no se pueden dividir por 2 exactamente.");
}
