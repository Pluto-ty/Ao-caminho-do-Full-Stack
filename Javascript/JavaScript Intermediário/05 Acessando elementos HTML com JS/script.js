var p3 = document.getElementById("p3"); //pegar pelo js no html o elemento com id p3 e trazer pro js.

var p2 = document.getElementsByClassName("paragrafo"); //pegar os elementos com a class paragrafo

var p = document.getElementsByTagName("p"); //desse jeito peta todos os elementos da tag p.

console.log(p2); //como é uma class ele imprimi em forma de array para múltiplos elementos
console.log(p3); // para ids ele imprimi normalmente pois id são para elementos únicos.
for (let ps of p) {
  //um for para imprimir todos os ps em forma de string normal. Se fosse para imprimir o p normalmente, ele sairia em array.
  console.log(ps);
}

console.log(p); //como aqui, que saiu como array por que são mais de um elemento.
