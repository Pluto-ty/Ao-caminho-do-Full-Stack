//Escreva uma função que receba um Array com 5 números e retorne a média deles

var num = [35, 44, 7, 2, 3];
var resultado = 0;
for (var i in num) {
  resultado += num[i];
}

console.log(
  "A média de todos os números do array: ",
  num,
  ", é: " + resultado / num.length
);

//Resposta: outra forma

function media(lista) {
  var total = 0;
  for (let num of lista) {
    total += num;
  }
  return total / lista.length;
}

console.log(media([5, 5, 5]));
