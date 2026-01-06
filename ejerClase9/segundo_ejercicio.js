const prompt = require('prompt-sync')();

// Definir las constantes del rango
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 50;

// Pedir número al usuario
let numero = Number(prompt("Ingresá un número: "));

// Verificar si está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
  console.log("El número está dentro del rango.");
} else {
  console.log("El número NO está dentro del rango.");
}
