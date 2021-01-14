var h = document.getElementById("h1");

function randomColor() {
  let n = Math.round(Math.random() * 3);
  switch (n) {
    case 0:
      h.style.color = "blue";
      break;
    case 1:
      h.style.color = "red";
      break;
    case 2:
      h.style.color = "yellow";
      break;
    case 3:
      h.style.color = "green";
  }
}

function mudarTexto() {
  h.innerHTML = "Novo Título";

  //setTimeout(mudarCor, 2000); //executa apenas uma vez. Passa primeiro o elemento a executar como ua função e depois o tempo em milissegundos 2000( 2 segundos)

  //setInterval(randomColor, 1000); //cria um intervalo para fazer/ativar uma ação/function.
}

var interval;
var timer;
function iniciar() {
  interval = setInterval(randomColor, 1000);
  timer = setTimeout(3000, mudarTexto);
  //se por algum motivo colocar um timeout e quiser parar ele você pode com o clearInterval e ele para na metade do caminho e não ativa.
}

function parar() {
  clearInterval(interval);
}
