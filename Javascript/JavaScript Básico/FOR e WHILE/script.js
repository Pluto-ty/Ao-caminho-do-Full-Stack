// While normalmente para loops que n se tem certeza quando vai acabar ou coisas parecidas
var numero = Math.random() * 100;

while (numero < 90) {
  console.log(numero);
  numero = Math.random() * 100;
}

console.log(numero);
console.log("Acabou");

// for para um loop mais fechado sabendo o final/resultado para ele parar.
var numero2 = 5;
for (var i = 0; i < numero2; i++) {
  console.log(i);
}

// Ainda sim se pode usar os dois das duas formas mas são usados normalmente assim.
