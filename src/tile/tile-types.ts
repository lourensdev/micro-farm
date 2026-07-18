export enum SoilState {
  DRY = "dry",
  DEFAULT = "default",
  WET = "wet",
  LOCKED = "locked",
}

export enum CropType {
  CARROT = "carrot",
  ONION = "onion",
  POTATO = "potato",
  RADISH = "radish",
  SPINACH = "spinach",
  TURNIP = "turnip",
}

export enum CropState {
  SEED = "seed",
  BAG = "seed",
  START = "start",
  MIDDLE = "middle",
  END = "end",
  HARVESTED = "full",
}

export type TileProps = {
  cropType: CropType;
  cropState: CropState;
  soilState: SoilState;
  onClick?: () => void;
};
