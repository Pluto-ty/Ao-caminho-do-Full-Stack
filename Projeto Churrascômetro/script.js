// Carne - 400 gr por pessoa + de 6 horas - 650 gr
//Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
//Refrigerante/água - 1000 ml por pessoa + 6 horas - 1500ml

// crianças valem por 0,5.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");
// console.log(inputAdultos, inputCriancas, inputDuracao);

function calcular() {
  let adultos = inputAdultos.value;
  let crianças = inputCriancas.value;
  let duração = inputDuracao.value;

  let qntTotalCarne =
    carnePP(duração) * adultos + (carnePP(duração) / 2) * crianças;
  let qntTotalCerveja = cervejaPP(duração) * adultos;
  let qntTotalBebidas =
    bebidasPP(duração) * adultos + (bebidasPP(duração) / 2) * crianças;

  resultado.innerHTML = "<h2 class='h2-resultado'>Você vai Precisar de: </h2>";
  resultado.innerHTML += `<img src="img/meat.png" alt="meat" class = "img-resultado" />  <p class = "p-resultado"> ${
    qntTotalCarne / 1000
  } Kg de Carne </p> </br>`;
  resultado.innerHTML += `<img src="img/beer.png" alt="beer" class = "img-resultado" /> <p class = "p-resultado"> ${Math.ceil(
    qntTotalCerveja / 355
  )} Latas de Cerveja </p> </br>`;
  resultado.innerHTML += ` <img src="img/water.png" alt="Water"  class = "img-resultado" /> <p class = "p-resultado"> ${Math.ceil(
    qntTotalCarne / 2000
  )} Pet's de 2l</p>`;
}

function carnePP(duração) {
  if (duração >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duração) {
  if (duração >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duração) {
  if (duração >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
