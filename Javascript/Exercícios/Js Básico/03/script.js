//Escreva uma função que receba um Array com 5 números e retorne o maior deles

var num = [2, 5, 6, 8, 10];

num.sort(function (a, b) {
  return b - a;
});

console.log("O maior número do array ", num, " é o número " + num[0]);

//Resposta: // Outra forma de se fazer.

function maiorEntreDois(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function maiornum(lista) {
  var maior = lista[0];
  for (let num of lista) {
    maior = maiorEntreDois(num, maior);
  }
  return maior;
}

console.log(maiornum([8, 4, 6]));
