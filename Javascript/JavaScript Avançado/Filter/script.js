function novoAluno(nome, idade) {
   return { nome, idade };
}

let alunos = [
   novoAluno("Maria", 23),
   novoAluno("José", 33),
   novoAluno("Roberto", 45),
   novoAluno("Isabela", 28),
];

let jogadoras = [
   novoAluno("Ingrid", 33),
   novoAluno("Angela", 22),
   novoAluno("Natália", 29),
   novoAluno("Mitsumi", 24),
];

const filters = {
   menorDe30(aluno) {
      return aluno.idade < 30;
   },
   maiorDe30(aluno) {
      return aluno.idade > 30;
   },
};

// Todo array tem uma função chamada filter. Que basicamente filtra um array tirando todos os elementos que não se encaixam nas medidas que você colocar, e retorna um array com esses array filtrados.
console.log(jogadoras.filter(filters.menorDe30));

// Isso seria se tivessemos que fazer a função filter na mão.
function filtro(callback) {
   let alunosFiltrados = [];
   for (let aluno of this) {
      if (callback(aluno)) {
         alunosFiltrados.push(aluno);
      }
   }
   return alunosFiltrados;
}

alunos.filtro = filtro;
jogadoras.filtro = filtro;

console.log(jogadoras.filtro(filters.maiorDe30));
console.log(alunos.filtro(filters.maiorDe30));
