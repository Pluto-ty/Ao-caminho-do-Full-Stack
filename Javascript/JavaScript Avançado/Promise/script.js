let usuarios = ["Adriano", "Roberto", "India"];

// A promisse é tipo um callback porem mais detalhado, tendo a parte do resolve para se der tudo certo e a reject se dar algum erro no processo.
function inserirUsuario(nome) {
   let promise = new Promise(function (resolve, reject) {
      setTimeout(() => {
         usuarios.push(nome);
         let error = false;
         if (!error) {
            resolve();
         } else {
            reject({ msg: "Error de qualquer coisa" });
         }
      }, 1000);
   });
   return promise;
}

function listaUsuarios() {
   console.log(usuarios);
}

// o then é para quando a a aplicação funcionar normalmente então colocamos o que queremos rodar, no caso vai rodar o listaUsuarios, e o catch vai ser para o erro e ai rodamos o erro.
inserirUsuario("igor")
   .then(listaUsuarios)
   .catch((error) => {
      console.log(error.msg);
   });
