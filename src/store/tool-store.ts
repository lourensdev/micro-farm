import { create } from "zustand";

export enum ToolType {
  PLANT = "plant",
  WATER = "water",
  HARVEST = "harvest",
  CLEAR = "clear",
  BUY = "buy",
  NONE = "none",
}

interface ToolStore {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
}

export const useToolStore = create<ToolStore>((set) => ({
  tool: ToolType.NONE,
  setTool: (tool: ToolType) => set({ tool }),
}));
