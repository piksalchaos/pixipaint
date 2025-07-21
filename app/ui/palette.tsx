import { getColorStyleValue } from "../lib/color-style";

export function Palette({
  colorAmount,
  chosenColorId,
  onColorButtonClick,
}: {
  colorAmount: number;
  chosenColorId: number;
  onColorButtonClick: (colorId: number) => void;
}) {
  return (
    <div className="flex">
      {[...Array(colorAmount)].map((_, colorId) => {
        return (
          <ColorButton
            key={colorId}
            colorId={colorId}
            isChosen={colorId === chosenColorId}
            onClick={onColorButtonClick}
          />
        );
      })}
    </div>
  );
}

function ColorButton({
  colorId,
  isChosen,
  onClick,
}: {
  colorId: number;
  isChosen: boolean;
  onClick: (colorId: number) => void;
}) {
  return (
    <div
      className="color-button"
      style={{
        backgroundColor: getColorStyleValue(colorId),
        borderWidth: "0.25rem",
        borderColor: isChosen ? "white" : "transparent",
      }}
      onClick={() => onClick(colorId)}
    />
  );
}
