//Crie uma lista de tarefas que tenha um input para receber a tarefa, e
//armazene na memória utilizando o LocalStorage.
var div = document.getElementById("div");
onload = function () {
  let saveLoad = localStorage.getItem("lista");
  div.innerHTML = "<h2> Teste: </h2>";
  div.innerHTML = JSON.parse(saveLoad);
};

function enviar() {
  let text = document.getElementById("text");
  div.innerHTML += "<li>" + text.value + "</li>";
  let save = div.innerHTML;
  localStorage.setItem("lista", JSON.stringify(save));
}

function limpar() {
  div.innerHTML = "<h2> Teste: </h2>";
}
