import styles from "./start-popup.module.css";
import patterns from "@/app/patterns/patterns.json";

export function StartPopup({
  isVisible,
  handleButtonClick,
}: {
  isVisible: boolean;
  handleButtonClick: (patternIndex: number) => void;
}) {
  return (
    <div className={styles.container} style={{ opacity: isVisible ? 1 : 0 }}>
      <p>
        <b>PIXIPAINT</b>
      </p>
      <div className={styles.dayButtons}>
        {patterns.map((_, index) => (
          <button key={index} onClick={() => handleButtonClick(index)}>
            Day {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
