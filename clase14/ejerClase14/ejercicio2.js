// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 2: Calcular promedio de calificaciones
//Consigna: Solicitar al usuario cinco calificaciones y usar una arrow function para calcular el promedio.
//Lógica: Sumar las 5 notas , Dividir el total por 5

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrow function para calcular promedio
const calcularPromedio = (notas) => {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  return suma / notas.length;
};

let calificaciones = [];
let contador = 0;

const pedirNota = () => {
  rl.question(`Ingrese la calificación ${contador + 1}: `, (nota) => {
    calificaciones.push(Number(nota));
    contador++;

    if (contador < 5) {
      pedirNota();
    } else {
      let promedio = calcularPromedio(calificaciones);
      console.log("El promedio de las calificaciones es:", promedio);
      rl.close();
    }
  });
};

pedirNota();
