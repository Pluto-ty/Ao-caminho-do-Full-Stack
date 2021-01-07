// Outras formas de se usar e criar funtions.
// No javascript uma função também pode ser uma variável.

function media(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var média = (nota1 + nota2) / 2;

  return média;
}

var resultado = media(7, 8);
var m = media;

console.log("1° média " + resultado);
console.log("A variável m se transformou em uma função: " + m());

// Podemos atribuir o resultado de uma funtion á uma variável ou até a function em si para uma variável transformando ela em uma function. Como na variável m.

// função "anônima" que é outra forma de se criar uma função e ja deixa dentro da variável a função.

var média = function (n1, n2) {
  return (n1 + n2) / 2;
};

var n = média(5, 6);
var n2 = média;

console.log(média(5, 6));
console.log(n);
console.log(n2(6, 5));

//arrow function ou funções de setas.

var média2 = (n1, n2) => {
  return (n1 + n2) / 2;
};

console.log(média(5, 6));

// Das três vamos usar as duas primeiras por agora. a arrow function vai ser mais para o js avançado e no react.
