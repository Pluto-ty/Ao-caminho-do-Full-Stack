let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 1.5 * Math.PI;

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "blue";
ctx.arc(x, y, raio, inicio, fim); // um circulo aqui é numerado em 0 a 2 PI. Então o inicio é 0 e o fim é 2 PI. (podendo colocar 0.2 e etc)

ctx.fill();
ctx.stroke();
