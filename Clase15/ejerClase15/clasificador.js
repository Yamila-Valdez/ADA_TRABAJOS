//Clasificación de palabras según su longitud
//Tienes una lista de palabras en una oración. Debes:
// - Dividir la oración en palabras individuales.
// - Clasificar las palabras en dos categorías:
// Cortas (menos de 5 letras)
// Largas (5 letras o más)
// - Mostrar ambas listas de palabras clasificadas.
//La oración es: "JavaScript es un lenguaje poderoso y versátil".

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Oración original
let oracion = "JavaScript es un lenguaje poderoso y versátil";

//Dividir la oración en palabras
let palabras = oracion.split(" "); //divide la oración en palabras

// Arrays para clasificar
let palabrasCortas = [];
let palabrasLargas = [];

//Clasificar las palabras según su longitud
for (let i = 0; i < palabras.length; i++) { 
  if (palabras[i].length < 5) { //is: clasificar //length: contar letras
    palabrasCortas.push(palabras[i]); //agregar a arrays
  } else {
    palabrasLargas.push(palabras[i]);
  }
}

//Mostrar resultados
console.log("Palabras cortas (menos de 5 letras):");
console.log(palabrasCortas);

console.log("Palabras largas (5 letras o más):");
console.log(palabrasLargas);
