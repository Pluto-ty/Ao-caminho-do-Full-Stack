// O Spread Operator seria o ... que usamos para fazer a cópia de array e objetos.
// O spread operator serve muito bem para casos que você que repassar valores de um array ou objeto para outro porém há muitos elementos então se usa ... para puxar todo o array ou objeto.
var pessoa = {
   name: "José Silva",
   idade: 32,
};

var contato = {
   telefone: 8765432,
   email: "jose@gmail.com",
};

var copia = { ...pessoa, cidade: "Rio de Janeiro", ...contato };
copia.idade = 80;

console.log(pessoa);
console.log(copia);

var notas_turma1 = [10, 8, 4, 3];

var notas_turma2 = [7, 2, 6, 9];

var todas_notas = [...notas_turma1, ...notas_turma2];

console.log(todas_notas);
