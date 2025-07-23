import styles from "./start-popup.module.css";
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
      <button onClick={handleButtonClick}>play</button>
    </div>
  );
}
