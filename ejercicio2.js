const prompt = require('prompt-sync')();

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Pedimos al usuario que ingrese un número cualquiera
let numero = parseFloat(prompt("Ingrese un número: "));

//Verificamos si el número es positivo, negativo o cero
if (numero > 0){
    console.log("El número es positivo.");
} else if (numero < 0){
    console.log("El número es negativo.");
} else {
    console.log("El número es 0 (cero).");
}