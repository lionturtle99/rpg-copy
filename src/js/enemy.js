export default class Enemy {
  constructor(){
    this.hp = 25;
    this.mp = 25;
  }

  enemyAttack() {
    Math.floor((Math.random() * 6) + 1);
  }
}