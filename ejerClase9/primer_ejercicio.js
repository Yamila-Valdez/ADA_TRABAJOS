const prompt = require('prompt-sync')();

// Pedir números al usuario
let numero1 = Number(prompt("Ingresá el primer número: "));
let numero2 = Number(prompt("Ingresá el segundo número: "));

// Comparar los números
if (numero1 > numero2) {
  console.log("El primer número (" + numero1 + ") es mayor que el segundo (" + numero2 + ").");
} else if (numero2 > numero1) {
  console.log("El segundo número (" + numero2 + ") es mayor que el primero (" + numero1 + ").");
} else {
  console.log("Ambos números son iguales.");
}
