// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 4: Calcular descuento por cantidad
//Solicita al usuario la cantidad de productos comprados y el precio unitario. Usa una función flecha para calcular el total con descuento según la cantidad.
//Criterio de descuento: Menos de 5 productos: sin descuento, Entre 5 y 9 productos: 10% de descuento, 10 productos o más: 20% de descuento.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Arrow function para calcular total con descuento
const calcularTotalConDescuento = (cantidad, precioUnitario) => {
  let total = cantidad * precioUnitario;
  let descuento = 0;

  if (cantidad >= 10) {
    descuento = 0.20;
  } else if (cantidad >= 5) {
    descuento = 0.10;
  }

  return total - (total * descuento);
};

rl.question("Ingrese la cantidad de productos: ", (cantidad) => {
  rl.question("Ingrese el precio unitario: ", (precio) => {

    let totalFinal = calcularTotalConDescuento(
      Number(cantidad),
      Number(precio)
    );

    console.log("El total a pagar con descuento es: $" + totalFinal);

    rl.close();
  });
});
