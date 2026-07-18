import { useScoreStore } from "../store/score-store";

export const Score = () => {
  const scoreStore = useScoreStore();
  return (
    <div>
      <div>Coins: {scoreStore.coins}</div>
    </div>
  );
};
