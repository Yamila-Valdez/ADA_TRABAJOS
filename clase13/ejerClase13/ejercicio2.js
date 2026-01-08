// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 2: Número mayor (función expresada) 
//Crea una función expresada llamada encontrarMayor que reciba dos números como parámetros y devuelva el número mayor.

const prompt = require("prompt-sync")({ sigint: true });

// Función expresada
const encontrarMayor = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

// Pedimos los datos al usuario
let numero1 = parseFloat(prompt("Ingresá el primer número: "));
let numero2 = parseFloat(prompt("Ingresá el segundo número: "));

// Llamamos a la función
let mayor = encontrarMayor(numero1, numero2);

// Mostramos el resultado
console.log("El número mayor es:", mayor);
