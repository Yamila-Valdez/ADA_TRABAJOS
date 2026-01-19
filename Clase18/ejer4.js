//Ejercicio 4: Concurso de Likes 
//En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

function concursoDeLikes(likes) {
  // Copiamos el array para no modificar el original
  const likesOrdenados = [...likes].sort((a, b) => b - a); //spread copia el array y evita modificar el original

  const mayor = likesOrdenados[0];
  const segundo = likesOrdenados[1];
  const tercero = likesOrdenados[2];
  const menor = likesOrdenados[likesOrdenados.length - 1];

  console.log("Likes ordenados:", likesOrdenados);
  console.log("Mayor cantidad de likes:", mayor);
  console.log("Segundo puesto:", segundo);
  console.log("Tercer puesto:", tercero);
  console.log("Menor cantidad de likes:", menor);
}

// Ejemplo con 15 usuarios
const likesUsuarios = [
  120, 340, 560, 230, 90,
  450, 780, 60, 310, 500,
  410, 275, 150, 640, 80
];

concursoDeLikes(likesUsuarios);
