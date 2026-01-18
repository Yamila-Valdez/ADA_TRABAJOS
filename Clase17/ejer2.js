//Ejercicio 2: Análisis y Modificación de Cadenas de Texto 
//Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente: 
//1. Quite los espacios en blanco al principio y al final. 
//2. Divida la oración en palabras. 
//3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g es para global, lo que significa que reemplazará todas las apariciones, no solo la primera). 
//4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1 
//5. Convierta la oración a una cadena de palabras separadas por guiones. 

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const prompt = require("prompt-sync")();

let oracion = prompt("Ingrese una oración: ");

function procesarOracion(texto) {

  //Quitar espacios al inicio y al final
  let textoLimpio = texto.trim();

  //Dividir la oración en palabras
  let palabras = textoLimpio.split(" ");

  //Reemplazar todas las 'a' por '@'
  let textoReemplazado = textoLimpio.replace(/a/g, "@");

  //Encontrar la posición de "javascript"
  let posicionJavascript = textoLimpio
    .toLowerCase()
    .indexOf("javascript");

  //Convertir la oración en palabras separadas por guiones
  let textoConGuiones = palabras.join("-");

  //Mostrar resultados
  console.log("Texto sin espacios:", textoLimpio);
  console.log("Palabras:", palabras);
  console.log("Texto con vocales reemplazadas:", textoReemplazado);
  console.log("Posición de 'javascript':", posicionJavascript);
  console.log("Texto con guiones:", textoConGuiones);
}

procesarOracion(oracion);
