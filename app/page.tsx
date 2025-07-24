"use client";
import { Game } from "./components/game/game";
import { StartPopup } from "./components/start-popup/start-popup";
import { useState } from "react";
import rawPattern from "@/app/patterns/amogus.json";

export default function Home() {
  const [isStartPopupVisible, setisStartPopupVisible] = useState(true);
  const [patternIndex, setPatternIndex] = useState<undefined | number>(
    undefined
  );

  const handleStartButtonClick = (patternIndex: number) => {
    setisStartPopupVisible(false);
    setPatternIndex(patternIndex);
  };
  const pattern = {
    ...rawPattern,
    prefilledTiles: rawPattern.prefilledTiles.map(
      (arr: number[]) => [arr[0], arr[1]] as [number, number]
    ),
  };
  return (
    <div className="flex flex-column w-full h-screen justify-center items-center">
      <Game patternIndex={patternIndex} />

      <StartPopup
        isVisible={isStartPopupVisible}
        handleButtonClick={handleStartButtonClick}
      />
    </div>
  );
}
