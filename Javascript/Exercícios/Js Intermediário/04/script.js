/* ##Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
Agora, crie uma função que irá calcular o total de receitas e despesas e 
irá mostrar uma mensagem se a familía está com saldo positivo ou negativo, 
seguido do valor do saldo.
    
    
*/
/*

// Modo só pelo Js =============

let receitas = [200, 300, 500];
let despesas = [100, 300, 500];

function resultado() {
  let totalReceitas = 0;
  let totalDespesas = 0;
  for (i in receitas) {
    totalReceitas += receitas[i];
    totalDespesas += despesas[i];
  }
  return totalReceitas - totalDespesas;
}

console.log(resultado());
*/

/*
//Modo Js 2.0


let family = {
  incomes: [200, 300, 400],
  expenses: [200, 300, 300],
};

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses;
  const itsOk = total >= 0;

  let balanceText = "Negativo";
  if (itsOk) {
    balanceText = "Positivo";
  }

  console.log(`Seu Saldo é ${balanceText}: ${total.toFixed(2)}`);
}

calculateBalance();



*/

/*



// Modo pelo usuário

let receitas = [];
let despesas = [];

function enviar() {
  let dateRecipe = document.getElementById("dateRecipe");
  let dateExpenses = document.getElementById("dateExpenses");
  receitas.push(dateRecipe.value);
  despesas.push(dateExpenses.value);
  dateRecipe.value = "";
  dateExpenses.value = "";
}

function result() {
  let p = document.getElementById("paragráfo");

  let totalRecipe = 0;
  let totalExpenses = 0;
  for (i in receitas) {
    totalRecipe += Number(receitas[i]);
    totalExpenses += Number(despesas[i]);
  }

  p.innerHTML = `O total de Receitas foi ${totalRecipe} e de despesas ${totalExpenses}, então o saldo desse mês ficou R$ ${
    totalRecipe - totalExpenses
  } `;
}

function clearList() {
  let p = document.getElementById("paragráfo");
  receitas = [];
  despesas = [];

  p.innerHTML = "As Receitas e despesas foram resetadas.";
}
*/
