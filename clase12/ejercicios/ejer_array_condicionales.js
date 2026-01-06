// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 5: Uso de Arrays y Condicionales 
//Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su desarrollo)

const prompt = require("prompt-sync")();

let nombres = [];
let encontrado = false;

// Pedir 5 nombres
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingresá el nombre ${i + 1}: `);
    nombres.push(nombre);
}

// Pedir nombre a buscar
let nombreBuscado = prompt("Ingresá el nombre que querés buscar: ");

// Buscar el nombre en el array
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreBuscado) {
        encontrado = true;
        break;
    }
}

// Mostrar resultado
if (encontrado) {
    console.log(`El nombre "${nombreBuscado}" se encuentra en la lista.`);
} else {
    console.log(`El nombre "${nombreBuscado}" no se encuentra en la lista.`);
}
