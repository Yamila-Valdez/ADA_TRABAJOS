// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Ejercicio 1: Área de un triángulo (función declarada
//Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo. 
//Pista: Usa la fórmula: área = base * altura / 2

const prompt = require('prompt-sync')({sigint: true});

//Función declarada para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2; // Fórmula: base * altura / 2
    return area; // Devuelve el resultado
}

//Pedimos los datos al usuario
const baseIngresada = parseFloat(prompt("Ingresa la base del triángulo: "));
const alturaIngresada = parseFloat(prompt("Ingresa la altura del triángulo: "));

//Calculamos el área usando la función
const areaTriangulo = calcularAreaTriangulo(baseIngresada, alturaIngresada);

//Mostramos el resultado en la consola
console.log(`El área del triángulo con base ${baseIngresada} y altura ${alturaIngresada} es: ${areaTriangulo}`);
