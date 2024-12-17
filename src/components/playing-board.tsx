import PointsBox from "../components/points-box";
import TalentPath from "../components/talent-path";
import Title from "../components/title";
import { useGameContext } from "../contexts/GameContext";

import styles from "./playing-board.module.css";

export default function PlayingBoard() {
  const { gameState } = useGameContext();

  return (
    <div className={styles.playingBoard}>
      <Title />
      <div className={styles.gameSection}>
        <div className={styles.pathSection}>
          {gameState.paths.map((path, i) => {
            return <TalentPath path={path} pathIndex={i} key={path.pathId} />;
          })}
        </div>
        <PointsBox />
      </div>
    </div>
  );
}
