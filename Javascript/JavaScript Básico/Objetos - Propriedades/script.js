//as variáveis que ficam dentro dos objetos são chamadas de propriedades do objeto para não se confundir.
// objetos podem guardar inúmeras propriedades com vários valores e assim podendo facilitar muito a separação
// de conteúdos em objetos como blocos. Como objeto 1 para armazenar os nomes e notas de todos os alunos da turma 1 e o objeto2 para a turma2.
var objeto = {
  propriedade: "Oliveira",
  nota1: 7.5,
  nota2: [8, 7],
};

//modelos para chamar o objeto tanto string ou números quanto arrays.
console.log(objeto);
console.log(objeto.propriedade);
console.log(objeto["propriedade"]);
console.log(objeto.nota2[0]);
console.log(objeto["nota2"][1]);

objeto.matricula = 1234; //adicionando uma propriedade no objeto.
objeto["sobrenome"] = "Thyago"; //outra forma de adicionar uma propriedade.

var novaProp = "sobrenome2";
objeto[novaProp] = "Pedro"; //adicionando propriedade por uma variável.
console.log(objeto);

var objeto2 = new Object(); //criando um objeto.

objeto2.nome = "Patricia"; // e adicionando propriedades a ele.
objeto2.nota1 = 5;

console.log(objeto2);
