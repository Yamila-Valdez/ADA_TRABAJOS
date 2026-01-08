// Ejercicio 6: Convertir a minutos 
//Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos. 

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const prompt = require("prompt-sync")({ sigint: true });

//Función declarada
function convertirHorasAMinutos(horas) {
  let minutos = horas * 60;
  return minutos;
}

// Entrada de datos
let horasIngresadas = parseFloat(prompt("Ingresá la cantidad de horas: "));

//Llamada a la función
let totalMinutos = convertirHorasAMinutos(horasIngresadas);

console.log("El total en minutos es:", totalMinutos);
