import styled from "styled-components";
import { CropState, CropType, SoilState, type TileProps } from "./tile-types";
import { getRandomNumber } from "../utils/common";
import { useEffect } from "react";
import useGridStore from "../store/grid-store";

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
    background-image:
      url(${({ $hoverBackground }) => $hoverBackground}),
      url(${({ $background }) => $background});
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

const WATER_TIMER = 10000;

// Growth timers scaled relative to real-world days-to-maturity
// (baseline: radish ≈ 25 days → 10000ms)
const CROP_GROWTH_TIMERS: Partial<Record<CropType, number>> = {
  [CropType.RADISH]: 10000, // ~25 days irl — fastest growing
  [CropType.SPINACH]: 16000, // ~40 days irl
  [CropType.TURNIP]: 18000, // ~45 days irl
  [CropType.CARROT]: 28000, // ~70 days irl
  [CropType.POTATO]: 40000, // ~100 days irl
  [CropType.ONION]: 44000, // ~110 days irl — slowest growing
};

const getImagePath = (path: string) => {
  return new URL(path, import.meta.url).href;
};

const isSeed = (cropState: CropState) => {
  return cropState === CropState.SEED;
};

const isHarvested = (cropState: CropState) => {
  return cropState === CropState.READY;
};

const isGrowingCrop = (cropType: CropType, cropState: CropState) =>
  cropType !== CropType.NONE &&
  cropState !== CropState.NONE &&
  cropState !== CropState.READY &&
  cropType in CROP_GROWTH_TIMERS;

const moveToNextCropState = (cropState: CropState) => {
  switch (cropState) {
    case CropState.SEED:
      return CropState.START;
    case CropState.START:
      return CropState.MIDDLE;
    case CropState.MIDDLE:
      return CropState.END;
    case CropState.END:
    default:
      return CropState.READY;
  }
};

const Tile = (props: TileProps) => {
  const { index, cropType, cropState, soilState, onMouseDown, onMouseEnter } =
    props;
  const gridStore = useGridStore((state) => state);

  const imagePath = getImagePath(
    `../assets/crops/${isSeed(cropState) ? `${cropState}_0${getRandomNumber([1, 2])}` : `${cropType}_${cropState}`}.png`,
  );
  const soilImagePath = getImagePath(`../assets/soil/soil_${soilState}.png`);
  const hoverSoilImagePath = getImagePath(`../assets/soil/soil_active.png`);
  const dirtImagePath = getImagePath(
    `../assets/soil/dirt_0${getRandomNumber([1, 2, 3, 4])}.png`,
  );

  useEffect(() => {
    if (!isGrowingCrop(cropType, cropState)) return;
    if (soilState !== SoilState.WET) return;

    const timeout = setTimeout(() => {
      gridStore.updateTile(index, {
        ...props,
        cropState: moveToNextCropState(cropState),
      });
    }, CROP_GROWTH_TIMERS[cropType]);

    return () => clearTimeout(timeout);
  }, [cropType, cropState, soilState]);

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
