//Calcula el total de ventas de productos seleccionados 
//Tienes una lista de productos con sus precios en formato de objeto: 
//const products = [ 
//{ name: 'Laptop', price: 1000 }, 
//{ name: 'Mouse', price: 25 }, 
//{ name: 'Teclado', price: 50 }, 
//{ name: 'Monitor', price: 200 }, 
//{ name: 'Audífonos', price: 75 } 
//]; 
//Queremos: 
// - Seleccionar los productos cuyo precio sea mayor o igual a 50. 
// - Obtener solo los nombres de esos productos. 
// - Calcular el precio total sumando los precios de los productos seleccionados. 
// - Imprime el total y los nombres de los productos seleccionados en la consola. 

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 25 },
  { name: 'Teclado', price: 50 },
  { name: 'Monitor', price: 200 },
  { name: 'Audífonos', price: 75 }
];

const productosSeleccionados = products.filter(function (producto) {
  return producto.price >= 50;
});

const nombresProductos = productosSeleccionados.map(function (producto) {
  return producto.name;
});

const totalPrecio = productosSeleccionados.reduce(function (acumulador, producto) {
  return acumulador + producto.price;
}, 0);

console.log("Productos seleccionados:", nombresProductos);
console.log("Total de ventas:", totalPrecio);
