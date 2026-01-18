//Encuentra la película más corta y analiza los títulos largos 
//Supón que tienes una lista de películas con su duración en minutos: 
//const movies = [ 
//{ title: 'El Señor de los Anillos', duration: 200 }, 
//{ title: 'Inception', duration: 148 },
//{ title: 'Matrix', duration: 136 }, 
//{ title: 'Toy Story', duration: 81 }, 
//{ title: 'Coco', duration: 105 } 
//]; 
//Queremos: 
// - Encontrar la película más corta en duración. 
// - De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres. 
// - Crear una lista de los títulos largos en minúsculas. 
// - Imprime en la consola: 
// - El título de la película más corta. 
// - La lista de títulos largos en minúsculas.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const movies = [
  { title: 'El Señor de los Anillos', duration: 200 },
  { title: 'Inception', duration: 148 },
  { title: 'Matrix', duration: 136 },
  { title: 'Toy Story', duration: 81 },
  { title: 'Coco', duration: 105 }
];

//Encontrar la película más corta
const peliculaMasCorta = movies.reduce(function (menor, pelicula) {
  return pelicula.duration < menor.duration ? pelicula : menor;
});

//Filtrar películas restantes con títulos largos
const titulosLargos = movies
  .filter(function (pelicula) {
    return pelicula !== peliculaMasCorta;
  })
  .filter(function (pelicula) {
    return pelicula.title.length > 10;
  })
  .map(function (pelicula) {
    return pelicula.title.toLowerCase();
  });

//Mostrar resultados
console.log("Película más corta:", peliculaMasCorta.title);
console.log("Títulos largos en minúsculas:", titulosLargos);
