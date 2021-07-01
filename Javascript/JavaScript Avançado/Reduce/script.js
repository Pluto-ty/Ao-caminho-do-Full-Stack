function novoAluno(nome, idade) {
   return { nome, idade };
}

let alunos = [
   novoAluno("Maria", 23),
   novoAluno("José", 33),
   novoAluno("Roberto", 45),
   novoAluno("Isabela", 28),
];

function idadeDaTurma(total, aluno) {
   return total + aluno.idade;
}

function nomeDaTurma(nome, aluno) {
   return nome + aluno.nome + ", ";
}

// Reduce vai reduzir todas as entradas de um array em uma única entrada. Nesse exemplo podemos ver ele somando todas as idades.
// Tanto como juntar todos os nomes em uma única string
console.log(alunos.reduce(idadeDaTurma, 0));
console.log(alunos.reduce(nomeDaTurma, "Todos os nomes aqui: "));
