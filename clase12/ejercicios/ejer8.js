// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Ejercicio 8: Rojo y Verde
//Para este ejercicio vamos a generar dos funciones: 
//a) Una va a sumar los valores en la diagonal marcada en rojo. 
//b) La otra va a marcar los valores de la diagonal marcada en verde. 
//Ambas funciones deben devolver un resultado único. Rojo: 505 Verde 505 
//IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el método “push” en los Arrays. ¡Este método lo veremos en las próximas clases, pero si desean pueden investigarlo para resolver este desafío!

// Crear la matriz
let tabla = [];
let numeroActual = 1;

// Generar matriz 10x10 con números del 1 al 100
for (let i = 0; i < 10; i++) {
    let fila = [];

    for (let j = 0; j < 10; j++) {
        fila.push(numeroActual);
        numeroActual++;
    }

    tabla.push(fila);
}

// Mostrar la matriz
console.log("Matriz generada:");
console.table(tabla);

// Función para sumar la diagonal principal (roja)
function calcularDiagonalPrincipal(matriz) {
    let total = 0;

    for (let i = 0; i < matriz.length; i++) {
        total += matriz[i][i];
    }

    return total;
}

// Función para sumar la diagonal secundaria (verde)
function calcularDiagonalSecundaria(matriz) {
    let total = 0;

    for (let i = 0; i < matriz.length; i++) {
        let columna = matriz.length - 1 - i;
        total += matriz[i][columna];
    }

    return total;
}

// Resultados
console.log("Rojo:", calcularDiagonalPrincipal(tabla));   // 505
console.log("Verde:", calcularDiagonalSecundaria(tabla)); // 505
