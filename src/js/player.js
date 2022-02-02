export default class Player {
  constructor(name, weapon, character) {
    this.name = name;
    this.hp = 50;
    this.mp = 25;
    this.str = 12;
    this.int = 10;
    this.agi = 10;
    this.weapon = weapon;
    this.inventory = [];
    this.character = character;
    this.experience = 0;
    this.currency = 25;
    this.level = 0;
  }
  attackRoll()  {
    let roll = Math.floor((Math.random() * 8) + 1);
    let agiRoll = Math.floor((Math.random() * 3) + 2);
    if (this.weapon === "1"){
      roll = roll + (this.str / 3);
    } else if (this.weapon === "2") {
      roll = roll + (this.int / 2);
      this.mp -= 1;
    } else if (this.weapon === "3") {
      roll = (agiRoll + agiRoll) + (this.agi / 5);
    } else if (this.weapon === "Gun") {
      roll = 100;
    }
    return roll;
  }
  useItem() {
    this.inventory.forEach(function(item){
      if (item === "1") {
        this.hp += 10;
      } else if (item === "0") {
        this.mp += 10;
      } else if (item === "2") {
        this.hp += 5;
        this.mp += 5;
      }
    });
  }

  
}