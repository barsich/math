import MathCharacter from './mathcharacter';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'magician', 10);
    this.defence = 40;
  }
}
