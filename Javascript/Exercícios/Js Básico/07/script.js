//Escreva uma função que receba um objeto e imprima suas propriedades

//Tentativa falha.
var objeto = {
  nome: "Diego",
  idade: 20,
  altura: 1.7,
};

function imprimir(objeto) {
  console.log(objeto);
}

imprimir(objeto);
console.log(Object.values(objeto));

//Resposta: funcionou ^^.

function propriedades(objeto) {
  for (let prop in objeto) {
    console.log(prop);
  }
}

var pessoa = { nome: "Pedro", altura: 1.7, idade: 24 };
propriedades(pessoa);
