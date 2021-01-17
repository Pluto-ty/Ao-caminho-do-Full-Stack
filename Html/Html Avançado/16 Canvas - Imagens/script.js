let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

//Primeira forma de "desenhar" uma imagem pelo canvas.

// let img = document.getElementById("image");
// ctx.drawImage(img, 20, 20, 300, 300);

//Segunda forma. // Cria a imagem aqui pelo js e é necessário criar uma função
// para quando a imagem carregar ai desenhar a imagem. Pq se não ela provavelmente não vai ser desenhada.

let img2 = new Image();
img2.src = "./Takehaya.jpg";
img2.onload = desenharImg;

function desenharImg() {
  ctx.drawImage(img2, 20, 20, this.naturalWidth / 5, this.naturalHeight / 5); //this.naturalWidth e Height pega a largura e altura original do arquivo.
  //o this.naturalWidth/Height só funciona pq a variável ja tem a imagem se não ele n funcionaria
  // no caso se tentasse pelo primeiro método de chamar a imagem.
}
