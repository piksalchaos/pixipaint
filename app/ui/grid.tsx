import { GridPattern } from "../lib/definitions";
import { Tile } from "./tile";

export function Grid({ pattern }: { pattern: GridPattern }) {
  const { width, height, colors, grid } = pattern;
  const formattedGrid = [];
  for (let i = 0; i < height; i++) {
    formattedGrid.push(grid.slice(i * width, i * width + width));
  }
  return (
    <div>
      {formattedGrid.map((row, y) => {
        return (
          <div className="flex" key={y}>
            {row.map((colorId, x) => (
              <Tile key={x} colorId={colorId} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
