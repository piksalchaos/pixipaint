"use client";

import { useState } from "react";
import { getColorStyleValue } from "../lib/color-style";

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
  return (
    <div
      className="tile"
      style={{
        backgroundColor: isFilled ? getColorStyleValue(colorId) : "transparent",
      }}
      onClick={() => {
        if (isFilled) return;
        if (chosenColorId === colorId) {
          setIsFilled(true);
        }
        handleMistake();
      }}
    />
  );
}
