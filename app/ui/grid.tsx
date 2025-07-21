import { format } from "path";
import { Tile } from "./tile";
import flowerPattern from "@/app/patterns/flower.json";

// const rows: number = 5;
// const cols: number = 5;

export function Grid() {
  const { width, height, colors, grid } = flowerPattern;
  const formattedGrid = [];
  for (let i = 0; i < height; i++) {
    formattedGrid.push(grid.slice(i*width, i*width + width))
  }
  return (
    <div>
      {
        formattedGrid.map((row, y) => {
          return (
            <div className="flex" key={y}>
              {
                row.map((colorId, x) => <Tile key={x} colorId={colorId} />)
              }
            </div>
          )
        })
      }
    </div>
  )
}