//Formas de criar um objeto e usar.

//1- Simples - através de uma variável.
/*
var a = {
  nome: "Igor",
  sobrenome: "Oliveira",
  idade: 5,
};
console.log(a);
*/

// 2- através de uma função que retorna um objeto.

/*
function obj(n, s) {
  return { nome: n, sobrenome: s };
}

var a = obj("Igor", "Oliveira");
console.log(a);
*/

// 3 - através de uma função sem retorno, assim
// para conseguir criar um objeto com uma função sem
// retorno terá que instância-la a uma variável com o new para utiliza-la

function obj(n, s) {
  this.nome = n;
  this.sobrenome = s;
}

var a = new obj("Pedro", "Moura");
console.log(a.nome);
console.log(a["sobrenome"]);
