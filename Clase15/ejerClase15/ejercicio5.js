//Ejercicio 5: Buscar la posición de un elemento
//Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y muestra el índice del color "Azul" en la lista.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Lista de colores
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

// Buscamos la posición de "Azul"
let indiceAzul = colores.indexOf("Azul"); //Devuelve el índice del elemento buscado

// Mostramos el resultado
console.log("El índice del color Azul es:", indiceAzul);

if (indiceAzul !== -1) {
  console.log("El color Azul está en la lista");
} else {
  console.log("El color Azul no está en la lista");
}