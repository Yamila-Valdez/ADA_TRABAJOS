//Ejercicio 6: El deportista
//Definir un objeto literal “deportista”, con los siguientes atributos: nombre, energía, experiencia.
//Ademas queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser realizar una función “entrenarHoras.”
//La función entrenarHoras tiene las siguientes tres características:
//1 Recibe por parámetro la cantidad de horas
//2 Resta a su energía (this.energia) la cantidad de horas x 5
//3 Incrementa su experiencia (this.experiencia) la cantidad de horas x 2
//Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.

// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const deportista = {
  nombre: "Yamila",
  energia: 100,
  experiencia: 0,

  entrenarHoras: function (horas) {
    this.energia -= horas * 5;
    this.experiencia += horas * 2;
  }
};

// Estado inicial
console.log("Energía inicial:", deportista.energia);
console.log("Experiencia inicial:", deportista.experiencia);

// Simulamos un entrenamiento de 3 horas (podemos variar el horario para probar la energía)
deportista.entrenarHoras(3);

// Estado final
console.log("Energía después de entrenar:", deportista.energia);
console.log("Experiencia después de entrenar:", deportista.experiencia);
