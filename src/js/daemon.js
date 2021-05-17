import MathCharacter from './mathcharacter';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'daemon', 10);
    this.defence = 40;
  }
}
