const nombre = "Dari";
const edad = 17;
const ciudad = "Armenia";

console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof ciudad);

const anioActual = 2026;
console.log(anioActual - edad);

const edadTexto = "19";

console.log(edadTexto + 1);
console.log(Number(edadTexto) + 1);

// El primer resultado concatena texto y numero, mientras que Number() convierte el texto en número y permite realizar la suma matemática.

const companeros = [
    { nombre: "Laura", edad: 19 },
    { nombre: "Carlos", edad: 18 },
    { nombre: "Sofia", edad: 17 }
];

console.table(companeros);
