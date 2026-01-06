// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Ejercicio 9: Última aparición de un modelo de auto 
//Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. 
//La idea es solo registrar el total de los gastos, al finalizar la jornada. 
//Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. 
//Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.  
//a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos que cada fila representa una semana, es decir, si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar que las matrices comienzan siempre en posición 0.  
//b) La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de un día en particular, por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre con las filas, ya que las columnas también comienzan en 0. 
//c) Por último, es necesario tener el total de gastos realizados en el mes. 
//✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para resolver este último punto? 
//d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron. 
//✔ Posibles matrices para comprobar los resultados.

// MATRIZ DE GASTOS (4 semanas x 7 días)
let gastos = [
    [1135, 2500, 900, 1600, 2800, 650, 1100],   // Semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800],  // Semana 2
    [1700, 1150, 1690, 1900, 1770, 500, 2560],  // Semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],   // Semana 4
];

// a) Total de gastos de una semana específica
function totalSemana(matriz, numeroSemana) {
    let indice = numeroSemana - 1; // porque empieza en 0
    let suma = 0;

    for (let dia = 0; dia < matriz[indice].length; dia++) {
        suma += matriz[indice][dia];
    }

    return suma;
}

// b) Total de gastos de un día específico
function totalDia(matriz, numeroDia) {
    let indice = numeroDia - 1;
    let suma = 0;

    for (let semana = 0; semana < matriz.length; semana++) {
        suma += matriz[semana][indice];
    }

    return suma;
}

// c) Total de gastos del mes
function totalMes(matriz) {
    let suma = 0;

    for (let semana = 0; semana < matriz.length; semana++) {
        for (let dia = 0; dia < matriz[semana].length; dia++) {
            suma += matriz[semana][dia];
        }
    }

    return suma;
}

// d) Semana con más gastos
function semanaConMasGastos(matriz) {
    let mayorGasto = 0;
    let semanaMayor = 0;

    for (let semana = 0; semana < matriz.length; semana++) {
        let sumaSemana = 0;

        for (let dia = 0; dia < matriz[semana].length; dia++) {
            sumaSemana += matriz[semana][dia];
        }

        if (sumaSemana > mayorGasto) {
            mayorGasto = sumaSemana;
            semanaMayor = semana + 1;
        }
    }

    return semanaMayor;
}

// d) Día con más gastos
function diaConMasGastos(matriz) {
    let mayorGasto = 0;
    let diaMayor = 0;

    for (let dia = 0; dia < matriz[0].length; dia++) {
        let sumaDia = 0;

        for (let semana = 0; semana < matriz.length; semana++) {
            sumaDia += matriz[semana][dia];
        }

        if (sumaDia > mayorGasto) {
            mayorGasto = sumaDia;
            diaMayor = dia + 1;
        }
    }

    return diaMayor;
}

// RESULTADOS
console.log("Total semana 2:", totalSemana(gastos, 2));
console.log("Total día 3:", totalDia(gastos, 3));
console.log("Total del mes:", totalMes(gastos));
console.log("Semana con más gastos:", semanaConMasGastos(gastos));
console.log("Día con más gastos:", diaConMasGastos(gastos));
