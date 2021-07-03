let nome = "";

// Try catch serve para tratar possíveis erros na aplicação, deixando os elementos com possíveis erros dentro dele
// e colocando o que imprimir ou mostrar se acontecer o erro e n deixando a aplicação travar por completo por causa de um único erro.

// Se ainda sim quer que um erro pare toda a aplicação coloque o throw fora do try cath e se caso aconteça o erro ele vai parar o resto da aplicação. O throw pode ficar dentro do try cath para avisar sobre o erro junto com o catch com alguma mensagem para localizar melhor o erro.

if (nome == "") {
   throw "O nome não pode estar vazio";
}

try {
   // if (nome == "") {
   //    throw "O nome não pode estar vazio";
   // }
   console.log(nome);
} catch (err) {
   console.log("Houve um erro", err);
} finally {
   console.log("Boa Noite");
}

//  O finally é que independente se acontecer o erro ou não ele vai executar no caso imprimir Boa noite.
