//função para obter as médias dos objetos dentro do array
// var calcMedia = function () {
//   return (this.nota1 + this.nota2) / 2;
// };
//Array com objetos dentro.
// var turma = [
//   { nome: "Igor", nota1: 9, nota2: 7, media: calcMedia },
//   { nome: "João", nota1: 6, nota2: 5, media: calcMedia },
// ];

// var aluno = turma[1];
// console.log(aluno);
// console.log(aluno.media());

//criação de um aluno por função. Porem sempre cria o msm aluno.

// function criarAluno() {
//   return {
//     nome: "Igor",
//     nota1: 9,
//     nota2: 8,
//     media: function () {
//       return (this.nota1 + this.nota2) / 2;
//     },
//   };
// }
// var aluno2 = criarAluno();

//criando aluno por função de forma que possa escolher as informações
/*
function criarAluno(nome, nota1, nota2) {
  return {
    //retorna um objeto com a propriedade e o método.
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  };
}
*/

// var aluno2 = criarAluno("Igor", 8, 7);
// console.log(aluno2);
// console.log(aluno2.media());

// Agora para outro nível. Automatizando e criando dentro de um array e utilizando for para ler todos os alunos do array
/*
function criarAluno(nome, nota1, nota2) {
  return {
    nome: nome,
    nota1: nota1,
    nota2: nota2,
    media: function () {
      return (this.nota1 + this.nota2) / 2;
    },
  };
}

//Automatizando a criação do aluno, sem precisar ficar digitando nota1, nota2 e etc.
//E assim ja se cria um objeto com todas as informações necessárias do aluno no array da turma
var turma = [
  criarAluno("Igor", 8, 6),
  criarAluno("Pedro", 6, 5),
  criarAluno("Nat", 7, 9),
];
var aluno3 = turma[0];

// console.log(aluno3);
// console.log(aluno3.media());
//Agora você pode criar um for e varrer a lista do array com todos os alunos e médias.

turma.forEach(function (elemento) {
  console.log(elemento);
  console.log(elemento.media());
});

for (var aluno of turma) {
  console.log(aluno);
  console.log(aluno.media());
}
*/

//Agora criando um objeto construtor e instanciando ele dentro de uma variável.

function aluno(nome, n1, n2) {
  (this.nome = nome),
    (this.nota1 = n1),
    (this.nota2 = n2),
    (this.media = function () {
      return (nota1 + nota2) / 2;
    });
}
//parecido com o de cima mas em vez de colocar o return e ja transformar em um objeto.
//precisa utilizar o this e instanciar em uma variável com o new abaixo
// assim criando um objeto com os dados que quer e passando para uma variável única.
var a = new aluno("Pedro", 8, 5);

console.log(a);
