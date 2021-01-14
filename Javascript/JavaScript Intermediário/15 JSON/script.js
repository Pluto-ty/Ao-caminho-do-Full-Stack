//Json é um formato de armazenamento do Js.
let a = {
  nome: "Igor",
  nota1ota: 8.5,
};

let b = JSON.stringify(a); //transforma um objeto em string para armazenar em algum local.

let a2 = '{"nome":"fabio", "nota":7.8}';
let b2 = JSON.parse(a2); //pega um objeto que foi transformado em string armazenada e transforma de volta pra um objeto.
console.log(a);
console.log(b);
console.log(a2);
console.log(b2);

console.log(b2.nota);
