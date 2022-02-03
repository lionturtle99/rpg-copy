export default class Player {
  constructor(name, str, int, agi, weapon, character) {
    this.name = name;
    this.hp = 0;
    this.mp = 0;
    this.str = str;
    this.int = int;
    this.agi = agi;
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
      roll = roll ;
    } else if (this.weapon === "2") {
      roll = roll;
      this.mp -= 1;
    } else if (this.weapon === "3") {
      roll = agiRoll + agiRoll;
    } else if (this.weapon === "Gun") {
      roll = 100;
    }
    return roll;
  }
  useItem(potion) {
    let that = this;
    this.inventory.forEach(function(item){
      if (item  === potion && potion === "Health Potion") {
        that.hp += 10;
        let itemIndex = that.inventory.indexOf(potion)
        that.inventory.splice(itemIndex, 1)
      }
      if (item  === potion && potion === "Mana Potion") {
        that.mp += 10;
        let itemIndex = that.inventory.indexOf(potion)
        that.inventory.splice(itemIndex, 1)
      }
      if (item === potion && potion === "Elixir") {
        that.hp += 5;
        that.mp += 5;
        let itemIndex = that.inventory.indexOf(potion)
        that.inventory.splice(itemIndex, 1)
      }
    });
  }
  payInn() {
    this.hp += 100;
    this.mp += 50;
    this.currency -= 5;
  }  
}