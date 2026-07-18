import { create } from "zustand";
import type { TileProps } from "../tile/tile-types";

interface GridStore {
  size: number;
  setSize: (size: number) => void;
  tiles: TileProps[];
  setTiles: (tiles: TileProps[]) => void;
  updateTile: (index: number, tile: TileProps) => void;
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
}));

export default useGridStore;
