let usuarios = ["Adriano", "Roberto", "India"];

// o callback é quando chama uma função como argumento para ser executada após algum tempo ou algo acontecer.
// Para conseguirmos fazer alguma coisa que não é em tempo real, no caso asynchrono(que não tem sincronia e não sabe quanto tempo vai levar).

function inserirUsuario(nome, callback) {
   setTimeout(() => {
      usuarios.push(nome);
      callback();
   }, 1000);
}

function listaUsuarios() {
   console.log(usuarios);
}

inserirUsuario("igor", listaUsuarios);
