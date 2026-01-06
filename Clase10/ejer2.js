// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Ejercicio 2 :  Usando las variables: Escribe un programa que pida al usuario que ingrese su nombre, su edad y su peso, y luego muestre un mensaje personalizado que incluya toda esta información. 
//usaremos prompt-sync para solicitar esta información.

const prompt = require("prompt-sync")({ sigint: true });

// 1) Pedir datos al usuario
let nombre = prompt("Ingrese su nombre: ");
let edad = parseInt(prompt(" Ingrese su edad: "));
let peso = parseFloat(prompt("Ingrese su peso en kg: "));

// 2) Mostrar mensaje personalizado
console.log(`Hola ${nombre}, registramos tus datos correctamente. Edad: ${edad} años, Peso: ${peso} kg.`);