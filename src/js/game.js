import Player from "./player.js";
import Enemy from "./enemy.js";

export default class Game {
  constructor() {
    this.turn = true;
    this.player = new Player();
    // this.enemy1 = new Enemy("Sludge");
    this.enemy = new Enemy("Grumbles");
  }
}

