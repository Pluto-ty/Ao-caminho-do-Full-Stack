document.addEventListener("DOMContentLoaded", () => {
   let square = document.querySelectorAll(".c-square");

   square.forEach((square) => {
      square.addEventListener("click", handleClick);
   });
});

function handleClick(event) {
   let square = event.target;
   let position = square.id;

   if (handleMove(position)) {
      setTimeout(() => {
         if (playerTime == 0) {
            alert(`O jogo Acabou. O jogador ${playerTime} ganhou! 🛡️ 🛡️ 🛡️`);
         } else {
            alert(`O jogo Acabou. O jogador ${playerTime} ganhou! ⚔️ ⚔️ ⚔️`);
         }
      }, 10);
   }
   updateSquares(position);
}

function updateSquares(position) {
   let square = document.getElementById(position.toString());
   let symbol = board[position];
   square.innerHTML = `<div class='${symbol}'></div>`;
}

function resetSquares() {
   let square = document.querySelectorAll(".c-square");
   board = ["", "", "", "", "", "", "", "", ""];
   playerTime = 0;
   gameOver = false;
   square.forEach((square) => {
      square.innerHTML = "";
   });
}
