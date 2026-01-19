//Ejercicio 9: Desafío extra! Orden, lugar y números 
//Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo mismo del ejercicio anterior (buscar la posición de un número en un array), pero partiendo de esta lista: let list = [12, 3, 5, 7, 1, 22, 47, 100];
//Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor a mayor, utilizando bubble sort. Luego, respondan las siguientes preguntas: 
// ¿Cuál es la posición del número 12? 
// ¿Cuál es la posición del número 5? 
// ¿Cuál es la posición del número 22? 
// ¿Cuál es la posición del número 100?

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Lista original
let list = [12, 3, 5, 7, 1, 22, 47, 100];

// Bubble Sort
function bubbleSort(array) {
  let copia = [...array];

  for (let i = 0; i < copia.length; i++) {
    for (let j = 0; j < copia.length - 1; j++) {
      if (copia[j] > copia[j + 1]) {
        let temp = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = temp;
      }
    }
  }

  return copia;
}

// Búsqueda Binaria
function busquedaBinaria(array, numeroBuscado) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (array[medio] === numeroBuscado) {
      return medio;
    }

    if (array[medio] < numeroBuscado) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}

// ---- EJECUCIÓN ----
let listaOrdenada = bubbleSort(list);

console.log("Lista ordenada:", listaOrdenada);

console.log("Posición del número 12:", busquedaBinaria(listaOrdenada, 12));
console.log("Posición del número 5:", busquedaBinaria(listaOrdenada, 5));
console.log("Posición del número 22:", busquedaBinaria(listaOrdenada, 22));
console.log("Posición del número 100:", busquedaBinaria(listaOrdenada, 100));
