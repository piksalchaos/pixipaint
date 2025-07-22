"use client";
import { useRef, useState, useEffect } from "react";
import { GridPattern } from "../lib/definitions";
import { ColumnMarkers, RowMarkers } from "./markers";
import { Tile } from "./tile";
import styles from "./grid.module.css";

export function Grid({
  pattern,
  chosenColorId,
}: {
  pattern: GridPattern;
  chosenColorId: number;
}) {
  const { width, height, grid } = pattern;
  const [mistakeCount, setMistakeCount] = useState(0);

  const handleTileMistake = () => {
    setMistakeCount((prevMistakeCount) => prevMistakeCount + 1);
  };

  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedSeconds((prevElapsedSeconds) => prevElapsedSeconds + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  const formatTime = (seconds: number): string => {
    return `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.grid}>
      <div className={styles.infoDisplay}>
        <p>{formatTime(elapsedSeconds)}</p>
        <p>mistakes: {mistakeCount} </p>
      </div>
      <ColumnMarkers width={width} height={height} grid={grid} />
      <RowMarkers width={width} height={height} grid={grid} />
      <div
        className={styles.tiles}
        style={{
          gridTemplateColumns: `repeat(${width}, 6rem)`,
          gridTemplateRows: `repeat(${height}, 6rem)`,
        }}
      >
        {grid.map((colorId, i) => {
          return (
            <Tile
              key={i}
              colorId={colorId}
              chosenColorId={chosenColorId}
              handleMistake={handleTileMistake}
            />
          );
        })}
      </div>
    </div>
  );
}
