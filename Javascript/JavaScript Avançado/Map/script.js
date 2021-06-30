function novoAluno(nome, idade) {
   return { nome, idade };
}

let alunos = [
   novoAluno("Maria", 23),
   novoAluno("José", 33),
   novoAluno("Roberto", 45),
   novoAluno("Isabela", 28),
];

const maps = {
   text(aluno) {
      return aluno.nome + " tem " + aluno.idade + " anos.";
   },
   aged(aluno) {
      return {
         nome: aluno.nome,
         idadeidade: aluno.idade + 5,
      };
   },

   agedWrong(aluno) {
      aluno.idade + 5;
      return aluno;
   },
};

// O maps é como se fosse um for() baseado no array principal ele cria um novo array totalmente novo mas que utiliza o array principal passando por todo o array e com isso você pode modifica-lo ou usar os elementos do array como quiser. Porém deve ter cuidado, nos primeiro exemplos estão funcionando perfeitamente, porém no terceiro ele muda diretamente a propriedade de alunos, em vez de imprimir uma cópia modificada como nos outros dois exemplos.

console.log(alunos.map(maps.text));
console.log(alunos);
