//Ejercicio 7: Libros
//Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
//título: una cadena con el título del libro.
//autor: una cadena con el nombre del autor del libro.
//anioPublicacion: un número con el año de publicación del libro.
//Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de cada libro en el formato especificado.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const libro1 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967
};

const libro2 = {
  titulo: "El principito",
  autor: "Antoine de Saint-Exupéry",
  anioPublicacion: 1943
};

const mostrarLibro = (libros) => {
  for (let i = 0; i < libros.length; i++) {
    console.log(
      "Título: " + libros[i].titulo +
      " | Autor: " + libros[i].autor +
      " | Año de publicación: " + libros[i].anioPublicacion
    );
  }
};

const listaLibros = [libro1, libro2];

mostrarLibro(listaLibros);
