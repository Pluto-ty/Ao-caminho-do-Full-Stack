//Brincando com a tag audio e criando um próprio player para o audio.

//Criar os icones.
//  redimensionar e posicionar eles.
// Criar função dos botões.
// Pronto o básico.
// Fazer uma lista de 5 músicas e poder escolher entra as 5 qual música o player vai tocar.

let btn_play = document.getElementById("play-pause");
let btn_volume = document.getElementById("volume-mute");
let music = document.getElementById("music");
let time = document.getElementById("musicTime");
let barProgress = document.getElementById("line");

function play_pause() {
  let verify = btn_play.getAttribute("src");

  if (verify == "./img/play.png") {
    btn_play.setAttribute("src", "./img/pause.png");
    music.play();
    musicTime;
  } else {
    btn_play.setAttribute("src", "./img/play.png");
    music.pause();
  }
}

function volume_mute() {
  let verify = btn_volume.getAttribute("src");
  if (verify == "./img/volume.png") {
    btn_volume.setAttribute("src", "./img/mute.png");
    music.volume = 0;
  } else {
    btn_volume.setAttribute("src", "./img/volume.png");
    music.volume = 1;
  }
}

function test(s) {
  function duas_casas(numero) {
    if (numero <= 9) {
      numero = "0" + numero;
    }
    return numero;
  }
  minuto = Math.floor((s % 3600) / 60);
  segundo = duas_casas(Math.floor((s % 3600) % 60));
  formatado = minuto + ":" + segundo;
  return formatado;
}

function musicTime() {
  time.innerHTML = test(music.currentTime) + " / " + test(music.duration);
  line.value = music.currentTime;
  line.max = music.duration;
  if (music.currentTime >= music.duration) {
    music.pause();
  } else {
    setTimeout(musicTime, 500);
  }
}

let music1 = document.getElementById("music1");
let music2 = document.getElementById("music2");
let music3 = document.getElementById("music3");

function changeMusic1() {
  music.pause();
  music.currentTime = 0;
  music.setAttribute("src", "AJR - 100 Bad Days (legendado)_50k.mp3");
}
function changeMusic2() {
  music.pause();
  music.currentTime = 0;
  music.setAttribute("src", "haunt me_50k.mp3");
}
function changeMusic3() {
  music.pause();
  music.currentTime = 0;
  music.setAttribute("src", "engelwood - crystal dolphin_160k.mp3");
}

setTimeout(musicTime, 500);
