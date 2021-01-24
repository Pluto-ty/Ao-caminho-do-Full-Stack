/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema 
numérico para sistema de notas em caracteres tipo A B C

* de 90 pra cima - A*
* entre 80 - 89  - B*
* entre 70 - 79  - C*
* entre 60 - 69  - D*
* menor que 60   - F*

*/
let input = document.getElementById("input");
let p = document.getElementById("paragráfo");
function nota() {
  let valor = Number(input.value);

  let notaA = valor >= 90 && valor <= 100;
  let notaB = valor >= 80 && valor <= 89;
  let notaC = valor >= 70 && valor <= 79;
  let notaD = valor >= 60 && valor <= 69;
  let notaF = valor >= 0 && valor <= 59;

  if (notaA) {
    p.innerHTML = " A nota do aluno é A";
  } else if (notaB) {
    p.innerHTML = " A nota do aluno é B";
  } else if (notaC) {
    p.innerHTML = " A nota do aluno é C";
  } else if (notaD) {
    p.innerHTML = " A nota do aluno é D";
  } else if (notaF) {
    p.innerHTML = " A nota do aluno é F";
  } else {
    p.innerHTML = "Algum erro com a nota digite Novamente";
  }
}
