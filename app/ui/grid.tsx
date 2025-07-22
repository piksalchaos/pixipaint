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
        <div className={styles.iconParagraph}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>{formatTime(elapsedSeconds)}</p>
        </div>
        <div className={styles.iconParagraph}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <p>{mistakeCount}</p>
        </div>
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
