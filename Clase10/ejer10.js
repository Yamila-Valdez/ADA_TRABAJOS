// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 10 : Cálculo de Descuento: Escribe un programa que calcule el precio final de un producto después de aplicar un descuento. Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final. 

//Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
//→ Se utiliza parseFloat porque los datos ingresados por el usuario llegan como strings y es necesario convertirlos a números para poder realizar operaciones matemáticas correctamente.
//Pista 2: La fórmula puede representarse así: let montoDescuento = precioOriginal * (porcentajeDescuento / 100);

const prompt = require("prompt-sync")();

//Pedir datos al usuario
let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

//Calcular descuento
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
let precioFinal = precioOriginal - montoDescuento;

//Mostrar resultado
console.log(`Precio original: $${precioOriginal}`);
console.log(`Descuento aplicado: ${porcentajeDescuento}%`);
console.log(`Precio final con descuento: $${precioFinal}`);
