export default class Door {
  #number;
  #gift;
  #selected;
  #open;

  constructor(number, gift = false, seleceted = false, open = false) {
    this.#number = number;
    this.#gift = gift;
    this.#selected = seleceted;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get gift() {
    return this.#gift;
  }

  get selected() {
    return this.#selected;
  }

  get open() {
    return this.#open;
  }

  alternateSelection() {
    const selected = !this.#selected;
    return new Door(number, this.gift, selected, this.open);
  }

  deselect() {
    const selected = false;
    return new Door(number, this.gift, selected, this.open);
  }

  open() {
    const opened = true;
    return new Door(number, this.gift, this.selected, opened);
  }
}
