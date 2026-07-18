import { useState, Fragment } from "react";
import Tile, { TILE_SIZE } from "../tile/tile";
import {
  CropState,
  CropType,
  SoilState,
  type TileProps,
} from "../tile/tile-types";
import styled from "styled-components";

const TileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, ${TILE_SIZE}px);
  grid-template-rows: repeat(6, ${TILE_SIZE}px);
`;

function Grid() {
  const [tiles] = useState<TileProps[]>([
    {
      cropType: CropType.CARROT,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.ONION,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.POTATO,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.ONION,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.POTATO,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.RADISH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.SPINACH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.TURNIP,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.RADISH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.SPINACH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.TURNIP,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.WET,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.SEED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.LOCKED,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.WET,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.SEED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.LOCKED,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.ONION,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.POTATO,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.ONION,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.POTATO,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.RADISH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.SPINACH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.TURNIP,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.RADISH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.SPINACH,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.TURNIP,
      cropState: CropState.HARVESTED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.WET,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.SEED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.LOCKED,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.WET,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.SEED,
      soilState: SoilState.DEFAULT,
    },
    {
      cropType: CropType.CARROT,
      cropState: CropState.MIDDLE,
      soilState: SoilState.LOCKED,
    },
  ]);

  return (
    <TileGrid>
      {tiles.map((item, index) => (
        <Tile key={index} {...item} onClick={() => console.log(index)} />
      ))}
    </TileGrid>
  );
}

export default Grid;
