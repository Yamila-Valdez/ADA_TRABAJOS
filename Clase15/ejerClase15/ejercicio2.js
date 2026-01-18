//Ejercicio 2: Eliminar al último invitado
//Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

//Lista inicial de invitados
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];

//Eliminamos al último invitado
let invitadoEliminado = invitados.pop(); //pop elimina el último elemento de un array

//Quién fue eliminado
console.log("El invitado eliminado es:", invitadoEliminado);

//Se muestra la lista actualizada
console.log("Lista de invitados actualizada:");
console.log(invitados);
