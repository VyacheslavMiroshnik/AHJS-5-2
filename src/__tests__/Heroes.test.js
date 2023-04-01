import Bowerman from '../js/Bowerman';
import Daemon from '../js/Daemon';
import Swordsman from '../js/Swordsman';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';
import Magician from '../js/Magician';
import Character from '../js/Character';

const listHeroes = [
  [
    'Bowerman',
    new Bowerman('ivan'),
    {
      name: 'ivan',
      type: 'Bowerman',
      health: 100,
      attack: 25,
      defence: 25,
      level: 1,
    },
  ],
  [
    'Magician',
    new Magician('ivan'),
    {
      name: 'ivan',
      type: 'Magician',
      health: 100,
      attack: 10,
      defence: 40,
      level: 1,
    },
  ],
  [
    'Daemon',
    new Daemon('ivan'),
    {
      name: 'ivan',
      type: 'Daemon',
      health: 100,
      attack: 10,
      defence: 40,
      level: 1,
    },
  ],
  [
    'Swordsman',
    new Swordsman('ivan'),
    {
      name: 'ivan',
      type: 'Swordsman',
      health: 100,
      attack: 40,
      defence: 10,
      level: 1,
    },
  ],
  [
    'Undead',
    new Undead('ivan'),
    {
      name: 'ivan',
      type: 'Undead',
      health: 100,
      attack: 25,
      defence: 25,
      level: 1,
    },
  ],
  [
    'Zombie',
    new Zombie('ivan'),
    {
      name: 'ivan',
      type: 'Zombie',
      health: 100,
      attack: 40,
      defence: 10,
      level: 1,
    },
  ],
];
test.each(listHeroes)('test %s', (_, classObj, result) => {
  const person = classObj;
  expect(person).toEqual(result);
});
test('Test Character invalid name value', () => {
  expect(() => new Character('n')).toThrow();
});
