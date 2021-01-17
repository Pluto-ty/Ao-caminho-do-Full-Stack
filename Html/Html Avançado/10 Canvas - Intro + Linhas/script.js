//Mostrando como usar o canvas para desenhar uma linha e como funciona.
let tela = document.getElementById("canvas");

let ctx = tela.getContext("2d"); // cria um contexto que a tela vai ser 2d para desenhar e etc.

ctx.moveTo(0, 0); //seta onde o "pincel" vai começar
ctx.lineTo(250, 250); //escolhe pra até onde desenha uma linha e depois para.
ctx.lineTo(500, 0); // pegando de onde parou cria outra linha.
// ctx.lineWidth = 5; // engrossa a linha.
ctx.strokeStyle = "#333"; // muda o estilo/cor do stroke.
ctx.stroke(); //para finalizar e dar espessura pra linha. Quanto mais stroke colocar mais grossa as linhas ficaram.
//não renderiza algo que estiver depois do stroke.
