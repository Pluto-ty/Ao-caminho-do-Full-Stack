let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.lineWidth = 3;
ctx.strokeStyle = "red";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.beginPath(); // com isso você pode criar uma nova linha em local diferente. Sem isso acabaria continuando onde parou da ultima ou todas as cores e
// demais que foram colocados na segunda iriam para a primeira também.

ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.fillStyle = "green"; // cor para preencher o espaço entra as linhas
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
ctx.closePath(); // fecha com uma linha no ponto inicial para criar um espaço fechado.
// ctx.fill(); //preencher o espaço entra as linhas. E aqui fica por baixo do stroke e percebe que a linha ficou mais grossa.
ctx.stroke();
ctx.fill(); // se depois do stroke ele fica por cima da borda e ela  não fica tão grossa.
