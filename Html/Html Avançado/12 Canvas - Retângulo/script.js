//Criando retângulos.
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

//primeiro estilo de retângulo
// ctx.fillStyle = "blue"; //cor do retângulo.
// ctx.fillRect(10, 10, 100, 200); // (x,y, width,height) posição e tamanho do retângulo

//Segundo tipo de retângulo
// ctx.strokeStyle = "red";
// ctx.strokeRect(10, 10, 100, 200);

//Terceiro estilo de retângulo

ctx.rect(10, 10, 100, 200); //seta o tamanho

//seta as cores
ctx.fillStyle = "blue";
ctx.lineWidth = 4;
ctx.strokeStyle = "red";
//e faz os dois preencherem o tamanho setado.
ctx.fill();
ctx.stroke();

//cria um retângulo que limpa uma determinada área.
ctx.clearRect(20, 20, 30, 30);
