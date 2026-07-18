import { create } from "zustand";
import type { TileProps } from "../tile/tile-types";

interface GridStore {
  size: number;
  setSize: (size: number) => void;
  tiles: TileProps[];
  setTiles: (tiles: TileProps[]) => void;
  updateTile: (index: number, tile: TileProps) => void;
  unlockedTiles: number;
  addUnlockedTiles: (unlockedTiles: number) => void;
  removeUnlockedTiles: (unlockedTiles: number) => void;
}

const useGridStore = create<GridStore>((set) => ({
  size: 0,
  setSize: (size: number) => set({ size }),
  tiles: [],
  setTiles: (tiles: TileProps[]) => set({ tiles }),
  updateTile: (index: number, tile: TileProps) =>
    set((state) => ({
      tiles: state.tiles.map((t, i) => (i === index ? tile : t)),
    })),
  unlockedTiles: 2,
  addUnlockedTiles: (unlockedTiles: number) =>
    set((state) => ({ unlockedTiles: state.unlockedTiles + unlockedTiles })),
  removeUnlockedTiles: (unlockedTiles: number) =>
    set((state) => ({ unlockedTiles: state.unlockedTiles - unlockedTiles })),
}));

export default useGridStore;
