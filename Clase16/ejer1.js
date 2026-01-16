// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 1 :  Crea un nuevo array con los cuadrados de los números 
//Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es crear una nueva lista donde cada número de la lista original se haya transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista.

//map() : ideal para transformar los elementos de un array en uno nuevo. 

const prompt = require('prompt-sync')({sigint: true});

//array original
const numeros = [2, 4, 6, 8];

//nuevo array con los cuadrados usando map()
const cuadrados = numeros.map(function(num) {
    return num * num; //calcula el cuadrado de cada número.
});

//mostramos el resultado
console.log("Array original:", numeros);
console.log("Array con cuadrados:", cuadrados);
