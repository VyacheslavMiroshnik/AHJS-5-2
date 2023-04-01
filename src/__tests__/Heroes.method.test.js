import Character from '../js/Character';
import Bowerman from '../js/Bowerman';

test('test level up not dead', () => {
  const person = new Bowerman('ivan');
  person.levelUp();
  expect(person).toEqual({
    name: 'ivan',
    type: 'Bowerman',
    health: 100,
    attack: 30,
    defence: 30,
    level: 2,
  });
});
test('test level up dead', () => {
  const person = new Bowerman('ivan');
  person.health = 0;
  expect(() => person.levelUp()).toThrow();
});
test('test damage for not dead heroes', () => {
  const person = new Bowerman('ivan');
  person.damage(100);
  expect(person).toEqual({
    name: 'ivan',
    type: 'Bowerman',
    health: 25,
    attack: 25,
    defence: 25,
    level: 1,
  });
});
test('test damage for dead heroes', () => {
  const person = new Bowerman('ivan');
  person.health = 0;
  expect(() => person.damage(10)).toThrow();
});
test('empty name ', () => {
  expect(() => new Character()).toThrow();
});
