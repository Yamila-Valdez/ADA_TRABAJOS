//Ejercicio 10: Construye una frase a partir de una lista de palabras 
//Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una frase completa concatenando cada palabra en orden, separadas por espacios. Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

let palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];

let frase = palabras.reduce(function (acumulador, palabra) { //concatena palabra por palabra
  return acumulador + ' ' + palabra;
});

console.log(frase);
