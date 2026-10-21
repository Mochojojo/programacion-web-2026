const datos = [
  { id: 1, nombre: "Moussaka",        categoria: "platos fuertes", precio: 189, porciones: 12, descuento: 10,        chef: { nombre: "Nikos" } },
  { id: 2, nombre: "Ensalada griega", categoria: "entradas",       precio: 129, porciones: 20, descuento: 0,         chef: { nombre: "Eleni" } },
  { id: 3, nombre: "Souvlaki de pollo", categoria: "platos fuertes", precio: 159, porciones: 15 },
  { id: 4, nombre: "Gyros", categoria: "platos fuertes", precio: 175, porciones: 8,  descuento: 5,         chef: { nombre: "Nikos" } },
  { id: 5, nombre: "Baklava",         categoria: "postres",        precio: 95,  porciones: 0,  descuento: null,      chef: null },
  { id: 6, nombre: "Tzatziki", categoria: "entradas",     precio: 85,  porciones: 25, descuento: undefined, chef: { nombre: "Eleni" } },
];

const filtrados = datos
  .filter(({ porciones, precio }) => porciones > 0 && precio < 160)
  .map(({ chef, descuento, ...resto }) => ({
    ...resto,
    chef: chef?.nombre ?? "Sin chef asignado",
    descuento: descuento ?? 0,
  }));

const total = datos.reduce((acum, { precio }) => acum + precio, 0);
const promedio = Number((total / datos.length).toFixed(2));
const ordenados = [...datos].sort((a, b) => a.precio - b.precio);

console.log({ filtrados, total, promedio, ordenados });
console.log("Orden original (ids):", datos.map(({ id }) => id));
console.log("Orden nuevo (ids):   ", ordenados.map(({ id }) => id));
console.log("Primer objeto intacto:", datos[0]);
console.log("Mismo arreglo?", datos === ordenados);