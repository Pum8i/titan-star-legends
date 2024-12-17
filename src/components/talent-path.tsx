import React from "react";
import Rune from "./rune";
import { IRune, ITalentPath } from "../types";
import styles from "./talent-path.module.scss";
import clsx from "clsx";

const Path = ({ highlightPath }: { highlightPath: boolean }) => {
  return (
    <div
      className={clsx(styles.path, {
        [styles.pathSelected]: highlightPath,
      })}
    />
  );
};

export default function TalentPath({
  path,
  pathIndex,
}: {
  path: ITalentPath;
  pathIndex: number;
}) {
  const { runes } = path;
  return (
    <div className={styles.talentBox}>
      <h2 className={styles.talentTitle}>{path.title}</h2>
      <div className={styles.runesBox}>
        {runes.map((rune: IRune, i: number) => {
          return (
            <React.Fragment key={rune.runeId}>
              <Rune runeData={rune} pathIndex={pathIndex} runeIndex={i} />
              {runes.length > 0 && i < runes.length - 1 && (
                <Path highlightPath={rune.pointAdded} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
