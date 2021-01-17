//Criando uma animação no js com loop.
//O loop chama a função para desenhar o circulo até chegar no tamanho final e o circulo fica apagando o anterior.
let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let circle = {
  //criando um objeto para ser mais fácil
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 0 * Math.PI,
};

function drawCircle(c) {
  //toda vez que desenha o circulo cria um novo background para apagar o anterior e n ficar aquele efeito de arrastado/borrado.
  ctx.beginPath();
  ctx.rect(0, 0, 500, 500);
  ctx.fillStyle = "beige";
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.fillStyle = "blue";
  ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);

  ctx.fill();
  ctx.stroke();
}

setInterval(function () {
  //loop vai ficar chamando a função pra desenhar o circulo e toda vez um pouco maior até chegar no tamanho final.
  if (circle.fim < 2 * Math.PI) {
    circle.fim += 0.3;
    circle.x += 3;
  }
  drawCircle(circle);
}, 100);
