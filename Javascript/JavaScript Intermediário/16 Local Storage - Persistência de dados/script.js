//Local Storage:

// localStorage.setItem("nome", "Igor"); //armazena algum dado na memória do navegador. Primeiro valor - uma chave/nome/ Segundo valor - uma string que vai ser o valor que vai armazenar.

// localStorage.getItem(); //pega um dado armazenado no navegador

// localStorage.removeItem(); //remove um dado armazenado no navegador e fica inacessível depois de apagado.

// localStorage.setItem("nome", "Igor");
// let n = localStorage.getItem("nome");
// console.log(n);

// localStorage.removeItem("nome");

//Função para escrever em um input algo e ser escrito automaticamente no h1. E mesmo se recarregar a página o conteúdo do h1 salvo no localStorage persiste lá.
/*
onload = function () {
  let nome = localStorage.getItem("nome");
  let h1 = document.getElementById("nome");
  h1.innerHTML = nome;
};

function atualizar(element) {
  let valor = element.value;
  console.log(valor);

  let h1 = document.getElementById("nome");
  h1.innerHTML = valor;

  localStorage.setItem("nome", valor);
}
*/
//mostrando como seria guardar dados tanto em string e números. E retorna-los normalmente.

let a = { nome: "Igor", n1: 7.3 };

localStorage.setItem("aluno", JSON.stringify(a));

let b = localStorage.getItem("aluno");
console.log(JSON.parse(b));
//imprimir só os valores
let b2 = JSON.parse(b);
for (let i in b2) {
  console.log(b2[i]);
}

localStorage.clear();
