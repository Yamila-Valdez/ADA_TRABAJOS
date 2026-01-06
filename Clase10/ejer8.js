// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 8 : Conversión de Temperaturas: Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit.

//Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit. 
//Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
//Pista 2: La fórmula puede representarse asi: let fahrenheit = celsius * 9 / 5 + 32; 

const prompt = require("prompt-sync")();

// 1) Pedir temperatura en Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// 2) Conversión a Fahrenheit
let fahrenheit = celsius * 9 / 5 + 32;

// 3) Mostrar resultado
console.log(`${celsius}°C equivalen a ${fahrenheit}°F`);
