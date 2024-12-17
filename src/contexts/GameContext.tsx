import React, { createContext, useContext, useState } from "react";
import { ITalentPath } from "../types";
import { runeData } from "./runeData";
import toast from "react-hot-toast";

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
      const selectedRune = runes[runeIndex];
      const previousRune = runes[runeIndex - 1];

      if (
        (runeIndex === 0 || previousRune.pointAdded) &&
        !selectedRune.pointAdded
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

          toast.success(`You have added ${selectedRune.name}!`);

          return {
            ...prevState,
            spentPoints: prevState.spentPoints + 1,
            paths: newPaths,
          };
        });
      } else if (selectedRune.pointAdded) {
        toast.error(`You have already added ${selectedRune.name}!`);
      } else if (!previousRune?.pointAdded) {
        toast.error(
          `You need to add ${previousRune.name} before adding ${selectedRune.name}!`
        );
      }
    } else if (gameState.spentPoints === gameState.totalPoints) {
      toast.error(`You have no points left to spend!`);
    }
  };

  const handleRemoveRune = (pathIndex: number, runeIndex: number) => {
    const runes = gameState.paths[pathIndex].runes;
    const selectedRune = runes[runeIndex];
    const nextRune = runes[runeIndex + 1];
    if (
      selectedRune.pointAdded &&
      (runeIndex === gameState.paths[pathIndex].runes.length - 1 ||
        !nextRune.pointAdded)
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

        toast.success(`You have removed ${selectedRune.name}!`);

        return {
          ...prevState,
          spentPoints: prevState.spentPoints - 1,
          paths: newPaths,
        };
      });
    } else if (nextRune?.pointAdded) {
      toast.error(
        `You need to remove ${nextRune.name} before you can remove ${selectedRune.name}.`
      );
    } else {
      toast.error(
        `You need to add ${selectedRune.name} before you can remove it!`
      );
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
