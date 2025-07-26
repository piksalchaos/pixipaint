"use client";
import { useEffect, useState } from "react";
import { getColorStyleValue } from "../../lib/color-style";
import styles from "./game.module.css";

export function Tile({
  index,
  isFilled,
  colorId,
  chosenColorId,
  handleMistake,
  handleFilled,
}: {
  index: number;
  isFilled: boolean;
  colorId: number;
  chosenColorId: number;
  handleMistake: () => void;
  handleFilled: (index: number) => void;
}) {
  const [hadMistake, sethadMistake] = useState(false);
  useEffect(() => {
    if (hadMistake) {
      const timer = setTimeout(() => {
        sethadMistake(false);
      }, 400);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  });

  const handleClick = () => {
    if (isFilled) return;
    if (chosenColorId === colorId) {
      handleFilled(index);
      return;
    }
    sethadMistake(true);
    handleMistake();
  };
  return (
    <div
      className={styles.tile}
      style={{
        borderColor: hadMistake ? "red" : "transparent",
        backgroundColor: isFilled
          ? getColorStyleValue(colorId)
          : "var(--background)",
      }}
      onClick={handleClick}
    />
  );
}
