var nota1 = 9;
var nota2 = 7;

var média = (nota1 + nota2) / 2;

var conceito = "";

if (média >= 8) {
  conceito = "Ótimo";
} else if (média >= 6) {
  conceito = "Bom";
} else {
  conceito = "Regular";
}

console.log(média);
console.log(conceito);

// conceito = "erro";
switch (conceito) {
  case "Ótimo":
    console.log("Parabéns, você está indo muito bem");
    break;
  case "Bom":
    console.log("Continue assim, está quase perfeito");
    break;
  case "Regular":
    console.log("Estude mais!");
    break;
  default:
    console.log("Aconteceu algum erro");
    break;
}
