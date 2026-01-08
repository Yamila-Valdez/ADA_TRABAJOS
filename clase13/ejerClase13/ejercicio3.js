// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 3: Mensaje global y local 
//Declara una variable global llamada saludoGlobal con el valor "Hola desde el scope global".
// Luego, crea una función llamada mostrarMensaje que declare una variable local llamada saludoLocal con el valor "Hola desde el scope local" y que imprima ambos mensajes. 

const prompt = require("prompt-sync")({ sigint: true });

// Variable global
let saludoGlobal = "Hola desde el scope global";

// Función declarada
function mostrarMensaje() {
  // Variable local
  let saludoLocal = "Hola desde el scope local";

  // Imprimimos ambos mensajes
  console.log(saludoGlobal);
  console.log(saludoLocal);
}

// Llamamos a la función
mostrarMensaje();
