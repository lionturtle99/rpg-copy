import Player from '../src/js/player.js';

describe('Player', () => {

  test("should create a player object following the parameters of the player constructor", () => {
    const player = new Player();
    expect(player).toEqual({"agi": 10, "character": undefined, "currency": 25, "experience": 0, "hp": 50, "int": 10, "inventory": [], "level": 0, "mp": 25, "name": undefined, "str": 12, "weapon": undefined});
  });
})