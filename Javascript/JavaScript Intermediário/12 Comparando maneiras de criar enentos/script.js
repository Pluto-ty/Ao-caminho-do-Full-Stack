//Comparando maneiras de criar evento.

function f(e) {
  //maneira simples.
  console.log("test"); //console normal
  console.log(e); // vai passar o h1 como nele está this.
  console.log(this); // quando n for diretamente o elemento como no e. Ele vair retornar o window.
}

function f1(e) {
  //maneira com outro evento que só inicia quando a página estiver totalmente carregada.
  console.log("test f1");
  console.log(this); // passou o elemento pq o elemento está chamando ele dentro/diretamente (h1)
  console.log(e); //passa o evento do mouse pq é o que veio quando chamado ("click");
  console.log(e.target); //passa o target do mouse no caso h1.
}

window.onload = function () {
  //evento ativado quando a página stiver 100% carregada.

  let h1 = document.getElementsByTagName("h1")[0]; //pegando o elemento h1 e passando pro let h1

  h1.addEventListener("click", f1); //utilizando o let h1 para criar um evento com primeiro elemento que é o evento e o segundo a função ativada pelo evento
};
