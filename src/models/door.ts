export default class DoorModel {
  #doorNumber: number;
  #gift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(
    doorNumber: number,
    gift = false,
    selected = false,
    open = false,
  ) {
    this.#doorNumber = doorNumber;
    this.#gift = gift;
    this.#selected = selected;
    this.#open = open;
  }

  get doorNumber() {
    return this.#doorNumber;
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

  get closed() {
    return !this.open;
  }

  alternateSelection() {
    const selected = !this.#selected;
    return new DoorModel(this.doorNumber, this.gift, selected, this.open);
  }

  deselect() {
    const selected = false;
    return new DoorModel(this.doorNumber, this.gift, selected, this.open);
  }

  openDoor() {
    const opened = true;
    return new DoorModel(this.doorNumber, this.gift, this.selected, opened);
  }
}
