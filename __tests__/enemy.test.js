import Enemy from '../src/js/enemy.js'

describe('Enemy', () => {

  test("should create an enemy object following the parameters of the enemy constructor", () => {
    const goblin = new Enemy();
    expect(goblin).toEqual({"hp": 25, "mp": 25});
  });
  test("should return a number between 1 and 6", () => {
    const goblin = new Enemy();
    expect(goblin.enemyAttack()).toBeGreaterThan(0);
    expect(goblin.enemyAttack()).toBeLessThanOrEqual(6);
  });
})