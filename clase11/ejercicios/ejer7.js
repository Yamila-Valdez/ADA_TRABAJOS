// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 7: Calculadora simple 
//Consigna: 
//Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo. 

const prompt = require("prompt-sync")();

//pedir datos al usuario
let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación (suma, resta, multiplicación o división): ").toLowerCase();

//validar números
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Por favor, ingrese números válidos.");
} else {
    //evaluar operación
    switch (operacion) {
        case "suma":
            console.log(`Resultado: ${numero1 + numero2}`);
            break;
        case "resta":
            console.log(`Resultado: ${numero1 - numero2}`);
            break;
        case "multiplicación":
        case "multiplicacion": // por si no ponen tilde
            console.log(`Resultado: ${numero1 * numero2}`);
            break;
        case "división":
        case "division": // por si no ponen tilde
            if (numero2 === 0) {
                console.log("Error: no se puede dividir por cero.");
            } else {
                console.log(`Resultado: ${numero1 / numero2}`);
            }
            break;
        default:
            console.log("Operación inválida. Use suma, resta, multiplicación o división.");
    }
}
