// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 5: Concatenar nombres (función expresada) 
//Crea una función expresada llamada concatenarNombres que reciba dos nombres (nombre y apellido) como parámetros y devuelva el nombre completo concatenado.

const prompt = require("prompt-sync")({ sigint: true });

// Función expresada
const concatenarNombres = function (nombre, apellido) {
  let nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
};

// Entrada de datos
let nombre = prompt("Ingresá tu nombre: ");
let apellido = prompt("Ingresá tu apellido: ");

// Llamada a la función
let resultado = concatenarNombres(nombre, apellido);

// Salida
console.log("Nombre completo:", resultado);
