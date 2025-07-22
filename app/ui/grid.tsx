import { GridPattern } from "../lib/definitions";
import { ColumnMarkers, RowMarkers } from "./markers";
import { Tile } from "./tile";

export function Grid({
  pattern,
  chosenColorId,
  handleTileMistake,
}: {
  pattern: GridPattern;
  chosenColorId: number;
  handleTileMistake: () => void;
}) {
  const { width, height, grid } = pattern;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: "'. columnMarkers' 'rowMarkers tiles'",
        justifyContent: "center",
      }}
    >
      <ColumnMarkers width={width} height={height} grid={grid} />
      <RowMarkers width={width} height={height} grid={grid} />
      <div
        style={{
          gridArea: "tiles",
          display: "grid",
          gridTemplateColumns: `repeat(${width}, 6rem)`,
          gridTemplateRows: `repeat(${height}, 6rem)`,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {grid.map((colorId, i) => {
          return (
            <Tile
              key={i}
              colorId={colorId}
              chosenColorId={chosenColorId}
              handleMistake={handleTileMistake}
            />
          );
        })}
      </div>
    </div>
  );
}
