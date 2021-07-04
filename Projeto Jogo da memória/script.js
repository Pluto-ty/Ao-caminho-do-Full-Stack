const FRONT = "card_front";
const BACK = "card_back";

let techs = [
   "bootstrap",
   "css",
   "electron",
   "firebase",
   "html",
   "javascript",
   "jquery",
   "mongo",
   "node",
   "react",
];

let cards = null;

startGame();

function startGame() {
   cards = createCardsFromTechs(techs);
   shuffleCards(cards);

   initializeCards(cards);
}

function initializeCards(cards) {
   let gameBoard = document.getElementById("js-gameBoard");
}

function shuffleCards(cards) {
   let currentIndex = cards.length;
   let randomIndex = 0;

   // Trocando as posições das cartas
   while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Troca a posição da carta atual com a aleatória.
      [cards[randomIndex], cards[currentIndex]] = [
         cards[currentIndex],
         cards[randomIndex],
      ];
   }
}

// createCardsFromTechs(techs);

function createCardsFromTechs(techs) {
   let cards = [];

   for (let tech of techs) {
      cards.push(createPairFromTech(tech));
   }
   // flatmap faz a mesma coisa que o map, porém se houver algum array dentro desse array sendo verificado, ele desmembra esse array e coloca junto com os outros valores.
   return cards.flatMap((pair) => pair);
}

function createPairFromTech(tech) {
   return [
      {
         id: createIdWithTech(tech),
         icon: tech,
         flipped: false,
      },
      {
         id: createIdWithTech(tech),
         icon: tech,
         flipped: false,
      },
   ];
}

function createIdWithTech(tech) {
   return tech + parseInt(Math.random() * 1000);
}
