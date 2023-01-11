import DoorModel from '../models/door';

export const createDoors = (quantity: number, hasGift: number): DoorModel[] => {
  return Array.from({ length: quantity }, (_, i) => {
    const num = i + 1;
    const validation = num === hasGift;
    return new DoorModel(num, validation);
  });
};

export const updateDoors = (
  doors: DoorModel[],
  modifiedDoor: DoorModel,
): DoorModel[] => {
  return doors.map((door) => {
    const modified = door.doorNumber === modifiedDoor.doorNumber;

    if (modified) return modifiedDoor;
    else {
      return modifiedDoor.open ? door : door.deselect();
    }
  });
};
