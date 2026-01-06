const prompt = require('prompt-sync')();

// Pedir valores booleanos al usuario
let condicion1 = prompt("Ingresá true o false para la primera condición: ") === "true";
let condicion2 = prompt("Ingresá true o false para la segunda condición: ") === "true";

// Mostrar las combinaciones lógicas
console.log("condicion1 AND condicion2:", condicion1 && condicion2);
console.log("condicion1 OR condicion2:", condicion1 || condicion2);
console.log("NOT condicion1:", !condicion1);
console.log("NOT condicion2:", !condicion2);

// Algunas combinaciones adicionales
console.log("(condicion1 AND !condicion2):", condicion1 && !condicion2);
console.log("(!condicion1 OR condicion2):", !condicion1 || condicion2);
