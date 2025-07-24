import styles from "./win-popup.module.css";
import { formatTime } from "@/app/lib/format-time";

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
  return (
    <div className={styles.container} style={{ opacity: isVisible ? 1 : 0 }}>
      <p>
        <b>YOU WON</b>
      </p>
      <p>day {day}</p>
      <p>time: {formatTime(seconds)}</p>
      <p>mistakes: {mistakes}</p>
      <button className={styles.button} onClick={handleButtonClick}>
        Play another pattern{" "}
      </button>
    </div>
  );
}
