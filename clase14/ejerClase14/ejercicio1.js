// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 1: Calcular el precio final con IVA
//Solicitar al usuario el precio de un producto y el porcentaje de IVA.
//Usar una arrow function para calcular el precio final.
//Lógica: Precio final = precio + (precio × IVA / 100)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrow function
const calcularPrecioFinal = (precio, iva) => {
  return precio + (precio * iva / 100);
};

rl.question("Ingrese el precio del producto: ", (precio) => {
  rl.question("Ingrese el porcentaje de IVA: ", (iva) => {

    let precioFinal = calcularPrecioFinal(Number(precio), Number(iva));

    console.log("El precio final con IVA es: $" + precioFinal);

    rl.close();
  });
});

