// TODO: write code here

import GoblinGame  from "./GoblinGame.js"


const game = new GoblinGame(
  document.getElementsByClassName('hole-board')[0],
  4,
);
game.init();