// Array é simplesmente uma sequência de variáveis todas juntas. É como você cria um elemento com várias variáveis.

// var alunos = new Array("pedro", "maria", "jose", "joana", "Ana", "Gabriel");
var alunos = ["--", "Pedro", "Maria", "Jose", "Joana", "Ana", "Gabriel"];

// forma básica de chamar os elementos de um array
for (var aluno = 0; aluno < alunos.length; aluno++) {
  console.log(alunos[aluno]);
}

// formas mais "avançadas e fáceis"
// in - vai pegar o índice (0,1,2.... as posições em sequência do array) do array
for (var aluno in alunos) {
  console.log(alunos[aluno]);
}

for (var aluno in alunos) {
  console.log(aluno);
}

// o of em vez do índice ele vai pegar o elemento em ordem do array( "--", "pedro", "maria" e etc)
for (var aluno of alunos) {
  console.log(aluno);
}
