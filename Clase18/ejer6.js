//Ejercicio 6: Ordenando personas
// ¿Cómo podrías ordenar la colección, de menor a mayor, considerando solo la estatura?
// Utiliza bubble sort.
//Datos del PDF:
//nombre: "Dua", apellido: "Lipa",  ocupacion: "Cantante", estatura: 173,
//nombre: "Ariana", apellido: "Grande",  ocupacion: "Cantante", estatura: 160,
//nombre: "Taylor", apellido: "Swift",  ocupacion: "Cantante", estatura: 180

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

let personas = [ 
  { 
    nombre: "Dua", 
    apellido: "Lipa",  
    ocupacion: "Cantante", 
    estatura: 173
  },
  { 
    nombre: "Ariana", 
    apellido: "Grande",  
    ocupacion: "Cantante", 
    estatura: 160
  },
  { 
    nombre: "Taylor", 
    apellido: "Swift",  
    ocupacion: "Cantante", 
    estatura: 180
  }
];

// Bubble Sort por estatura (menor a mayor)
function ordenarPorEstatura(array) {
  let copia = [...array]; // copiamos para no modificar el original

  for (let i = 0; i < copia.length - 1; i++) {
    for (let j = 0; j < copia.length - 1 - i; j++) {
      if (copia[j].estatura > copia[j + 1].estatura) {
        let aux = copia[j];
        copia[j] = copia[j + 1];
        copia[j + 1] = aux;
      }
    }
  }

  return copia;
}

const personasOrdenadas = ordenarPorEstatura(personas);

console.log("Personas ordenadas por estatura (menor a mayor):");
personasOrdenadas.forEach(persona => {
  console.log(`${persona.nombre} ${persona.apellido} - ${persona.estatura} cm`);
});
