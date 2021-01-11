//Escreva um programa que imprima o seguinte padrão
// *
// * *
// * * *
// * * * *
// * * * * *

for (var i = 0; i < 5; i++) {
  switch (i) {
    case 0:
      console.log("*");
      break;

    case 1:
      console.log("* *");
      break;

    case 2:
      console.log("* * *");
      break;

    case 3:
      console.log("* * * *");
      break;
    case 4:
      console.log("* * * * *");
      break;
  }
}

//Resposta:

// function escada(altura) {
//   for (let i = 1; i <= altura; i++) {
//     let string = "";
//     for (let j = 1; j <= i; j++) {
//       string += "* ";
//     }
//     console.log(string);
//   }
// }
// // escada(25)
