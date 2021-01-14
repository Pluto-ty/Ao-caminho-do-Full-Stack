//Mexendo com pai e filhos no JS
window.onload = function () {
  let id1 = document.getElementById("id1"); //pegando a div sendo pai de h1 e p.
  console.log(id1); //imprimindo o pai e seus filhos
  console.log(id1.children); //imprimindo apenas os filhos em forma de array[].
  console.log(id1.children[0]); //escolhendo o filho para ser imprimido
  let h1 = id1.children[0]; // colocando diretamente o filho em uma var para facilitar chamar ele quando quiser.
  console.log(h1); //e imprimindo ele separadamente.

  console.log(h1.parentElement);
  //aqui ja é o inverso do exemplo acima. Você consegue puxar/imprimir o pai
  // de um elemento junto com seus filhos.
  console.log(document.body.children); //imprimindo os filhos do body.
  console.log(document.body.children[0]); //imprimindo um filho especifico do body

  //Função para conseguir quando clicar em cima de um h1 escrever qual é o pai dele.
  let h2 = document.getElementsByTagName("h1"); //pega os 2 h1;
  for (let h of h2) {
    //um loop para imprimir os dois h1 e ativar a função qop quando clicados.
    console.log(h);
    h.addEventListener("click", qop);
  }

  function qop(e) {
    //essa function vai dizer qual target foi clicado e imprimir o pai dela.
    let t = e.target;
    console.log(t.parentElement);
  }
};
