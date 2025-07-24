import styles from "./start-popup.module.css";
import patterns from "@/app/patterns/patterns.json";

export function StartPopup({
  handleButtonClick,
}: {
  handleButtonClick: () => void;
}) {
  return (
    <div className={styles.container}>
      <p>
        <b>PIXIPAINT</b>
      </p>
      <div className={styles.dayButtons}>
        {patterns.map((pattern, index) => (
          <button onClick={handleButtonClick}>Day {index + 1}</button>
        ))}
      </div>
    </div>
  );
}
