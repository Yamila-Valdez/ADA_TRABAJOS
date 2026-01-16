//Ejercicio 9: Última aparición de un modelo de auto
//trabajaremos con una lista de modelos de autos. Implementa una función llamada ultimaAparicionModeloAuto(modelo) que encuentre y muestre la última posición en la lista donde aparece el modelo específico de auto dado por modelo.
//Datos Iniciales: Utiliza un array llamado modelosAutos que contiene varios modelos de autos, algunos repetidos para demostrar la funcionalidad.
//Funcionalidad: Implementa la función ultimaAparicionModeloAuto(modelo), que toma modelo como parámetro (un string).
//Debes recorrer el array de manera manual para encontrar la última aparición del modelo.
//Si el modelo se encuentra en el array, la función debe imprimir por consola la posición (índice + 1) en la que aparece (considerando que la numeración es de 1 a N).
//Si el modelo no está en el array, debe imprimir un mensaje indicando que el modelo no está presente.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []


const modelosAutos = [
  "Corsa",
  "Fiesta",
  "Gol",
  "Corsa",
  "Focus",
  "Gol",
  "Corsa"
];

const ultimaAparicionModeloAuto = (modelo) => {
  let posicion = -1;

  for (let i = 0; i < modelosAutos.length; i++) {
    if (modelosAutos[i] === modelo) {
      posicion = i;
    }
  }

  if (posicion !== -1) {
    console.log(
      "El modelo aparece por última vez en la posición: " + (posicion + 1)
    );
  } else {
    console.log("El modelo no está presente en la lista");
  }
};

// Ejemplos de ejecución
ultimaAparicionModeloAuto("Corsa");
ultimaAparicionModeloAuto("Palio");
