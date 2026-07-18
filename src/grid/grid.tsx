import { useEffect } from "react";
import useGridStore from "../store/grid-store";
import Tile, { TILE_SIZE } from "../tile/tile";
import styled from "styled-components";
import { CropType, CropState, SoilState } from "../tile/tile-types";
import { ToolType, useToolStore } from "../store/tool-store";
import { useScoreStore } from "../store/score-store";

const TileGrid = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, ${TILE_SIZE}px);
  grid-template-rows: repeat(${({ size }) => size}, ${TILE_SIZE}px);
`;

const Grid = () => {
  const gridStore = useGridStore((state) => state);
  const toolStore = useToolStore((state) => state);
  const scoreStore = useScoreStore((state) => state);

  useEffect(() => {
    const size = 6;
    const totalTileCount = size * size;
    gridStore.setSize(size);
    gridStore.setTiles(
      Array.from({ length: totalTileCount }, (_, index) => ({
        index: index,
        cropType: CropType.NONE,
        cropState: CropState.NONE,
        soilState:
          index < gridStore.unlockedTiles
            ? SoilState.DEFAULT
            : SoilState.LOCKED,
      })),
    );
  }, []);

  const waterTile = (index: number) => {
    const currentTile = gridStore.tiles[index];
    gridStore.updateTile(index, {
      ...currentTile,
      soilState:
        currentTile.soilState === SoilState.DEFAULT
          ? SoilState.WET
          : currentTile.soilState,
    });
  };

  const harvestTile = (index: number) => {
    if (gridStore.tiles[index].cropState !== CropState.READY) return;
    const currentTile = gridStore.tiles[index];
    gridStore.updateTile(index, {
      ...currentTile,
      cropType: CropType.NONE,
      cropState: CropState.NONE,
      soilState: SoilState.DEFAULT,
    });
    scoreStore.addCoins(10);
  };

  const plantTile = (index: number) => {
    if (
      gridStore.tiles[index].cropType === CropType.NONE &&
      scoreStore.coins >= 5
    ) {
      const currentTile = gridStore.tiles[index];
      gridStore.updateTile(index, {
        ...currentTile,
        cropType: CropType.RADISH,
        cropState: CropState.SEED,
      });
      scoreStore.removeCoins(5);
    }
  };

  const clearTile = (index: number) => {
    const currentTile = gridStore.tiles[index];
    gridStore.updateTile(index, {
      ...currentTile,
      cropType: CropType.NONE,
      cropState: CropState.NONE,
      soilState: SoilState.DEFAULT,
    });
  };

  const buyTile = (index: number) => {
    if (scoreStore.coins < 10) return;
    if (gridStore.tiles[index].soilState !== SoilState.LOCKED) return;
    const currentTile = gridStore.tiles[index];
    gridStore.updateTile(index, {
      ...currentTile,
      cropType: CropType.NONE,
      cropState: CropState.NONE,
      soilState: SoilState.DEFAULT,
    });
    gridStore.addUnlockedTiles(1);
    scoreStore.removeCoins(10);
  };

  const handleTileClick = (index: number) => {
    // If the tile is not unlocked and not buying, don't do anything
    if (
      gridStore.tiles[index].soilState === SoilState.LOCKED &&
      toolStore.tool !== ToolType.BUY
    ) {
      return;
    }

    // Handle the tool click
    switch (toolStore.tool) {
      case ToolType.WATER:
        waterTile(index);
        break;
      case ToolType.HARVEST:
        harvestTile(index);
        break;
      case ToolType.PLANT:
        plantTile(index);
        break;
      case ToolType.CLEAR:
        clearTile(index);
        break;
      case ToolType.BUY:
        buyTile(index);
        break;
      case ToolType.NONE:
      default:
        break;
    }
  };

  const handleTileMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    // if mouse down and enter only emulate a click once
    if (e.buttons === 1 && e.type === "mouseenter") {
      handleTileClick(index);
    }
  };

  return (
    <TileGrid size={gridStore.size}>
      {gridStore.tiles.map((item, index) => (
        <Tile
          key={index}
          {...item}
          onMouseDown={() => handleTileClick(index)}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) =>
            handleTileMouseEnter(e, index)
          }
        />
      ))}
    </TileGrid>
  );
};

export default Grid;
