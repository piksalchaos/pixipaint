"use client";

import { useState } from "react";
import { getColorStyleValue } from "../lib/color-style";

export function Tile({ colorId }: { colorId: number }) {
  const [isFilled, setIsFilled] = useState(false);
  return (
    <div
      className="tile"
      style={{
        backgroundColor: isFilled ? getColorStyleValue(colorId) : "transparent",
      }}
      onClick={() => {
        setIsFilled((prevIsFilled) => !prevIsFilled);
      }}
    />
  );
}
