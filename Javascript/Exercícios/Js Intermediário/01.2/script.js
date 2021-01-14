//Crie uma lista de tarefas que tenha um input para receber a tarefa, e armazene na memória utilizando o LocalStorage.
//Básico sem o delete.
/*
var ul = document.getElementById("ul");
var saveLoad = localStorage.getItem("lista");
onload = function () {
  ul.innerHTML += save;
};

function enviar() {
  let text = document.getElementsByClassName("i-text");
  ul.innerHTML += "<li>" + text[0].value + "</li>";
}
function limpar() {
  ul.innerHTML = "";
}
*/
//Completo com delete funcionando.
onload = load();
function load() {
  //função para carregar o localstorage e pegar o array dos dados salvos e transformar na lista.
  let list = document.getElementById("list");
  let arrayList = JSON.parse(localStorage.getItem("jsonList"));

  list.innerHTML = "";

  for (let item in arrayList) {
    // loop para criar cada linha da lista item por item.
    let task = document.createElement("li");
    let checkbox = document.createElement("input");

    task.setAttribute("onclick", "lineThrough(this)");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", arrayList[item]);
    checkbox.setAttribute("name", "items");
    checkbox.setAttribute("onclick", "lineThrough(this.parentElement)");
    let text = document.createTextNode(
      `${parseInt(item) + 1} - ${arrayList[item]} `
    );
    task.appendChild(checkbox);
    task.appendChild(text);
    list.appendChild(task);
  }
}

//Cria os elementos da lista
function createTask() {
  let newItem = document.getElementById("item").value; //conteúdo do input
  let existentList = JSON.parse(localStorage.getItem("jsonList")); //carrega se existe uma lista

  let arrayList = [];

  if (existentList != null) {
    //vai adicionar ao arraylist apenas se houver um localstorage
    arrayList = existentList;
  }

  if (newItem != "") {
    arrayList.push(newItem);
    localStorage.setItem("jsonList", JSON.stringify(arrayList)); //salva na lista e ativa o load para imprimir o novo li.
    load();
    document.getElementById("item").value = ""; //limpa o conteúdo do input.
  }
}

function deleteTask() {
  // deleta a task selecionada
  let items = document.getElementsByName("items");

  let newList = [];

  for (let item in items) {
    if (items[item].checked == false) {
      newList.push(items[item].value);
    }
  }
  //depois de colocar os itens não selecionados na nova lista ele salva e chama novamente a função load para imprimir só os n selecionados. (deletando os selecionados)
  localStorage.setItem("jsonList", JSON.stringify(newList));
  load();
}
//verifica se está selecionado
function checked(event) {
  if (event.checked == true) {
    event.parentElement.classList.add("lineThrough");
  } else if (event.checked == false) {
    event.parentElement.classList.remove("lineThrough");
  }
}

function lineThrough(event) {
  let checkbox = event.children[0];
  checkbox.checked != true
    ? (checkbox.checked = true)
    : (checkbox.checked = false);
  checked(checkbox);
}

function clearList() {
  //limpar a lista
  localStorage.clear();
  load();
}
