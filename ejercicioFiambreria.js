// Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const prompt = require("prompt-sync")({ sigint: true });

// --- Pedimos datos del clima ---
let temperatura = Number(prompt("Ingrese la temperatura actual: "));
let llueve = prompt("¿Está lloviendo? (si/no): ").toLowerCase() === "si";

// --- Pedimos la hora ---
let horaActual = Number(prompt("Ingrese la hora actual (0-23): "));
let horaApertura = Number(prompt("Ingrese la hora de apertura de la fiambrería: "));
let horaCierre = Number(prompt("Ingrese la hora de cierre de la fiambrería: "));

// --- Pedimos solo los gramos ---
let cantidadQueso = Number(prompt("¿Cuántos gramos de queso quiere comprar?: "));

// Precio del queso por 100 gramos (Supongamos un precio)
let precioPor100gr = 500;

// Cálculo automático de la deuda con Mónica
let deudaConMonica = (cantidadQueso / 100) * precioPor100gr;


// --- LÓGICA DEL PROGRAMA ---
console.log("\n--- DECISIONES PARA IR A LA FIAMBRERÍA ---\n");

// 1️⃣ Ropa según temperatura
if (temperatura > 25) {
    console.log("Hace calor, salgo con ropa liviana.");
} else {
    console.log("Esta fresco, salgo con un abrigo.");
}

// 2️⃣ ¿Llevo paraguas?
if (llueve) {
    console.log("Está lloviendo, llevo paraguas ☔.");
} else {
    console.log("No llueve, salgo sin paraguas.");
}

// 3️⃣ Verificar si está abierta
if (horaActual >= horaApertura && horaActual <= horaCierre) {
    console.log("La fiambrería está abierta, puedo ir a comprar.");
} else {
    console.log("La fiambrería está cerrada, no puedo comprar mi quesito.");
    process.exit(); // corta el programa
}

// 4️⃣ Compra del queso
console.log("\nCompré " + cantidadQueso + " gramos de queso.");
console.log("Me olvidé la plata, así que Mónica me fía.");

// 5️⃣ Deuda final
console.log("Mi deuda total con Mónica ahora es: $" + deudaConMonica);

console.log("\nRegreso a casa con mi quesito");
