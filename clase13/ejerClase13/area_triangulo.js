// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Ejercicio 1: Área de un triángulo (función declarada
//Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe devolver el área del triángulo. 
//Pista: Usa la fórmula: área = base * altura / 2

//Función declarada para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    let area = (base * altura) / 2; // Fórmula: base * altura / 2
    return area; // Devuelve el resultado
}

//Uso de la función
const baseIngresada = 8;   // Podés pedirlo con prompt si querés
const alturaIngresada = 5; // Podés pedirlo con prompt si querés

const areaTriangulo = calcularAreaTriangulo(baseIngresada, alturaIngresada);

console.log("El área del triángulo es:", areaTriangulo);

