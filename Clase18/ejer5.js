//Ejercicio 5: Servicio meteorológico 
//El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día —valor numérico del día—, mes —valor numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho día. Las temperaturas —objeto temperatura— están cargados en un array. 
//a) Ordenar por temperatura mínima de menor a mayor. 
//b) Ordenar por temperatura máxima de mayor a menor. 

//Pego los simbolos que no tengo a mano en el teclado de la notebook: >< {} []

const temperaturas = [
  { dia: 1, mes: 8, tempMin: 5, tempMax: 15 },
  { dia: 2, mes: 8, tempMin: 3, tempMax: 18 },
  { dia: 3, mes: 8, tempMin: 7, tempMax: 20 },
  { dia: 4, mes: 8, tempMin: 2, tempMax: 14 },
  { dia: 5, mes: 8, tempMin: 6, tempMax: 19 }
];

// a) Ordenar por temperatura mínima (menor a mayor)
const ordenPorMinima = [...temperaturas].sort( //spread copia el array y evita modificar el original
  (a, b) => a.tempMin - b.tempMin
);

// b) Ordenar por temperatura máxima (mayor a menor)
const ordenPorMaxima = [...temperaturas].sort( //uso sortcon una función comparadora que accede a la propiedad específica del objeto
  (a, b) => b.tempMax - a.tempMax
);

console.log("📉 Ordenado por temperatura mínima (menor a mayor):");
ordenPorMinima.forEach(dia => {
  console.log(
    `Día ${dia.dia}/${dia.mes} - Mínima: ${dia.tempMin}°C`
  );
});

console.log("\n📈 Ordenado por temperatura máxima (mayor a menor):");
ordenPorMaxima.forEach(dia => {
  console.log(
    `Día ${dia.dia}/${dia.mes} - Máxima: ${dia.tempMax}°C`
  );
});