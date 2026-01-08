//Ejercicio 9: Contar hasta un número 
//Crea una función declarada llamada contarHasta que reciba un número y use un bucle para imprimir todos los números desde 1 hasta ese número.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const prompt = require("prompt-sync")({ sigint: true });

// Función declarada
function contarHasta(numero) {
  for (let i = 1; i <= numero; i++) { //for se usa cuando sabés cuántas veces repetir
    console.log(i);
  }
}

// Entrada de datos
let numeroIngresado = parseInt(prompt("Ingresá un número: "));

// Llamada a la función
contarHasta(numeroIngresado);
