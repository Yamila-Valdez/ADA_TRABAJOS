//Ejercicio 3: Agregar y eliminar a la fila de mascotas
//Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Fila inicial de mascotas
let mascotas = ["Perro", "Gato", "Conejo"];

//Agrego al Hámster al inicio
mascotas.unshift("Hámster");

//Lista con el Hámster agregado
console.log("Fila de mascotas con prioridad:");
console.log(mascotas);

//Atendemos a la primera mascota
let mascotaAtendida = mascotas.shift();

//Mostramos la mascota atendida
console.log("Mascota atendida:", mascotaAtendida);

//Lista final actualizada
console.log("Fila de mascotas que esperan a ser atentidas:");
console.log(mascotas);
