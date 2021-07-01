var aluno1 = {
   matricula: 1234,
   nome: "Marcos",
   telefone: 91910522,
   cidade: "Vitória",
};

var aluno2 = {
   matricula: 1232,
   nome: "Apolo",
   telefone: 91910522,
   cidade: "Vitória",
};

var aluno3 = {
   matricula: 1232,
   nome: "Cristina",
   telefone: 91910522,
   cidade: "Vitória",
};

var aluno4 = {
   matricula: 1232,
   nome: "Cristal",
   telefone: 91910522,
   cidade: "Vitória",
};

// Cada elemento colocado dentro do {} tem que ser um nome que tenha dentro do objeto para conseguir copia-lo e cada elemento vira uma variável distinta/separada.
// var { matricula, nome } = aluno;
// console.log(matricula);
// console.log(nome);

// Usando o Spread Operator podemos copiar o objeto inteiro do msm modo sem cair na referência e sim uma cópia independente.
// var { ...copia } = aluno;
// copia.matricula = 53141231;

// console.log(copia);
// console.log(aluno);

// Você pode tirar e separar alguns elementos específicos e depois deixar o resto dos elementos dentro de um único elemento. Fazendo assim o elemento que tiver o ... terá o resto dos elemento do objeto porém sem os que já foram colocados/copiados.
// var { nome, matricula, ...resto } = aluno;

// console.log(nome);
// console.log(matricula);
// console.log(resto);

// Ao contrário de um objeto que você chama o elemento pelo nome, em um array a posição é priorizada. Então mesmo que coloque o nome joao como primeiro, o aluno do elemento joao vai ser o marcos pq ele que está na primeira posição que colocou com o nome de joão.
var alunos = [aluno1, aluno2, aluno3, aluno4];

var [joao, marcos, ...resto] = alunos;

console.log(joao);
console.log(marcos);
// cria um array com 2 objetos
console.log(resto);
