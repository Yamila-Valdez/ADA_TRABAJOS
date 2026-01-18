//Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra 
//Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la palabra "hola" se debería convertir en "¡hola!"

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

let palabras = ['hola', 'mundo', 'javascript'];

let palabrasTransformadas = palabras.map(function (palabra) { //recorre el array
  return '¡' + palabra + '!'; //crea el nuevo valor transformado
});

console.log(palabrasTransformadas);
