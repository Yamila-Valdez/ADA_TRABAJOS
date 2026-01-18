//Ejercicio 4: Calcula la suma total de los números 
//Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola. 

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//reduce() recorre el array y acumula los valores en uno solo.

let numeros = [1, 2, 3, 4];

let sumaTotal = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(sumaTotal);
