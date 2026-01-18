//Simulador de una cola de atención al cliente
//Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
// - Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
// - Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
// - Al final, muestra cuántos clientes fueron atendidos en total.
//Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

// Lista inicial de clientes
let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

let atendidos = 0;

// Mientras haya clientes en la cola
while (clientes.length > 0) { //sigue mientras haya gente en la cola
  // Atendemos al primer cliente
  let clienteActual = clientes.shift();

  // Verificamos si es VIP
  if (clienteActual === "VIP") { //detectar cliente VIP
    console.log("Atendiendo a cliente con prioridad:", clienteActual);
  } else {
    console.log("Atendiendo a cliente:", clienteActual);
  }

  atendidos++;
}

// Mostramos el total de clientes atendidos
console.log("Total de clientes atendidos:", atendidos);
