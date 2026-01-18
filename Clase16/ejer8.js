//Ejercicio 8: Busca un nombre específico 
//Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

let nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

let resultado = nombres.find(function (nombre) { //recorre y devuelve el primer elemento que cumpla la condición
  return nombre === 'Laura';
});

console.log(resultado);
