export function ColumnMarkers({
  width,
  height,
  grid,
}: {
  width: number;
  height: number;
  grid: number[];
}) {
  const columns = []
  for (let i = 0; i < height; i++) {
    .push(grid.slice(i * width, i * width + width));
  }
  return (
    <div
      style={{
        gridArea: "columnMarkers",
        backgroundColor: "pink",
        display: "flex",
        height: "8rem",
      }}
    ></div>
  );
}

export function RowMarkers() {
  return (
    <div
      style={{
        gridArea: "rowMarkers",
        backgroundColor: "red",
        width: "8rem",
      }}
    ></div>
  );
}
