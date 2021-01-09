//Escreva uma função que receba dois números e retorne o maior deles

function maior(n1, n2) {
  if (n1 > n2) {
    console.log(
      "O primeiro valor de " + n1 + " é maior que o segundo de " + n2
    );
  } else {
    console.log(
      "O segundo valor de " + n2 + " é maior que o primeiro de " + n1
    );
  }
}

var resultado = maior(1, 2);
