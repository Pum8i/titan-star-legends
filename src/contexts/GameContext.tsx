import React, { createContext, useContext, useState } from "react";
import { ITalentPath } from "../types";
import { runeData } from "./runeData";

interface GameState {
  totalPoints: number;
  spentPoints: number;
  paths: ITalentPath[];
}

interface GameContextProps {
  gameState: GameState;
  handleAddRune: (pathIndex: number, runeIndex: number) => void;
  handleRemoveRune: (pathIndex: number, runeIndex: number) => void;
}

const GameContext = createContext<GameContextProps | null>(null);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameState, setState] = useState<GameState>(runeData);

  const handleAddRune = (pathIndex: number, runeIndex: number) => {
    if (gameState.spentPoints < gameState.totalPoints) {
      const runes = gameState.paths[pathIndex].runes;
      const previousRuneIndex = runeIndex - 1;
      if (
        (runeIndex === 0 || runes[previousRuneIndex].pointAdded) &&
        !runes[runeIndex].pointAdded
      ) {
        setState((prevState) => {
          const newPaths = prevState.paths.map((path, i) => {
            if (i === pathIndex) {
              return {
                ...path,
                runes: path.runes.map((rune, j) => {
                  if (runeIndex === j) {
                    return {
                      ...rune,
                      pointAdded: !rune.pointAdded,
                    };
                  }
                  return rune;
                }),
              };
            }
            return path;
          });

          return {
            ...prevState,
            spentPoints: prevState.spentPoints + 1,
            paths: newPaths,
          };
        });
      }
    }
  };

  const handleRemoveRune = (pathIndex: number, runeIndex: number) => {
    const runes = gameState.paths[pathIndex].runes;
    if (
      runes[runeIndex].pointAdded &&
      (runeIndex === gameState.paths[pathIndex].runes.length - 1 ||
        !runes[runeIndex + 1].pointAdded)
    ) {
      setState((prevState) => {
        const newPaths = prevState.paths.map((path, i) => {
          if (i === pathIndex) {
            return {
              ...path,
              runes: path.runes.map((rune, j) => {
                if (runeIndex === j) {
                  return {
                    ...rune,
                    pointAdded: !rune.pointAdded,
                  };
                }
                return rune;
              }),
            };
          }
          return path;
        });

        return {
          ...prevState,
          spentPoints: prevState.spentPoints - 1,
          paths: newPaths,
        };
      });
    }
  };

  return (
    <GameContext.Provider
      value={{ gameState: gameState, handleAddRune, handleRemoveRune }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext)!;
