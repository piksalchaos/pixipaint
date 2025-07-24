"use client";
import { Game } from "./components/game/game";
import { StartPopup } from "./components/start-popup/start-popup";
import { useState } from "react";
import rawPattern from "@/app/patterns/amogus.json";

export default function Home() {
  const [isStartPopupVisible, setisStartPopupVisible] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartButtonClick = () => {
    setisStartPopupVisible(false);
    setIsGameStarted(true);
  };
  const pattern = {
    ...rawPattern,
    prefilledTiles: rawPattern.prefilledTiles.map(
      (arr: number[]) => [arr[0], arr[1]] as [number, number]
    ),
  };
  return (
    <div className="flex flex-column w-full h-screen justify-center items-center">
      <Game pattern={pattern} isStarted={isGameStarted} />

      {isStartPopupVisible && (
        <StartPopup handleButtonClick={handleStartButtonClick} />
      )}
    </div>
  );
}
