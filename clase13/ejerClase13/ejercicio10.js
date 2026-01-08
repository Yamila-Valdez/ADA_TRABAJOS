//Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
//Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
// Fórmula del factorial: n! = n * (n - 1) * ... * 1

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const prompt = require("prompt-sync")({ sigint: true });

// Función expresada
const calcularFactorial = function (numero) {
  let factorial = 1; //inicializo el acumulador en 1 porque el factorial es una multiplicación.

  for (let i = 1; i <= numero; i++) { //uso un bucle for para multiplicar desde 1 hasta el número.
    factorial = factorial * i;
  }

  return factorial;
};

// Entrada de datos
let numeroIngresado = parseInt(prompt("Ingresá un número: "));

// Llamada a la función
let resultado = calcularFactorial(numeroIngresado);

// Salida
console.log("El factorial es:", resultado);
