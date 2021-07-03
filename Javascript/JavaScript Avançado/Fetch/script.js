let url = "https://api.github.com/users/xiaotian/repos";

// Aqui Basicamente aprendemos que com o fetch podemos pegar um valor na internet/API, e utilizar esse valor para a nossa aplicação.
fetch(url)
   .then((res) => {
      return res.json();
   })
   .then((data) => {
      console.log(data);
   });
