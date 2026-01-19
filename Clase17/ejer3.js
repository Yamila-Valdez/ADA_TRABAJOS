//Ejercicio 3: Gestión Compleja de Arrays 
//A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas: 
//1. Añada un nuevo producto al array. 
//2. Elimine el último producto del array. 
//3. Encuentre el índice de un producto específico. En este punto pueden usar forEach o investigar el método “findIndex()” 

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//findIndex() devuelve la posición del primer elemento que cumple la condición

// Array inicial de productos
const productos = ['pan', 'leche', 'huevos', 'queso'];

function gestionarProductos(listaProductos) {
  // Añadir un nuevo producto
  listaProductos.push('manteca');

  // Eliminar el último producto
  listaProductos.pop();

  // Encontrar el índice de un producto específico
  const productoBuscado = 'leche';
  const indice = listaProductos.findIndex(
    (producto) => producto === productoBuscado
  );

  // Mostrar resultados
  console.log('Lista final de productos:', listaProductos);
  console.log('Índice del producto buscado:', indice);
}

// Llamada a la función
gestionarProductos(productos);
