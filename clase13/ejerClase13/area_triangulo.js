// bloque de comentarios o DocBlock 
/**
 * Ejercicio 1 : Área de un triángulo (función declarada)
 * @param {number} base - longitud de la base del triángulo.
 * @param {number} altura - longitud de la altura del triángulo.
 * @returns {number} El área calculada del triángulo.
 */

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

function calcularAreaTriangulo(base, altura) {
  // Fórmula que se pidio en el ejercicio: Área = (base * altura) / 2
  const area = (base * altura) / 2;
  return area;
}

// pongo un ejemplo: Base 10, Altura 5
const base1 = 10;
const altura1 = 5;
const area1 = calcularAreaTriangulo(base1, altura1);
console.log(`El área de un triángulo con base ${base1} y altura ${altura1} es: ${area1}`); // en la terminal: 25
