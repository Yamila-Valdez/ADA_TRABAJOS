//Gestión de inventario de una tienda
//Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
//let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
//Debes realizar las siguientes acciones:
// - Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
// - Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
// - Eliminar el primer producto del inventario.
// - Mostrar la lista actualizada de productos en una sola cadena, separados por comas.

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Inventario inicial
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

//Agregar un nuevo producto
inventario.push("Impresora"); //agregar al final

//Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) { //verificar si existe
  console.log("Tablet está en el inventario");
} else {
  console.log("Tablet NO está en el inventario");
}

//Eliminar el primer producto del inventario
let productoEliminado = inventario.shift(); //eliminar el primero
console.log("Producto eliminado:", productoEliminado);

//Mostrar la lista actualizada en una sola cadena
let inventarioFinal = inventario.join(", "); //unir en una sola cadena
console.log("Inventario actualizado:");
console.log(inventarioFinal);

