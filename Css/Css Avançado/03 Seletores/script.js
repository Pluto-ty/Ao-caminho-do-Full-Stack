// Usando os seletores no js.

// selecionando o primeiro elemento que tenha o atributo title.
let titulo = document.querySelector("[title]");

// seleciona todos os elementos que tenham o atributo title
let titulos = document.querySelectorAll("[title]");

//seleciona todos os elementos que tenho o atributo title com a silaba tu no atributo.
let tus = document.querySelectorAll("[title*=tu]");

//qualquer tipo de seletor que funciona no css funciona no js

console.log(titulo);
console.log(titulos);
console.log(tus);
