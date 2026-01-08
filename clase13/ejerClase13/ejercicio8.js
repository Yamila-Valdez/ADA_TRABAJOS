//Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
//Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 
//Fórmula: Fahrenheit (°F) = (Celsius (°C) × 9/5) + 32.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const prompt = require("prompt-sync")({ sigint: true });

// Función expresada
//Encapsulo la lógica de conversión en una función que recibe el valor y devuelve el resultado.
const convertirCelsiusAFahrenheit = function (celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit;
};

// Entrada de datos
let gradosCelsius = parseFloat(prompt("Ingresá la temperatura en °C: "));

// Llamada a la función
let resultado = convertirCelsiusAFahrenheit(gradosCelsius);

console.log("La temperatura en °F es:", resultado);
