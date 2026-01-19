//Ejercicio 6: Autos y más autos… 
//Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefinida de marcas de autos: let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";
//1. Quite los espacios en blanco alrededor de cada marca. 
//2. Verifique si existe la marca "Tesla". 
//3. Reemplace todas las marcas "Ford" por "BMW". 
//4. Encuentre el índice de la marca "Chevrolet".  
//5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

function gestionarAutos() {
  let entrada = "Toyota, Honda, Ford, Chevrolet, Nissan";

  // Separar y quitar espacios
  let marcas = entrada.split(",").map(marca => marca.trim());

  // Verificar si existe "Tesla"
  const existeTesla = marcas.includes("Tesla");
  console.log("¿Existe Tesla?:", existeTesla);

  // Reemplazar "Ford" por "BMW"
  marcas = marcas.map(marca => (marca === "Ford" ? "BMW" : marca));

  // Encontrar el índice de "Chevrolet"
  const indiceChevrolet = marcas.indexOf("Chevrolet");
  console.log("Índice de Chevrolet:", indiceChevrolet);

  // Ordenar alfabéticamente y unir con puntos
  const resultadoFinal = marcas.sort().join(".");

  return resultadoFinal;
}

// Ejecución
const resultado = gestionarAutos();
console.log("Resultado final:", resultado);
