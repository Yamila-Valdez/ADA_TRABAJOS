// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 3: Clasificación de edades
//Solicitar al usuario una edad y usar una arrow function para clasificarla en: niño, adolescente, adulto, adulto mayor.
//Criterio de clasificación: Niño: 0 a 12 años, Adolescente: 13 a 17 años, Adulto: 18 a 64 años, Adulto mayor: 65 años o más...

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrow function para clasificar edad
const clasificarEdad = (edad) => {
  if (edad <= 12) {
    return "Niño";
  } else if (edad <= 17) {
    return "Adolescente";
  } else if (edad <= 64) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
};

rl.question("Ingrese su edad: ", (edad) => {
  let categoria = clasificarEdad(Number(edad));
  console.log("Clasificación:", categoria);
  rl.close();
});
