//Desafio Math
//Proponer un caso de uso real para una herramienta del objeto Math.

//Seleccioná UN método o propiedad del objeto Math que vimos en clase (puede ser Math.random, Math.ceil, Math.max, Math.PI, etc.).
//Inventá una consigna breve (un problema de la vida real) que se resuelva usando esa herramienta específica.
//Compartí el código acá (usá la herramienta CodeSnap de VSC).
 
//Ejemplos para inspirarse:
//Si elegís Math.random(): Crear una función que simule tirar un dado y devuelva un número aleatorio entre 1 y 6.
//Si elegís Math.cei():Tengo 15 invitados y en cada mesa entran 4 personas. Calcular cuántas mesas necesito (redondeando para arriba para que nadie se quede parado).
//Si elegís Math.max(): Dadas las temperaturas de la semana [12, 18, 39, 22, 30], encontrar cuál fue la temperatura máxima.

//Método elegido: Math.random()
//Caso de uso real:Una app de sorteos necesita elegir al azar una persona ganadora de una lista de participantes.
//Crear una función que, dada una lista de participantes, seleccione un ganador al azar.

//Math.random(): para generar un número aleatorio entre 0 y 1.
//Math.floor: para obtener un índice válido del array.


//creo una función llamada elegirGanador que recibe como parámetro un array de participantes
function elegirGanador(participantes) {
  const indiceAleatorio = Math.floor(Math.random() * participantes.length);
  return participantes[indiceAleatorio];
}

const participantes = ["Ana", "Luis", "María", "Juan", "Sofía"];

const ganador = elegirGanador(participantes);

console.log("El ganador del sorteo es:", ganador);
