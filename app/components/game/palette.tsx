import { getColorStyleValue } from "../../lib/color-style";
import styles from "./game.module.css";

export function Palette({
  colorAmount,
  chosenColorId,
  handleColorSelected,
}: {
  colorAmount: number;
  chosenColorId: number;
  handleColorSelected: (colorId: number) => void;
}) {
  return (
    <div className={styles.palette}>
      {[...Array(colorAmount)].map((_, colorId) => {
        return (
          <ColorButton
            key={colorId}
            colorId={colorId}
            isChosen={colorId === chosenColorId}
            handleSelected={handleColorSelected}
          />
        );
      })}
    </div>
  );
}

function ColorButton({
  colorId,
  isChosen,
  handleSelected,
}: {
  colorId: number;
  isChosen: boolean;
  handleSelected: (colorId: number) => void;
}) {
  return (
    <div
      className={styles.colorButton}
      style={{
        backgroundColor: getColorStyleValue(colorId),
        transform: `scale(${isChosen ? 1.2 : 1})`,
      }}
      onClick={() => {
        if (!isChosen) handleSelected(colorId);
      }}
    />
  );
}
