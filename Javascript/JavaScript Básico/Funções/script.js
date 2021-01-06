// função pode ser resumida em um bloco de comandos com um apelido. Feito e chamado quando necessitado podendo ser simples ou complexo.
// usando valores externos ou até fixos dentro do bloco de comandos. Como n1 e n2 que são externos.
// E retornando o valor da função com return como o exemplo abaixo.

function media(n1, n2) {
  var nota1 = n1;
  var nota2 = n2;
  var média = (nota1 + nota2) / 2;
  //   console.log(média);

  return média; // retorna a média como valor e entrega no local onde é chamado.
}

var resultado1 = media(7, 8);
var resultado2 = media(9, 9);

console.log("1° média " + resultado1 + ", segunda média " + resultado2);
