//Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima:
// A maior e menor altura e a média da idade

var pessoas = [
  { altura: 1.7, idade: 26 },
  { altura: 1.6, idade: 22 },
  { altura: 1.5, idade: 22 },
];

pessoas.sort(function (a, b) {
  return parseFloat(b.altura) - parseFloat(a.altura);
});

function media() {
  var n = 0;
  for (var i in pessoas) {
    n += pessoas[i].idade;
  }
  return n / pessoas.length;
}

console.log(
  "A maior pessoa tem " +
    pessoas[0].altura +
    " e a menor pessoa tem " +
    pessoas[pessoas.length - 1].altura +
    ". A média da idade das pessoas é " +
    media()
);
