//Ejemplo: determinar que día de la semana es según un número

//1. Importación de la librería
const prompt = require("prompt-sync")();

//2. Entrada de datos
// Pedimos el número. Usamos parseInt porque el switch compara valores exactos.

let numeroDía = parseInt(prompt("Ingrese un número del 1 al 7: "));

//3. Estructura switch
// El switch evalúa la variable que se pone entre paréntesis (numeroDía).
// Luego, busca abajo el "caso" (case) que cpincida con ese valor.

switch (numeroDía) {
    //Si numeroDía es igual a 1...
    case 1: 
          console.log("Es lunes. A TRABAJAR!");
          break; //El "freno de mano": Importante! Le dice al programa "hey ya encontré lo que buscaba" salí de ahí, no es por acá.          
    
    //Si numerodía es igual a 2...
    case 2: 
          console.log("Es martes. A seguir chambeando!");
          break; //Si olvidás el break, el programa va a seguir ejecutando los de abajo (efecto cascada).
    case 3: 
          console.log("Es miércoles. Mitad de semana!");
          break;
    case 4: 
          console.log("Es jueves. Casi finde!");
          break;
    case 5: 
          console.log("Es viernes. último esfuerzo!");
          break;
    case 6: 
          console.log("Es sábado. Sabaduki!");
          break;
    case 7: 
          console.log("Es domingo. Lavaste la ropa?");
          break;

//El "Default" (por defecto)
//Funciona igual que el "else" final.
//Si el número no fue ninguno de los anteriores (ej: 0, 8, 10), entra acá-

default:
    console.log("Error: El número que ingresaste no cumple con la consirgna!");
    //En el default no hace falta escribir el "break" porque ya es el final, pero como somos prolijas lo colocamos.
    break;
}
