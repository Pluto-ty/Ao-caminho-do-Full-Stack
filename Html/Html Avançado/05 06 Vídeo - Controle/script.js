//aprendendo a mexer com a tag vídeo e criando um player próprio.
let video = document.getElementById("video");
function retro() {
  video.currentTime -= 15;
}

function avancar() {
  video.currentTime += 15;
}

function play() {
  video.play();
}
function stop() {
  // a função stop n existe. Então para fazer isso usamos a função stop para pausa o vídeo e depois a currentTime para voltar o tempo do vídeo para 0.
  video.pause();
  video.currentTime = 0;
  video.playbackRate = 1;
}

function avancar_Vel() {
  video.playbackRate += 0.1;
}

function diminuir_Vel() {
  video.playbackRate -= 0.1;
}

// HTML Audio/Video Methods
// Method	Description
// addTextTrack()	Adds a new text track to the audio/video
// canPlayType()	Checks if the browser can play the specified audio/video type
// load()	Re-loads the audio/video element
// play()	Starts playing the audio/video
// pause()	Pauses the currently playing audio/video
// HTML Audio/Video Properties
// Property	Description
// audioTracks	Returns an AudioTrackList object representing available audio tracks
// autoplay	Sets or returns whether the audio/video should start playing as soon as it is loaded
// buffered	Returns a TimeRanges object representing the buffered parts of the audio/video
// controller	Returns the MediaController object representing the current media controller of the audio/video
// controls	Sets or returns whether the audio/video should display controls (like play/pause etc.)
// crossOrigin	Sets or returns the CORS settings of the audio/video
// currentSrc	Returns the URL of the current audio/video
// currentTime	Sets or returns the current playback position in the audio/video (in seconds)
// defaultMuted	Sets or returns whether the audio/video should be muted by default
// defaultPlaybackRate	Sets or returns the default speed of the audio/video playback
// duration	Returns the length of the current audio/video (in seconds)
// ended	Returns whether the playback of the audio/video has ended or not
// error	Returns a MediaError object representing the error state of the audio/video
// loop	Sets or returns whether the audio/video should start over again when finished
// mediaGroup	Sets or returns the group the audio/video belongs to (used to link multiple audio/video elements)
// muted	Sets or returns whether the audio/video is muted or not
// networkState	Returns the current network state of the audio/video
// paused	Returns whether the audio/video is paused or not
// playbackRate	Sets or returns the speed of the audio/video playback
// played	Returns a TimeRanges object representing the played parts of the audio/video
// preload	Sets or returns whether the audio/video should be loaded when the page loads
// readyState	Returns the current ready state of the audio/video
// seekable	Returns a TimeRanges object representing the seekable parts of the audio/video
// seeking	Returns whether the user is currently seeking in the audio/video
// src	Sets or returns the current source of the audio/video element
// startDate	Returns a Date object representing the current time offset
// textTracks	Returns a TextTrackList object representing the available text tracks
// videoTracks	Returns a VideoTrackList object representing the available video tracks
// volume	Sets or returns the volume of the audio/video

// Feito tudo em js. ( peguei de outro aluno do curso para me basear no futuro)
/*
let video = document.getElementById("video");

video.addEventListener("ended", stopVideo);

onload = () => {
  const playerMainButton = document.getElementById("main-btn");
  const playerFullscreenButton = document.getElementById("fullscreen");

  playerMainButton.addEventListener("click", play);
  playerMainButton.addEventListener("click", toggleToPause);

  playerFullscreenButton.addEventListener("click", fullscreen);
  playerFullscreenButton.addEventListener("click", toggleToNormalScreen);
};

function toggleToPause() {
  const element = document.getElementById("main-btn");

  element.setAttribute("src", "./assets/pause-white-48dp.svg");
  element.setAttribute("alt", "Pausar");
  element.setAttribute("title", "Pausar");

  element.removeEventListener("click", play);
  element.removeEventListener("click", toggleToPause);

  element.addEventListener("click", pause);
  element.addEventListener("click", toggleToPlay);
}

function toggleToPlay() {
  const element = document.getElementById("main-btn");

  element.setAttribute("src", "./assets/play_arrow-white-48dp.svg");
  element.setAttribute("alt", "Reproduzir");
  element.setAttribute("title", "Reproduzir");

  element.removeEventListener("click", pause);
  element.removeEventListener("click", toggleToPlay);

  element.addEventListener("click", play);
  element.addEventListener("click", toggleToPause);
}

function toggleToNormalScreen(e) {
  const element = e.target;

  element.setAttribute("src", "./assets/fullscreen_exit-white-48dp.svg");
  element.setAttribute("alt", "Tela normal");
  element.setAttribute("title", "Minimizar");

  element.removeEventListener("click", fullscreen);
  element.removeEventListener("click", toggleToNormalScreen);

  element.addEventListener("click", normalScreen);
  element.addEventListener("click", toggleToFullscreen);
}

function toggleToFullscreen(e) {
  const element = e.target;

  element.setAttribute("src", "./assets/fullscreen-white-48dp.svg");
  element.setAttribute("alt", "Tela cheia");
  element.setAttribute("title", "Maximizar");

  element.removeEventListener("click", normalScreen);
  element.removeEventListener("click", toggleToFullscreen);

  element.addEventListener("click", fullscreen);
  element.addEventListener("click", toggleToNormalScreen);
}

function displayControllers() {
  const controllers = document.getElementsByClassName("controls-row")[0];

  controllers.style.display = "flex";
}

function hideControllers() {
  const controllers = document.getElementsByClassName("controls-row")[0];

  controllers.style.display = "none";
}

function play() {
  video.play();
}

function pause() {
  video.pause();
}

function stopVideo() {
  video.pause();
  toggleToPlay();
  video.currentTime = 0;
}

function speedDown() {
  if (video.playbackRate <= 0.5) {
    return;
  }

  video.playbackRate -= 0.25;
}

function speedUp() {
  if (video.playbackRate >= 2) {
    return;
  }

  video.playbackRate += 0.5;
}

function fullscreen() {
  video.requestFullscreen();
}

function normalScreen() {
  document.exitFullscreen();
}

function forward() {
  video.currentTime += 10;
}

function rewind() {
  video.currentTime -= 10;
}
*/
