export enum SoilState {
  DRY = "dry",
  DEFAULT = "default",
  WET = "wet",
  LOCKED = "locked",
}

export enum CropType {
  NONE = "none",
  CARROT = "carrot",
  ONION = "onion",
  POTATO = "potato",
  RADISH = "radish",
  SPINACH = "spinach",
  TURNIP = "turnip",
}

export enum CropState {
  NONE = "none",
  SEED = "seed",
  BAG = "seed",
  START = "start",
  MIDDLE = "middle",
  END = "end",
  READY = "full",
}

export type TileProps = {
  cropType: CropType;
  cropState: CropState;
  soilState: SoilState;
  onMouseDown?: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
};
