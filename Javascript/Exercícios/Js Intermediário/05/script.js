/* ## Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça 
    a transformação de uma unidade para outra

    C° = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

/*

//Primeira forma
let result = document.getElementById("resultado");

function cForF() {
  let c = document.getElementById("celsius");
  let f = document.getElementById("fahren");
  f = Number((c.value * 9) / 5 + 32);

  result.innerHTML = `O valor de C° ${c.value} é igual a F° ${f} `;
  c.value = "";
}

function fForC() {
  let c = document.getElementById("celsius");
  let f = document.getElementById("fahren");
  c = Number(((f.value - 32) * 5) / 9);

  result.innerHTML = `O valor de F ${f.value} é igual a C° ${c} `;
  f.value = "";
}
*/

// transformDegree("50F");
// Segunda maneira, apenas pelo js.

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  //fluxo de error
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não Identificado");
  }

  //fluxo ideal, F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  //fluxo alternativo C -> F
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
  console.log(transformDegree("50F"));
  console.log(transformDegree("50Z"));
} catch (error) {
  console.log(error.message);
}
