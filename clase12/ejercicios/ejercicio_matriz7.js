// -----------------------------------------------
// Objetivo de la clase:
// - Practicar ciclos while y do while.
// - Trabajar con arrays (listas).
// - Usar matrices (arrays dentro de arrays).
// - Sumar todos los números en una matriz 5x5.
// -----------------------------------------------


//matriz 5x5 (array dentro de array)
const matriz = [
    [ 1,  2,  3,  4,  5],
    [ 6,  7,  8,  9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

//Variable para acumular la suma
let suma = 0;

// Recorrer filas con while
let fila = 0;
while (fila < matriz.length) {
    
    // Recorrer columnas con do...while
    let columna = 0;
    do {
        suma += matriz[fila][columna];
        columna++;
    } while (columna < matriz[fila].length);

    fila++;
}

//resultado final
console.log("La suma total de la matriz 5x5 es:", suma);
