let usuarios = ["Adriano", "Roberto", "India"];

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

// O async faz com que a função pare algumas funcionalidades com await até a promisse envolvida na função termine o que tem que fazer. Ai as funcionalidades com await disparam.
// o await dá erro se a função não tiver async. E as funcionalidades funcionam em ordem normal se não houver nenhuma com await.
async function executar() {
   await inserirUsuario("Igor");
   listaUsuarios();
}

executar();
