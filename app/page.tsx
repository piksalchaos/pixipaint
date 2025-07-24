"use client";
import { useState } from "react";
import { Game } from "./components/game/game";
import { StartPopup } from "./components/start-popup/start-popup";
import { WinPopup } from "./components/win-popup/win-popup";

export default function Home() {
  const [isStartPopupVisible, setisStartPopupVisible] = useState(true);
  const [isWinPopupVisible, setIsWinPopupVisible] = useState(false);
  const [patternIndex, setPatternIndex] = useState<undefined | number>(
    undefined
  );
  const [dayWon, setDayWon] = useState<number>(0);
  const [secondsWon, setSecondsWon] = useState<number>(0);
  const [mistakesWon, setMistakesWon] = useState<number>(0);

  const handleStartButtonClick = (patternIndex: number) => {
    setisStartPopupVisible(false);
    setPatternIndex(patternIndex);
  };
  const handleWin = (day: number, time: number, mistakes: number) => {
    setIsWinPopupVisible(true);
    setDayWon(day);
    setSecondsWon(time);
    setMistakesWon(mistakes);
  };
  const handleRestartButtonClick = () => {
    setPatternIndex(undefined);
    setIsWinPopupVisible(false);
    setisStartPopupVisible(true);
  };

  return (
    <div className="flex flex-column w-full h-screen justify-center items-center">
      <Game patternIndex={patternIndex} handleWin={handleWin} />

      {isStartPopupVisible && (
        <StartPopup
          isVisible={isStartPopupVisible}
          handleButtonClick={handleStartButtonClick}
        />
      )}
      {isWinPopupVisible && (
        <WinPopup
          isVisible={isWinPopupVisible}
          day={dayWon}
          seconds={secondsWon}
          mistakes={mistakesWon}
          handleButtonClick={handleRestartButtonClick}
        />
      )}
    </div>
  );
}
