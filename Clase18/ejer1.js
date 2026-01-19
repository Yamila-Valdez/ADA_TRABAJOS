//Ejercicio 1: Palíndromo
// Escribe una función que determine si una cadena dada es un palíndromo.
// Un palíndromo es una palabra, frase, número o secuencia de caracteres que se lee igual hacia adelante que hacia atrás, ignorando espacios, signos de puntuación y mayúsculas/minúsculas.

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

function esPalindromo(texto) {
  const textoLimpio = texto
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  const textoInvertido = textoLimpio
    .split("")
    .reverse()
    .join("");

  console.log("Texto original:", texto);
  console.log("Texto limpio:", textoLimpio);
  console.log("Texto invertido:", textoInvertido);

  return textoLimpio === textoInvertido;
}

// Pruebas
const frases = [
  "Anita lava la tina",
  "Hola mundo",
  "Reconocer"
];

frases.forEach(frase => {
  console.log("¿Es palíndromo?", esPalindromo(frase));
  console.log("--------------");
});


