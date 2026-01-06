// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Ejercicio 4 :  Tipo de Datos: Declarar 4 variables utilizando la palabra reservada let 

//Declaración de Variables: 
//1. Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false). 
//2. Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras). 
//3. Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal). 
//4. Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript. 

//Operaciones y Validaciones: 
//1. Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección. 
//2. Concatena el “string” de la variable texto con otro mensaje adicional. 
//3. Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado. 
//4. Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.


// 1) Declaración de variables de distintos tipos
let verdadero = true;                     // Booleano
let texto = "Hola soy Yam Valdez";        // String
let numero = 33;                          // Número
let nada = null;                          // Ausencia de valor

// 2) Operación matemática con "numero"
let resultadoOperacion = numero + 7;     // Suma simple

// 3) Concatenación del string "texto" con un mensaje
let textoConcatenado = texto + " y estoy aprendiendo JavaScript";

// 4) Validación de la variable "verdadero" // Cambiar el valor de "verdadero" a false para probar el otro caso

if (verdadero === true) {
    console.log("La variable 'verdadero' es TRUE.");
} else {
    console.log("La variable 'verdadero' es FALSE.");
}

// 5) Verificar si "nada" es null
if (nada === null) {
    console.log("La variable 'nada' es null (ausencia de valor).");
}

// Mostrar resultados adicionales
console.log(`Resultado de la operación matemática: ${resultadoOperacion}`);
console.log(`Texto concatenado: ${textoConcatenado}`);