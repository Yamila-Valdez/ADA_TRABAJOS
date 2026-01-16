//Ejercicio 5: Verificar origen del auto
//Solicitar al usuario la marca de un auto y usar una arrow function para indicar si es:
//Origen nacional: Chevrolet, Ford, Fiat, Importado: cualquier otra marca
//Solicita al usuario que ingrese la marca de un auto.
//Utiliza una función flecha para determinar si la marca ingresada corresponde a un auto de origen nacional o importado.
//Muestra un mensaje indicando si el auto es de origen nacional o importado, basado en la marca ingresada por el usuario.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrow function para verificar origen del auto
const verificarOrigenAuto = (marca) => {
  let marcaNormalizada = marca.toLowerCase();

  if (
    marcaNormalizada === "chevrolet" ||
    marcaNormalizada === "ford" ||
    marcaNormalizada === "fiat"
  ) {
    return "El auto es de origen nacional";
  } else {
    return "El auto es importado";
  }
};

rl.question("Ingrese la marca del auto: ", (marca) => {
  let resultado = verificarOrigenAuto(marca);
  console.log(resultado);
  rl.close();
});
