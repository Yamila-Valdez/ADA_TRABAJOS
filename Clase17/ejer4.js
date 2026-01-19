//Ejercicio 4: Transformación y Análisis de Cadenas 
//Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”. 
//Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas: 
//1. Quite los espacios en blanco alrededor de cada nombre. 
//2. Verifique si existe el nombre "Juan". 
//3. Reemplace todos los nombres "María" por "Ana". 
//4. Encuentre el índice del nombre "Pedro". 
//5. Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()” 

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//sort() ordena alfabéticamente como texto

const prompt = require("prompt-sync")();

function transformarYAnalizarNombres() {
  const entrada = prompt(
    "Ingrese los siguientes nombres separados por comas (Julian-Maria-Malena-Andrea-Pablo-Pedro): "
  );

  // Separar, quitar espacios y capitalizar
  let nombres = entrada.split(",").map(nombre => {
    const limpio = nombre.trim().toLowerCase();
    return limpio.charAt(0).toUpperCase() + limpio.slice(1);
  });

  // Verificar si existe "Juan"
  const existeJuan = nombres.includes("Juan");

  // Reemplazar "Maria" por "Ana"
  nombres = nombres.map(nombre =>
    nombre === "Maria" ? "Ana" : nombre
  );

  // Encontrar el índice de "Pedro"
  const indicePedro = nombres.indexOf("Pedro");

  // Ordenar y unir con puntos
  const resultadoFinal = nombres.sort().join(".");

  console.log("¿Existe Juan?:", existeJuan);
  console.log("Índice de Pedro:", indicePedro);
  console.log("Resultado final:", resultadoFinal);
}

transformarYAnalizarNombres();
