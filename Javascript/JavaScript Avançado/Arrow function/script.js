// Diferentes formas de arrow function

// Forma normal de uma função
// let dobro = function (x) {
//    console.log( 2 * x);
// };

// Primeira forma de uma arrow function
// let dobro = (x) => {
//    console.log(2 * x);
// };

// Não precisa de  () se for apenas um elemento
// let dobro = (x) => {
//    console.log(2 * x);

// Se for apenas retornar um valor. Não precisa das {} nem do return
// let dobro = (x) => 2 * x;

// console.log(dobro(9));

// únicos problemas de arrow function que ele não funciona com o this, nem se usado o bind para já selecionar com quem ele vai pegar o this.

let dobro = () => console.log(this);
let numero = {
   x: 8,
   d: dobro,
};

numero.d();
