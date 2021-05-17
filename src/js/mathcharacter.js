/* eslint-disable no-underscore-dangle */
import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type, attack) {
    super(name, type);

    this.attack = attack;
    this.stoned = false;
    this.distance = 1;
  }

  set attack(value) {
    this._attack = Math.max(value, 0);
  }

  get attack() {
    let calculatedAttack = 0;
    if (this.distance > 0 && this.distance <= 10) {
      calculatedAttack = Math.floor(this._attack * ((100 - (this.distance - 1) * 10) / 100));
      if (this._stoned) {
        calculatedAttack -= Math.floor(Math.log2(this.distance)) * 5;
      }
    }
    return calculatedAttack;
  }

  set stoned(boolean) {
    this._stoned = boolean;
  }

  get stoned() {
    return this._stoned;
  }
}
