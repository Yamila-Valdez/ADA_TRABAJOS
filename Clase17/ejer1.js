//Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays 
//Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes 
//propiedades: nombre, edad y un array de notas (con 5 notas).  
//Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas: 
//1. Agregar una nueva nota al array de notas. 
//2. Eliminar la primera nota del array. 
//3. Calcular el promedio de las notas restantes. 
//4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()” 
//5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

let estudiante = {
  nombre: "Facundo",
  edad: 33,
  notas: [7, 8, 6, 9, 10]
};

function procesarEstudiante(estudiante) {

  //Agregar una nueva nota
  estudiante.notas.push(8);

  //Eliminar la primera nota
  estudiante.notas.shift();

  //Calcular el promedio
  let suma = estudiante.notas.reduce(function (acumulador, nota) {
    return acumulador + nota;
  }, 0);

  let promedio = suma / estudiante.notas.length;

  //Convertir el nombre a mayúsculas
  let nombreMayusculas = estudiante.nombre.toUpperCase();

  //Devolver un nuevo objeto
  return {
    nombre: nombreMayusculas,
    promedio: promedio
  };
}

let resultado = procesarEstudiante(estudiante);
console.log(resultado);
