//Escreva uma função que receba um objeto e imprima suas propriedades

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

//Resposta:

// function propriedades(object){
//   for(let propriedade in object){
//       console.log(propriedade)
//   }
// }

// var pessoa = {nome: "José", idade:35, altura: 1.80}

// propriedades(pessoa)
