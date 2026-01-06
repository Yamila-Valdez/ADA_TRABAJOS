// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 9 : Cálculo del IMC: Escribe un programa que calcule el Índice de Masa Corporal (IMC). El IMC se calcula con la fórmula:  

//Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
 
//Pista 1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
//ParseFloat: Porque lo que ingresa el usuario llega como string y necesitamos números para calcular.

//Pista 2: La fórmula puede representarse así: let imc = peso / (altura * altura);

const prompt = require("prompt-sync")();

//Pedir al usuario que ingrese sus datos
let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));

//Calcular IMC
let imc = peso / (altura * altura);

//Mostrar resultado en terminal
console.log(`Su IMC es: ${imc}`);
