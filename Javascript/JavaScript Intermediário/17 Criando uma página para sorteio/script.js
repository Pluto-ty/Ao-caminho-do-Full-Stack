//criar um mini sorteio.
function sortear() {
  let pessoas = ["Igor", "Jose", "Marcos", "Pamela"];
  let np = pessoas.length;
  let ns = Math.floor(Math.random() * np);

  document.getElementById("d").innerHTML =
    "O número vencedor é " + ns + " e a pessoa sortuda é " + pessoas[ns];
}
