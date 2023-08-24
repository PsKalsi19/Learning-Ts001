import { FC } from "react";

type ScoreProps = {
  currentScore: number;
  totalScore: number;
};

const Score: FC<ScoreProps> = ({ currentScore, totalScore }) => {
  return (
    <>
      <p>
        Current Score: {currentScore}/{totalScore}
      </p>
    </>
  );
};

export default Score;
