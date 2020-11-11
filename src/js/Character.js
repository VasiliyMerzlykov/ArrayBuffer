export default class Character {
  constructor(name) {
    this.name = name;
    this.type = '';
    this.health = 100;
    this.level = 1;
    this.distance = 1;
    this.distanceMod = 1;
    this.stoned = false;
    this.stonedMod = 0;
  }

  set stoned(value) {
    this._stoned = value;
    this.setMod();
  }

  get stoned() {
    return this._stoned;
  }

  set distance(value) {
    this._distance = (value > 0) ? value : 1;
    this.setMod();
  }

  get distance() {
    return this._distance;
  }

  setMod() {
    this.distanceMod = (11 - this.distance) / 10;
    if (this.stoned) {
      this.stonedMod = Math.log2(this.distance) * 5;
    } else {
      this.stonedMod = 0;
    }
  }

  set attack(value) {
    this._attack = value;
  }

  get attack() {
    const attack = this._attack * this.distanceMod - this.stonedMod;
    return attack;
  }
}
