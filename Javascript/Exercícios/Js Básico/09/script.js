//Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima:
// A maior e menor altura e a média da idade

// var pessoas = [
//   { altura: 1.7, idade: 26 },
//   { altura: 1.6, idade: 22 },
//   { altura: 1.5, idade: 22 },
// ];

// pessoas.sort(function (a, b) {
//   return parseFloat(b.altura) - parseFloat(a.altura);
// });

// function media() {
//   var n = 0;
//   for (var i in pessoas) {
//     n += pessoas[i].idade;
//   }
//   return n / pessoas.length;
// }

// console.log(
//   "A maior pessoa tem " +
//     pessoas[0].altura +
//     " e a menor pessoa tem " +
//     pessoas[pessoas.length - 1].altura +
//     ". A média da idade das pessoas é " +
//     media()
// );

//Resposta: forma "certa" e mais completa

function maiorEntreDois(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function menorEntreDois(n1, n2) {
  if (n2 > n1) {
    return n1;
  } else {
    return n2;
  }
}

function media(n1) {
  for (var i in n1) {
    i += n1[i];
  }
  return i / n1.length;
}

function pessoas(listaDePessoas) {
  var maiorAltura = 0;
  var menorAltura = 999;
  var idades = [];
  for (let pessoa of listaDePessoas) {
    maiorAltura = maiorEntreDois(maiorAltura, pessoa.altura);
    menorAltura = menorEntreDois(menorAltura, pessoa.altura);
    idades.push(pessoa.idade);
  }
  console.log(maiorAltura);
  console.log(menorAltura);
  console.log(media(idades));
}

pessoas([
  { altura: 1.8, idade: 23 },
  { altura: 1.9, idade: 27 },
  { altura: 1.65, idade: 33 },
  { altura: 1.83, idade: 44 },
  { altura: 1.91, idade: 45 },
  { altura: 1.54, idade: 16 },
]);
