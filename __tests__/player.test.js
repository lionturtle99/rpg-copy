import Player from '../src/js/player.js';

describe('Player', () => {

  test("should create a player object following the parameters of the player constructor", () => {
    const player = new Player();
    expect(player).toEqual({"agi": 10, "character": undefined, "currency": 25, "experience": 0, "hp": 50, "int": 10, "inventory": [], "level": 0, "mp": 25, "name": undefined, "str": 12, "weapon": undefined});
  });
  test("should return a number based off of player parameters", () => {
    const player = new Player({"agi": 10, "character": "paladin", "currency": 25, "experience": 0, "hp": 50, "int": 10, "inventory": [], "level": 0, "mp": 25, "name": "Glomledorf", "str": 12, "weapon": "1"}); 
    expect(player.attackRoll()).toBeGreaterThan(0);
    expect(player.attackRoll()).toBeLessThanOrEqual(12);
  });
  test("should increase your hp and mp on your player object", () => {
    let player = new Player(); 
    player.inventory.push("2");
    player.useItem("2");
    expect(player.hp).toEqual(55);
    expect(player.mp).toEqual(30);
  });
})