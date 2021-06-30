// Resumindo

//  Valores primitivos como string, números, boolean.
// Atribuição por valor, faz uma cópia do elemento original, e qualquer alteração na cópia não vai refletir no original.

// let num1 = 22;
// let num2 = num1;
// num2 + 2;
// console.log(num1, num2);

// Objetos / Array
// Atribuição por referência, não faz cópia, é como se desse um novo apelido para o objeto original. Qualquer modificação no novo elemento altera também o original.

// ========== ARRAYS ============
// Modo errado ( acaba modificando o elemento original.)
// let turmaA = ["Igor", "Isabela", "Jenifer"];

// let turmaB = turmaA;

// turmaB.push("João");

// console.log(turmaA);
// console.log(turmaB);

// Modo correto com slice() que permite que você corte uma array e pegue um pedaço dele mas se deixarmos vázio ele traz o array inteiro. Assim não sendo mais por referência.
// let turmaA = ["Igor", "Isabela", "Jenifer"];

// let turmaB = turmaA.slice();

// turmaB.push("João");

// console.log(turmaA);
// console.log(turmaB);

//Outra maneira

// let turmaA = ["Igor", "Isabela", "Jenifer"];

// let turmaB = [...turmaA];

// turmaB.push("João");

// console.log(turmaA);
// console.log(turmaB);

// ========== OBJETOS ============

// Com Object.assign()

let alunoA = { nome: "Igor", idade: 15 };

let alunoB = Object.assign({}, alunoA);

alunoB.idade = 25;

console.log(alunoA.idade);
console.log(alunoB.idade);

// Ou com forma parecida com array utilizando ...

let alunoA = { nome: "Igor", idade: 15 };

let alunoB = { ...alunoA };

alunoB.idade = 25;

console.log(alunoA.idade);
console.log(alunoB.idade);
