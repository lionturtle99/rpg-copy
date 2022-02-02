import Player from "./player.js";
import Enemy from "./enemy.js"

export default class Game {
  constructor() {
    this.turn = true;
    this.player = new Player("YeetMan");
    this.enemy1 = new Enemy("Sludge");
    this.enemy2 = new Enemy("Grumbles");
  }
}

