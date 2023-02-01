var frutas = ['Maçã', 'Banana'];

console.log(frutas.length);
// 2

var primeiro = frutas[0];
// Maçã

var ultimo = frutas[frutas.length - 1];
// Banana


frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
  });
  // Maçã 0
  // Banana 1

  