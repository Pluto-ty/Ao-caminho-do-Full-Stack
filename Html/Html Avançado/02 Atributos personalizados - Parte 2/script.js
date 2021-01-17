//Forma mais "correta" e que simplifica nossa vida.
//Para atributos que nós criamos o ideal é que coloquemos data-(nome que quer colocar)="valor"; no html

let lista = document.getElementById("lista");

// let num = parseInt(lista.getAttribute("data-num")); //quando for na forma normal tem que colocar o nome inteiro

let num = parseInt(lista.dataset.num); // chamando pelo data que é mais simples.
lista.dataset.num = "4"; //modificar diretamente  objeto.
console.log(lista.dataset.num);

let id = parseInt(lista.dataset.id); // agora passando um número, mas o dataset transforma o atributo em string. Então ainda teria que usar o parseInt
let id2 = lista.getAttribute("data-id"); // mesmo aqui ele vai sair em string
console.log(id);
console.log(id2);

//Vimos outra forma de criar e acessar um atributo e as vezes mais eficiênte utilizando o dataset.
