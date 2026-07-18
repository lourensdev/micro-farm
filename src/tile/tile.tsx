import styled from "styled-components";
import { CropState, CropType, SoilState, type TileProps } from "./tile-types";
import { getRandomNumber } from "../utils/common";

export const TILE_SIZE = 72;

const TileContainer = styled.div<{
  $background: string;
  $hoverBackground?: string;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  width: ${TILE_SIZE}px;
  height: ${TILE_SIZE}px;
  background-image: url(${({ $background }) => $background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  image-rendering: pixelated;
  cursor: pointer;

  &:hover {
    background-image: url(${({ $hoverBackground, $background }) =>
      $hoverBackground ? $hoverBackground : $background});
  }
`;

const CropImage = styled.img<{
  $isSeed?: boolean;
  $isHarvestedCrop: boolean;
}>`
  position: relative;
  width: auto;
  height: 50px;
  object-position: center;
  image-rendering: pixelated;
  z-index: 1;
  ${({ $isSeed }) => $isSeed && "margin-top: 10px;"}
  ${({ $isHarvestedCrop }) =>
    $isHarvestedCrop &&
    `
    margin-top: -5px;
    margin-left: 40px;
    height: 40px;
    animation: bounce 1.5s infinite;

    @keyframes bounce {
      0% { transform: translateY(2px); }
      50% { transform: translateY(-2px); }
      100% { transform: translateY(2px); }
    }      
  `}
`;

const DirtImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 50px;
  object-position: center;
  image-rendering: pixelated;
`;

const getImagePath = (path: string) => {
  return new URL(path, import.meta.url).href;
};

const isSeed = (cropState: CropState) => {
  return cropState === CropState.SEED;
};

const isHarvested = (cropState: CropState) => {
  return cropState === CropState.READY;
};

const Tile = (props: TileProps) => {
  const { cropType, cropState, soilState, onMouseDown, onMouseEnter } = props;

  const imagePath = getImagePath(
    `../assets/crops/${isSeed(cropState) ? `${cropState}_0${getRandomNumber([1, 2])}` : `${cropType}_${cropState}`}.png`,
  );

  const soilImagePath = getImagePath(`../assets/soil/soil_${soilState}.png`);
  const hoverSoilImagePath = getImagePath(`../assets/soil/soil_active.png`);

  const dirtImagePath = getImagePath(
    `../assets/soil/dirt_0${getRandomNumber([1, 2, 3, 4])}.png`,
  );

  return (
    <TileContainer
      $background={soilImagePath}
      $hoverBackground={
        soilState !== SoilState.LOCKED ? hoverSoilImagePath : undefined
      }
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
    >
      {soilState !== SoilState.LOCKED &&
        cropType !== CropType.NONE &&
        cropState !== CropState.NONE && (
          <>
            <CropImage
              $isSeed={isSeed(cropState)}
              $isHarvestedCrop={isHarvested(cropState)}
              src={imagePath}
              draggable="false"
            />
            {isHarvested(cropState) && (
              <DirtImage src={dirtImagePath} draggable="false" />
            )}
          </>
        )}
    </TileContainer>
  );
};

export default Tile;
