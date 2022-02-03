import Player from '../src/js/player.js';

describe('Player', () => {

  test("should create a player object following the parameters of the player constructor", () => {
    const player = new Player();
    expect(player).toEqual({"agi": undefined, "character": undefined, "currency": 25, "experience": 0, "hp": 0, "int": undefined, "inventory": [], "level": 0, "mp": 0, "name": undefined, "str": undefined, "weapon": undefined});
  });
  test("should return a number based off of player parameters", () => {
    const player = new Player({"agi": undefined, "character": "paladin", "currency": 25, "experience": 0, "hp": 0, "int": undefined, "inventory": [], "level": 0, "mp": 0, "name": "Glomledorf", "str": undefined, "weapon": "1"}); 
    expect(player.attackRoll()).toBeGreaterThan(0);
    expect(player.attackRoll()).toBeLessThanOrEqual(12);
  });
  test("should increase your hp and mp on your player object", () => {
    let player = new Player(); 
    player.inventory.push("Elixer");
    player.useItem("Elixer");
    expect(player.hp).toEqual(5);
    expect(player.mp).toEqual(5);
  });
  test("should increase your hp and mp on your player object with more than one item in your inventory", () => {
    let player = new Player(); 
    player.inventory.push("Health Potion");
    player.inventory.push("Elixer");
    player.inventory.push("Elixer");
    player.useItem("Elixer");
    expect(player.hp).toEqual(5);
    expect(player.mp).toEqual(5);
  });
})