import { useGameContext } from "../contexts/GameContext";
import styles from "./points-box.module.css";

export default function PointsBox() {
  const { gameState } = useGameContext();

  return (
    <div className={styles.outerBox}>
      <div className={styles.innerBox}>
        <div>
          {gameState.spentPoints} / {gameState.totalPoints}
        </div>
        <div className={styles.points}>Points Spent</div>
      </div>
    </div>
  );
}
