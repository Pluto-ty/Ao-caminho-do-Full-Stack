// função Map

function novoAluno(nome, idade) {
   return { nome, idade };
}

let alunos = [
   novoAluno("Thiago", 24),
   novoAluno("Elisa", 24),
   novoAluno("Barbara", 24),
   novoAluno("Matheus", 24),
   novoAluno("Alexandre", 33),
];

function maps(array) {
   let newarray = [];
   for (let element of array) {
      newarray.push(`Aluno(a) ${element.nome} tem ${element.idade} anos.`);
   }
   return newarray;
}

console.log(maps(alunos));

//  Função reduce

function reduces(element, verifyType) {
   let newElement;
   if (verifyType == "") {
      newElement = "Os nomes são";
      for (let elements of element) {
         newElement += " " + elements.nome + ", ";
      }
   } else {
      newElement = verifyType;
      for (let elements of element) {
         newElement += elements.idade;
      }
   }

   return newElement;
}

console.log(reduces(alunos, ""));
