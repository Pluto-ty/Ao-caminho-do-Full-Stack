// A variável se chama propriedade dentro de um objeto e uma função vira método. É possível colocar uma function  dentro de um objeto ou chamado em uma propriedade transformando-a em um método.
//o this faz referência a o elemento dentro de onde ele estiver então quando ele é chamado dentro do objeto aluno e o this.nota ativa ele vai procurar a propriedade notas que está dentro do objeto que foi ativado.
//se não colocar o this e não requisitar um elemento na função ela não funciona por não saber de onde tirar o nota. Por isso o this para falar que fora da function e dentro de onde ela está (objeto) tem o elemento que ela procura.
//this procura o elemento dentro de o método ou o que seja esteja dentro, no caso o objeto.
function calcMedia() {
  return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
  nome: "Pedro",
  notas: [9, 8],

  média: calcMedia,
};

var aluno2 = {
  nome: "João",
  notas: [5, 8],

  média: calcMedia,
};

console.log(aluno.nome);
console.log(aluno.média());

console.log(aluno2.nome);
console.log(aluno2.média());
