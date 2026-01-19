//Ejercicio 3: Encontrar el número faltante 
//Dada una matriz de n-1 números enteros únicos en el rango de 1 a n, encuentra el número que falta en la secuencia

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

function encontrarNumeroFaltante(numeros, n) {
  const sumaEsperada = (n * (n + 1)) / 2;

  const sumaActual = numeros.reduce((acumulador, num) => {
    return acumulador + num;
  }, 0);

  return sumaEsperada - sumaActual;
}

// Ejemplo
const numeros = [1, 2, 3, 5]; // falta el 4
const n = 5;

const faltante = encontrarNumeroFaltante(numeros, n);
console.log("El número faltante es:", faltante);
