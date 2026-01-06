// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 10: Adivina el número 
//Consigna: 
//Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

const prompt = require("prompt-sync")();

let numeroSecreto = Math.floor(Math.random() * 10) + 1; //Math.floor : redondea hacia abajo //Math.random : número entre 0 y 0.999
let acerto = false;

for (let intento = 1; intento <= 3; intento++) {
    let numeroUsuario = parseInt(prompt(`Intento ${intento}: adiviná el número (1 al 10): `));

    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicitaciones! Adivinaste el número.");
        acerto = true;
        break; // corta el ciclo si acierta
    } else {
        console.log("No es correcto.");
    }
}

if (!acerto) {
    console.log(`No acertaste. El número secreto era ${numeroSecreto}.`);
}
