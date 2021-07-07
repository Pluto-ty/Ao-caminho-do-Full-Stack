// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAi56fSzb1XrkywdWustuy6EEz1eqTVp9g",
   authDomain: "aprendendo-firebase-3644e.firebaseapp.com",
   projectId: "aprendendo-firebase-3644e",
   storageBucket: "aprendendo-firebase-3644e.appspot.com",
   messagingSenderId: "641686661029",
   appId: "1:641686661029:web:52c1888b331156e8b1ea4c",
   measurementId: "G-SV6F0EJDQ8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

// =========================== Lendo documentos ===========================

// =========== Ler todosos dados de uma coleção. ===========
// db.collection("turmaA")
//    .get()
//    .then((snapshot) => {
//       snapshot.forEach((doc) => {
//          let aluno = doc.data();
//          console.log(aluno.Aluno1.Nome);
//       });
//    });

// =========== Ler um registro específico. ===========
// let docRef = db.collection("turmaA").doc("Alunos");

// docRef.get().then((doc) => {
//    let aluno = doc.data();
//    console.log(aluno.Aluno1.Nome);
// });

// =========================== Buscando Documentos ===========================

// Where Usado para procurar elementos dentro dos docs, podendo procurar strings, números entre outros.
// Para procurar pode se usar alguns sinais de comparação. < <= > >= == (não se pode usar !=). Para string o < <= >= >, usa o alfabeto para comparar.
// E não pode procurar em dois campos diferentes ao mesmo tempo. Apenas um por procura.
// db.collection("turmaA")
//    .where("Sobrenome", "==", "Pereira")
//    .get()
//    .then((snapshot) => {
//       snapshot.forEach((doc) => {
//          let aluno = doc.data();
//          console.log(
//             "Nomes com sobrenome Pereira: " + aluno.Nome,
//             aluno.Sobrenome
//          );
//       });
//    });

// db.collection("turmaA")
//    .where("Nome", "<", "Silva")
//    .get()
//    .then((snapshot) => {
//       snapshot.forEach((doc) => {
//          let aluno = doc.data();
//          console.log("Nome menor que silva: " + aluno.Nome, aluno.Sobrenome);
//       });
//    });

// db.collection("turmaA")
//    .where("Nome", ">", "Silva")
//    .get()
//    .then((snapshot) => {
//       snapshot.forEach((doc) => {
//          let aluno = doc.data();
//          console.log("Nome maior que silva: " + aluno.Nome, aluno.Sobrenome);
//       });
//    });

// db.collection("turmaA")
//    .where("Nome", ">", "André")
//    .where("Nome", "<", "Thyago")
//    .get()
//    .then((snapshot) => {
//       snapshot.forEach((doc) => {
//          let aluno = doc.data();
//          console.log(
//             "Nome maior que André e menor que Thyago: " + aluno.Nome,
//             aluno.Sobrenome
//          );
//       });
//    });

// =========================== Criando e alterando documentos ===========================

const TURMA = "turmaA";

// Add() adiciona um novo elemento com id gerado aleatóriamente no documento selecionado.

// db.collection(TURMA)
//    .add({
//       nome: "Marcos",
//       sobrenome: "Santos",
//       notas: {
//          nota1: 9.6,
//          nota: 6.4,
//       },
//    })
//    .then((doc) => {
//       console.log("Document inserido com sucesso:", doc);
//    })
//    .catch((err) => {
//       console.log(err);
//    });

// colocando um doc() não existente ele cria um novo doc com esse nome.
// set você pode usar tanto para adicionar um elemento ou modifica-li. Porém para modifica-lo você precisa colocar todos os elementos dentro dele, se não ele apagará tudo e deixará apenas o que você colocar no set.
// Se o documento não existe ele cria e se já existe ele modifica.
//  Exemplo: Se tiver nome, idade, peso. E tentar mudar com set apenas o peso, ele apagará o nome e idade e deixará apenas o peso.

// db.collection(TURMA)
//    .doc("AlunoNovo")
//    .set({
//       nome: "Mariana",
//       sobrenome: "Santos",
//       notas: {
//          nota1: 6,
//          nota: 6.4,
//       },
//    })
//    // o set não retorna nenhum objeto como o add. Então não podemos imprimilo com console.log()
//    .then(() => {
//       console.log("Document inserido com sucesso:");
//    })
//    .catch((err) => {
//       console.log(err);
//    });

// Porém se for usar o set e não digitar todos os elementos para sobreescrever apenas um elemento. Você pode utilizar o merge: true. Ele basicamente só sobreescreve os elementos digitados, deixando os outros intactos.

// db.collection(TURMA)
//    .doc("Aluno3")
//    .set(
//       {
//          nome: "André",
//          sobrenome: "Pereira",
//          notas: {
//             nota1: 6,
//             nota: 6.4,
//          },
//       },
//       { merge: true }
//    )

//    .then(() => {
//       console.log("Document inserido com sucesso:");
//    })
//    .catch((err) => {
//       console.log(err);
//    });

// Porém para não termos a preocupação de apagar algum dado usando set, temos o update(), que ele sobreescreve os elementos colocados sem ter que colocar o merge: true;
//  O update também pode criar novos elementos.

// db.collection(TURMA)
//    .doc("Aluno3")
//    .update({
//       faltas: 9,
//       Sobrenome: "Pereira",
//       // Para objetos temos que usar "" para chamalos. Mas podemos fazer isso com qualquer elemento também se preferirmos.
//       "notas.nota1": 4,
//       // Para arrays não podemos colocar array= ["Batata", "Cenoura"], ele sempre vai apagar o array inteiro e colocaros novos.
//       // Para adicionar novos elementos no array ou remove-los. Usamos : arrayUnion para adicionar, arrayRemove para remover.
//       cidades: firebase.firestore.FieldValue.arrayUnion(
//          "São Paulo",
//          "Pernambuco"
//       ),
//       cidades: firebase.firestore.FieldValue.arrayRemove("São Paulo"),

//       // Temos também o increment que seria para adicionar um valor numérico em um elemento. Somandoou subtraindo dependendo do valor colocado.
//       faltas: firebase.firestore.FieldValue.increment(-2),
//    })

//    .then(() => {
//       console.log("Document inserido com sucesso:");
//    })
//    .catch((err) => {
//       console.log(err);
//    });

// =========================== On Snapshot (Atualizando em tempo real)===========================

//  O onSnapshot basicamente é um observador que quando os dados que ele está vigiando são modificados, ele ativa. Como exemplo quando alguém fica online em um chat e todos os outros membros desse chat recebem uma notificação que esse usuário ficou online.

// let docRef = db.collection(TURMA).doc("Alunos2");

// docRef.onSnapshot((doc) => {
//    console.log(doc.data());
// });

// db.collection("turmaA")
//    .where("notas.nota1", ">", 5)
//    .onSnapshot((snapshot) => {
//       snapshot.forEach((doc) => {
//          let aluno = doc.data();
//          console.log(aluno.nome);
//       });
//    });

// =========================== Apagando campos e documentos ===========================

// O delete basicamente deleta o campo inteiro do doc.
// E para apagar o doc inteiro você basicamente coloca delete no lugar do update
// db.collection(TURMA)
// .doc("Aluno3")
// .update({
//    cidades: firebase.firestore.FieldValue.delete(),
// })
// .delete()
// .then(() => {
//    console.log("Document inserido com sucesso:");
// })
// .catch((err) => {
//    console.log(err);
// });

// =========================== Criando Usuários no Firebase ===========================
