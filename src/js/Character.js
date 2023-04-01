export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
      this.level = 1;
      this.health = 100;
    } else {
      throw new Error('неправильное имя');
    }
  }
}
