var numero1 = 5;
let numero2 = 6;
const numero3 = [];
//Const - Apenas para leitura, um dado/conteúdo fixo, pode ser modificada mas n pode ser alterado ou retribuída(colocar algo novo no lugar da anterior).
//porem pode adicionar e modificar valores em arrays[] com .push(8) ou em objetos {} com .propriedade = "igor"/2...
numero3.push(7);

console.log(numero1);
console.log(numero2);
console.log(numero3);

// var - variável global , pode ser acessada em qualquer local do código. Pode ser modificada, alterada e retribuída
// let - variável local, só pode ser acessada no bloco {} como for,while,switch... em que está/foi criada, fora disso não é possível acessa-la.
// e pode ser modificada,alterada ou retribuída como uma var.
// Cons - variável local como let,mas  tem valor fixo normalmente para leitura, pode ser modificada ou adicionar valores quando for [array] ou {objetos},
// mas não se pode retribuír(mudar valor) em nenhum caso: números,array e etc(só pode ser atribuído uma vez na hora da criação).
// Usar mais let e const para acontecer menos erros e ser mais fácil de corrigi-los.
