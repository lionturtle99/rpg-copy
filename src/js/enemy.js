// import Game from "./game";

export default class Enemy {
  constructor(){
    this.hp = 25;
    this.mp = 25;
  }

  enemyAttack() {
    return Math.floor((Math.random() * 15) + 4);
  }
}