import styles from "./win-popup.module.css";
import { formatTime } from "@/app/lib/format-time";
import { useState } from "react";

export function WinPopup({
  isVisible,
  day,
  seconds,
  mistakes,
  handleButtonClick,
}: {
  isVisible: boolean;
  day: number;
  seconds: number;
  mistakes: number;
  handleButtonClick: () => void;
}) {
  const [areResultsCopied, setAreResultsCopied] = useState(false);

  const handleCopy = async () => {
    setAreResultsCopied(true);
    const textToCopy = `[PIXIPAD]\nDay ${day + 1}\nTime: ${formatTime(
      seconds
    )}\nMistakes: ${mistakes}\nhttps://pixipaint-nu.vercel.app`;
    try {
      await navigator.clipboard.writeText(textToCopy);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={styles.container} style={{ opacity: isVisible ? 1 : 0 }}>
      <p>
        <b>YOU WON</b>
      </p>
      <p>day {day + 1}</p>
      <p>time: {formatTime(seconds)}</p>
      <p>mistakes: {mistakes}</p>
      <button className={styles.button} onClick={handleCopy}>
        Copy Results
      </button>
      {areResultsCopied && <p>Results copied to clipboard!</p>}
      <button className={styles.button} onClick={handleButtonClick}>
        Play another pattern
      </button>
    </div>
  );
}
