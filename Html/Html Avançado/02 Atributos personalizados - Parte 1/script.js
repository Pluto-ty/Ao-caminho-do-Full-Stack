//Pegando atributos pelo js e brincando um pouco.

// let img = document.getElementsByClassName("img");

// img[0].addEventListener("click", function () {
// Forma básica
// img[0].src = "/img/Igris.png";
//
//segunda forma de se mudar a img
// img[0].setAttribute("src", "/img/Igris.png");
//
//terceira forma
/*
  // let lastImage = img[0].getAttribute("src");
  // img[0].setAttribute("src", "/img/Igris.png");
  // console.log(lastImage);
  */
// img.setAttribute("cor", "vermelho"); // está errado de propósito. Mostrar que tem como criar atributos diferentes.
// });

//Ter um código/conteúdo em html e controlar ele pelo js
let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("num"));

let conteudo = "";

for (let i = 0; i < num; i++) {
  conteudo += "<li> " + i + " </li>";
}
lista.innerHTML = conteudo;
