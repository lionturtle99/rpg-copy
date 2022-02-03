import Game from "../src/js/game.js";
import Player from "../src/js/player.js";
import Enemy from "../src/js/enemy.js";

describe('Game', () => {

  test("should create an enemy object following the parameters of the game constructor", () => {
    const game = new Game();
    expect(game).toEqual({"enemy1": {"hp": 25, "mp": 25}, "enemy2": {"hp": 25, "mp": 25}, "player": {"agi": undefined, "character": undefined, "currency": 25, "experience": 0, "hp": 0, "int": undefined, "inventory": [], "level": 0, "mp": 0, "name": undefined, "str": undefined, "weapon": undefined}, "turn": true});
  });
})
