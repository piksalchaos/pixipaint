import { Tile } from "./tile";

const rows: number = 5;
const cols: number = 5;

export function Grid() {
  return (
    <div>
      {
        [...Array(rows)].map((_, row) => {
          return (
            <div className="flex">
              {
                [...Array(cols)].map((_, col) => {
                  return <Tile key={`${row}, ${col}`} />
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}