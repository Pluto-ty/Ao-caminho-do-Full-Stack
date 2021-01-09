//Escreva uma função que receba um Array com 3 números e imprima eles em ordem

// var arr = [5, 3, 1, 4, 2];

// console.log("Array original:", arr);

// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log("Array ordenado:", arr);

var test = [5, 2, 8, 15, 1, 7, 6];

console.log("Array original: ", test);

test.sort(function (a, b) {
  return a - b;
});

console.log("Array ordenada: ", test);
