"use client";
import { Game } from "./components/game/game";
import { StartPopup } from "./components/start-popup";
import { useState } from "react";
import flowerPattern from "@/app/patterns/flower.json";

export default function Home() {
  const [isStartPopupVisible, setisStartPopupVisible] = useState(true);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleButtonClick = () => {
    setisStartPopupVisible(false);
    setIsGameStarted(true);
  };
  return (
    <div className="flex flex-column w-full h-screen justify-center items-center">
      <Game pattern={flowerPattern} isStarted={isGameStarted} />

      {isStartPopupVisible && (
        <StartPopup handleButtonClick={handleButtonClick} />
      )}
    </div>
  );
}
