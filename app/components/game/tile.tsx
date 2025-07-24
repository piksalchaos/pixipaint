import { getColorStyleValue } from "../../lib/color-style";
import styles from "./game.module.css";

export function Tile({
  index,
  isFilled,
  colorId,
  chosenColorId,
  handleMistake,
  handleFilled,
}: {
  index: number;
  isFilled: boolean;
  colorId: number;
  chosenColorId: number;
  handleMistake: () => void;
  handleFilled: (index: number) => void;
}) {
  const handleClick = () => {
    if (isFilled) return;
    if (chosenColorId === colorId) {
      handleFilled(index);
      return;
    }
    handleMistake();
  };
  return (
    <div
      className={styles.tile}
      style={{
        backgroundColor: isFilled
          ? getColorStyleValue(colorId)
          : "var(--background)",
      }}
      onClick={handleClick}
    />
  );
}
