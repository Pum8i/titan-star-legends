import { useGameContext } from "../contexts/GameContext";
import { IRune } from "../types";
import styles from "./rune.module.css";
import clsx from "clsx";

export default function Rune({
  runeData,
  pathIndex,
  runeIndex,
}: {
  runeData: IRune;
  pathIndex: number;
  runeIndex: number;
}) {
  const { handleAddRune, handleRemoveRune } = useGameContext();
  const { darkRune, name, pointAdded, rune } = runeData;

  const handleClickRemoveRune = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleRemoveRune(pathIndex, runeIndex);
  };

  const handleOnMouseOut = (e: { currentTarget: { src: string } }) => {
    if (!pointAdded) e.currentTarget.src = darkRune;
  };

  return (
    <img
      className={clsx(styles.rune, {
        [styles.selectedRune]: pointAdded,
      })}
      src={pointAdded ? rune : darkRune}
      alt={name}
      onClick={() => handleAddRune(pathIndex, runeIndex)}
      onContextMenu={(e) => handleClickRemoveRune(e)}
      onMouseOver={(e) => (e.currentTarget.src = rune)}
      onMouseOut={handleOnMouseOut}
    />
  );
}
