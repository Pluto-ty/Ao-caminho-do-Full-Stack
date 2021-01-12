//colocando eventos dentro de outros e só ativando eles quando a página
//estiver totalmente carregada que também é um evento.

function loaded() {
  let t = document.getElementById("titulo");

  //t.onclick = mudarText;
  t.addEventListener("mouseover", mudarText);
  t.addEventListener("mouseout", mudarText2);
}

function mudarText() {
  this.innerHTML = "Novo Texto";
}

function mudarText2() {
  this.innerHTML = "Mouse fora do elemento";
}
