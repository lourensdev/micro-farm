import { create } from "zustand";

interface ScoreStore {
  coins: number;
  setCoins: (coins: number) => void;
  addCoins: (coins: number) => void;
  removeCoins: (coins: number) => void;
}

export const useScoreStore = create<ScoreStore>((set) => ({
  coins: 10,
  setCoins: (coins: number) => set({ coins }),
  addCoins: (coins: number) => set((state) => ({ coins: state.coins + coins })),
  removeCoins: (coins: number) =>
    set((state) => ({ coins: state.coins - coins })),
}));
