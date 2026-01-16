//Ejercicio 10: Flores favoritas
//Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
//Inicializa un array vacío para almacenar las flores favoritas.
//Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
//Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
//Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const prompt = require("prompt-sync")({ sigint: true });

//Inicializar un array vacío
let floresFavoritas = [];

//Pedir tres flores favoritas (carga manual, sin push)
floresFavoritas[0] = prompt("Ingrese su primera flor favorita:");
floresFavoritas[1] = prompt("Ingrese su segunda flor favorita:");
floresFavoritas[2] = prompt("Ingrese su tercera flor favorita:");

//Pedir una flor específica
let florBuscada = prompt("Ingrese una flor para verificar si es favorita:");

//Contar manualmente cuántas veces aparece
let contador = 0;

for (let i = 0; i < floresFavoritas.length; i++) {
  if (floresFavoritas[i].toLowerCase() === florBuscada.toLowerCase()) {
    contador++;
  }
}

// Mostrar resultado
console.log(
  "La flor ingresada aparece " + contador + " vez/veces entre tus flores favoritas"
);
