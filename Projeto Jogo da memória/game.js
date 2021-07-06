let game = {
   lockMode: false,
   firstCard: null,
   secondCard: null,
   techs: [
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
   ],

   setCard: function (id) {
      let card = this.cards.filter((card) => card.id === id)[0];

      if (card.flipped || this.lockMode) {
         return false;
      }

      if (this.firstCard == null) {
         this.firstCard = card;
         this.firstCard.flipped = true;
         return true;
      } else {
         this.secondCard = card;
         this.secondCard.flipped = true;
         this.lockMode = true;
         return true;
      }
   },

   checkMatch: function () {
      if (!this.firstCard || !this.secondCard) {
         return false;
      }
      return this.firstCard.icon === this.secondCard.icon;
   },

   clearCards: function () {
      this.firstCard = null;
      this.secondCard = null;
      this.lockMode = false;
   },

   unflipCard: function () {
      this.firstCard.flipped = false;
      this.secondCard.flipped = false;
      this.clearCards();
   },

   cards: null,

   createCardsFromTechs: function (techs) {
      this.cards = [];

      this.techs.forEach((tech) => {
         this.cards.push(this.createPairFromTech(tech));
      });

      // flatmap faz a mesma coisa que o map, porém se houver algum array dentro desse array sendo verificado, ele desmembra esse array e coloca junto com os outros valores.
      this.cards = this.cards.flatMap((pair) => pair);
      this.shuffleCards();
      return this.cards;
   },

   createPairFromTech: function (tech) {
      return [
         {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
         },
         {
            id: this.createIdWithTech(tech),
            icon: tech,
            flipped: false,
         },
      ];
   },

   createIdWithTech: function (tech) {
      return tech + parseInt(Math.random() * 1000);
   },

   shuffleCards: function (cards) {
      let currentIndex = this.cards.length;
      let randomIndex = 0;

      // Trocando as posições das cartas
      while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex);
         currentIndex--;

         // Troca a posição da carta atual com a aleatória.
         [this.cards[randomIndex], this.cards[currentIndex]] = [
            this.cards[currentIndex],
            this.cards[randomIndex],
         ];
      }
   },

   checkGameOver() {
      return this.cards.filter((card) => !card.flipped).length == 0;
   },
};
