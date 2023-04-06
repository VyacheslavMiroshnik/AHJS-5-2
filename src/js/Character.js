export default class Character {
  constructor(name = '', type = '') {
    if (name.length >= 2 && name.length <= 10) {
      if (
        [
          'Bowerman',
          'Swordsman',
          'Magician',
          'Daemon',
          'Undead',
          'Zombie',
        ].includes(type)
      ) {
        this.name = name;
        this.level = 1;
        this.health = 100;
        this.type = type;
      } else {
        throw new Error('неправильны тип');
      }
    } else {
      throw new Error('неправильное имя');
    }
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя повысить левел умершого');
    } else {
      this.level += 1;
      this.attack += 0.2 * this.attack;
      this.defence += 0.2 * this.defence;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('герой уже мертв');
    } else {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
