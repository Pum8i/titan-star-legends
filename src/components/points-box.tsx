import { useGameContext } from "../contexts/GameContext";
import classes from "./points-box.module.css";

export default function PointsBox() {
  const { gameState } = useGameContext();

  return (
    <div className={classes.outerBox}>
      <div className={classes.innerBox}>
        <div>
          {gameState.spentPoints} / {gameState.totalPoints}
        </div>
        <div className={classes.points}>Points Spent</div>
      </div>
    </div>
  );
}
