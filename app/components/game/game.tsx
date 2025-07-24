"use client";
import { useState, useEffect } from "react";
import { useTimer } from "../../hooks/use-timer";
import { GridPattern } from "../../lib/definitions";
import { ColumnMarkers, RowMarkers } from "./markers";
import { Tile } from "./tile";
import { Palette } from "./palette";
import { InfoDisplay } from "./info-display";
import { defineColorStyleVariables } from "../../lib/color-style";
import styles from "./game.module.css";

export function Game({
  pattern,
  isStarted,
}: {
  pattern: GridPattern;
  isStarted: boolean;
}) {
  const { width, height, grid, colors, prefilledTiles } = pattern;
  useEffect(() => {
    defineColorStyleVariables(colors);
  });

  const timer = useTimer(false);
  useEffect(() => {
    if (isStarted) {
      timer.start();
    }
  }, [isStarted]);

  let [chosenColorId, setChosenColorId] = useState(0);
  const [mistakeCount, setMistakeCount] = useState(0);

  const handleTileMistake = () => {
    setMistakeCount((prevMistakeCount) => prevMistakeCount + 1);
  };
  const initialFilledTiles = new Array(grid.length).fill(false);
  for (const [x, y] of prefilledTiles) {
    initialFilledTiles[y * width + x] = true;
  }
  const [filledTiles, setFilledTiles] = useState<boolean[]>(initialFilledTiles);
  const handleTileFilled = (index: number) => {
    setFilledTiles((prev) => {
      const newFilledTiles = [...prev];
      newFilledTiles[index] = true;
      return newFilledTiles;
    });
  };
  useEffect(() => {
    const isAllFilled = filledTiles.every((filled) => filled);
    if (isAllFilled) {
      timer.stop();
    }
  }, [filledTiles]);

  return (
    <div className={styles.game}>
      <div className={styles.puzzle}>
        <InfoDisplay
          elapsedSeconds={timer.seconds}
          mistakeCount={mistakeCount}
        />
        <ColumnMarkers width={width} height={height} grid={grid} />
        <RowMarkers width={width} height={height} grid={grid} />
        <div
          className={styles.tileGrid}
          style={{
            gridTemplateColumns: `repeat(${width}, 1fr)`,
            gridTemplateRows: `repeat(${height}, 1fr)`,
          }}
        >
          {grid.map((colorId, i) => {
            return (
              <Tile
                key={i}
                index={i}
                isFilled={filledTiles[i]}
                colorId={colorId}
                chosenColorId={chosenColorId}
                handleMistake={handleTileMistake}
                handleFilled={handleTileFilled}
              />
            );
          })}
        </div>
      </div>
      <Palette
        colorAmount={colors.length}
        chosenColorId={chosenColorId}
        handleColorSelected={(colorId) => {
          setChosenColorId(colorId);
        }}
      />
    </div>
  );
}
