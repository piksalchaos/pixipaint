import { getColorStyleValue } from "../lib/color-style";

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
    <div className="flex">
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
      className="color-button"
      style={{
        backgroundColor: getColorStyleValue(colorId),
        borderWidth: "0.25rem",
        borderColor: isChosen ? "white" : "transparent",
      }}
      onClick={() => {
        if (!isChosen) handleSelected(colorId);
      }}
    />
  );
}
