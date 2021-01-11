//Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4.
//Para cada número que seja múltiplo de 4 imprima "pi" no lugar
var num1 = [];
for (var i = 0; i < 100; i++) {
  if (i % 4 != 0) {
    num1.push(i);
  } else {
    num1.push("pi");
  }
}

console.log("array", num1);

//Resposta: outra forma

function multiploDe4() {
  for (let index = 0; index < 100; index++) {
    if (index % 4 == 0) {
      console.log("pi");
    } else {
      console.log(index);
    }
  }
}

multiploDe4();
