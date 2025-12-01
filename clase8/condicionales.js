// Consigna

//Creá un programa que simule un sistema de calificación basado en la nota de un estudiante
//(un valor numérico del 0 al 100). El programa debe determinar si el estudiante ha aprobado o no
//O ha obtenido una calificacion sobresaliente, según las siguientes condiciones:

//Si la nota es menor a 60, el estudiante a reprobado
//Si la nota es entre 60 y 89 (inclusive), el estudiante ha aprobado
//Si la nota es 90 o mayor, el estudiante ha obtenido una calificación sobresaliente

// Usar el condicional if-else if-else para implementar la lógica del programa en la consola.
  
// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

let nota = 90;

if (nota < 60){
    console.log("Reprobado 😓");
} else if (nota >= 60 && nota <= 89 ) {
    console.log("Aprobado 👏");
} else {
    console.log("¡Calificación EXCELENTE!🥳");
}
