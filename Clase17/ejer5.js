//Ejercicio 5: Manipulación de Arrays y Cadenas 
//A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas: 
//1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
//2. Divida cada frase en palabras. 
//3. Reemplace las palabras "malo" por "bueno". 
//4. Combine las palabras de cada frase en una nueva cadena separada por espacios. 
//5. Devuelva un nuevo array con las frases modificadas. 

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//toLowerCase(): Convierte todas las letras del string a minúsculas sin modificar el string original.


function procesarFrases(frases) {
  const frasesModificadas = frases.map(frase => { //se utiliza map para transformar cada frase sin modificar el array original
    // Convertir a minúsculas
    const minuscula = frase.toLowerCase();

    // Dividir en palabras
    const palabras = minuscula.split(" ");

    // Reemplazar "malo" por "bueno"
    const palabrasReemplazadas = palabras.map(palabra =>
      palabra === "malo" ? "bueno" : palabra
    );

    // Unir las palabras en una frase
    return palabrasReemplazadas.join(" ");
  });

  // Devolver el nuevo array
  return frasesModificadas;
}

// Ejemplo de uso
let frases = [
  "El clima es MALO hoy",
  "Este libro es muy MALO",
  "El servicio aquí es MALO"
];

const resultado = procesarFrases(frases);
console.log(resultado);
