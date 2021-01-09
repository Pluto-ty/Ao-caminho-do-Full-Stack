//Escreva uma função que receba um Array com 5 números e retorne o maior deles

var num = [2, 5, 6, 8, 10];

num.sort(function (a, b) {
  return b - a;
});

console.log("O maior número do array ", num, " é o número " + num[0]);
