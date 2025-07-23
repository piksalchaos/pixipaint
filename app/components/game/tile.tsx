"use client";

import { useState } from "react";
import { getColorStyleValue } from "../../lib/color-style";
import styles from "./game.module.css";

export function Tile({
  colorId,
  chosenColorId,
  handleMistake,
}: {
  colorId: number;
  chosenColorId: number;
  handleMistake: () => void;
}) {
  const [isFilled, setIsFilled] = useState(false);
  const handleClick = () => {
    if (isFilled) return;
    if (chosenColorId === colorId) {
      setIsFilled(true);
      return;
    }
    handleMistake();
  };
  return (
    <div
      className={styles.tile}
      style={{
        backgroundColor: isFilled
          ? getColorStyleValue(colorId)
          : "var(--background)",
      }}
      onClick={handleClick}
    />
  );
}
