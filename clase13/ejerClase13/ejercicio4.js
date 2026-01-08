// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 4: Número par o impar 
//Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
//Usa una variable local para guardar el resultado.

const prompt = require("prompt-sync")({ sigint: true });

// Función declarada
function esPar(numero) {
  // Variable local
  let resultado;

  if (numero % 2 === 0) {
    resultado = "Es par";
  } else {
    resultado = "Es impar";
  }

  return resultado;
}

// Entrada de datos
let numeroIngresado = parseInt(prompt("Ingresá un número: "));

// Llamada a la función
let mensaje = esPar(numeroIngresado);

// Salida
console.log(mensaje);