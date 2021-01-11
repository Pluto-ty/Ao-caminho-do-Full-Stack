//Escreva uma função que receba um número e imprima se ele é par ou ímpar

function par(n1) {
  if (n1 / 2 == 0) {
    console.log("O número " + n1 + " é par.");
  } else {
    console.log("O número " + n1 + " é ímpar.");
  }
}

par(16);

//Resposta: // Outra forma elaborada.

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

function parOuImpar(num) {
  if (num % 2 == 0) {
    console.log("par");
  } else {
    console.log("ímpar");
  }
}

const maior = maiornum([9, 3, 5, 2, 6, 10, 15]);
parOuImpar(maior);
