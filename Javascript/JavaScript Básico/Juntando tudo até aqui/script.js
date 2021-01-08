// Feito com tudo que aprendi até a aula 17 de Javascript básico. Utilizando array, condição if, for e funtions.

// Criar um sistema com os nomes dos alunos - nota1 - nota2 - média - aprovado/reprovado.

var nomes = ["João", "Gabriel", "Patricia"];
var notaA = [7.25, 5.0, 9];
var notaB = [8, 6.75, 8.5];

function média(n1, n2) {
  return (n1 + n2) / 2;
}

function passou(media) {
  if (media > 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

for (var index in nomes) {
  var nota1 = notaA[index];
  var nota2 = notaB[index];

  var m = média(nota1, nota2);

  console.log(
    "Aluno(a): " +
      nomes[index] +
      " com primeira nota de " +
      nota1 +
      ", e segunda nota de " +
      nota2 +
      ". A média do aluno é " +
      m +
      " e ele(a) está " +
      passou(m)
  );
}
