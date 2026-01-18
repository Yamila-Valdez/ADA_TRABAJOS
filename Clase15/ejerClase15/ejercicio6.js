//Ejercicio 6: Buscar la última posición de un elemento repetido
//Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última posición en la que aparece el número 7.

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Lista de números
let numeros = [2, 5, 7, 2, 8, 7];

let ultimaPosicion = -1;

// Recorremos el array
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 7) {
    ultimaPosicion = i;
  }
}

// Mostramos el resultado
if (ultimaPosicion !== -1) {
  console.log("La última posición del número 7 es:", ultimaPosicion);
} else {
  console.log("El número 7 no está en la lista");
}
