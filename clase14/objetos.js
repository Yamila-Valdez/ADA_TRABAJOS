// // 1 // Definimos un objeto literal llamado "auto"
const auto = {
marca: "Toyota", // // Propiedad: marca del auto
modelo: "Corolla", // // Propiedad: modelo del auto
año: 2022, // // Propiedad: año del auto
color: "rojo", // // Propiedad: color del auto

// // Método que usa "this" para describir el auto
describir: function () {
// // Aquí, "this" hace referencia al objeto "auto"
return `Este auto es un ${this.marca} ${this.modelo} del año ${this.año} y de color ${this.color}`;
}
};

// // Llamada al método "describir" del objeto "auto"
console.log(auto.describir());
// // "Este auto es un Toyota Corolla del año 2022 y de color rojo."

// // Accediendo directamente a las propiedades del objeto
console.log(auto.marca); // // "Toyota"
console.log(auto.modelo); // // "Corolla"
console.log(auto.año); // // 2022
console.log(auto.color); // // "rojo"