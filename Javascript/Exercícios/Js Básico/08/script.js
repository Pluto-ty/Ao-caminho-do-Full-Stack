//Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.

var dia = 05;
var mês = 04;
var ano = 2000;

function date(d, m, a) {
  var obj = {
    dia: d,
    mes: m,
    ano: a,
  };

  return obj;
}

var data = date(dia, mês, ano);

console.log(data);
