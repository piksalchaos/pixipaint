import { getColorStyleValue } from "../lib/color-style";

export function ColumnMarkers({
  width,
  height,
  grid,
}: {
  width: number;
  height: number;
  grid: number[];
}) {
  const columns = [];
  for (let row = 0; row < height; row++) {
    columns.push(grid.filter((_, index) => index % width === row));
  }
  const maxColorId = Math.max(...grid);
  const columnMarkers = createMarkers(columns, maxColorId);

  return (
    <div
      style={{
        gridArea: "columnMarkers",
        display: "flex",
      }}
    >
      {columnMarkers.map((columnMarker, column) => {
        return (
          <div
            key={column}
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              borderWidth: "2px",
              width: "100%",
              alignItems: "center",
            }}
          >
            {columnMarker.map(({ count, groups }, colorId) => (
              <MarkerNumber count={count} groups={groups} colorId={colorId} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

export function RowMarkers({
  width,
  height,
  grid,
}: {
  width: number;
  height: number;
  grid: number[];
}) {
  const rows = [];
  for (let column = 0; column < width; column++) {
    rows.push(grid.slice(column * width, column * width + width));
  }
  const maxColorId = Math.max(...grid);
  const rowMarkers = createMarkers(rows, maxColorId);

  return (
    <div
      style={{
        gridArea: "rowMarkers",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {rowMarkers.map((rowMarker, row) => {
        return (
          <div
            key={row}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              borderWidth: "2px",
              height: "100%",
              alignItems: "center",
            }}
          >
            {rowMarker.map(({ count, groups }, colorId) => (
              <MarkerNumber count={count} groups={groups} colorId={colorId} />
            ))}
          </div>
        );
      })}
    </div>
  );
}

function MarkerNumber({
  count,
  groups,
  colorId,
}: {
  count: number;
  groups: number;
  colorId: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "4rem",
        height: "4rem",
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: "0.1rem",
      }}
    >
      <p
        style={{
          color: getColorStyleValue(colorId),
          fontSize: "2rem",
        }}
      >
        {count}
      </p>
    </div>
  );
}

function createMarkers(colorIdArrays: number[][], maxColorId: number) {
  const markers = [];

  for (const colorIds of colorIdArrays) {
    const marker = [];
    for (let colorId = 0; colorId <= maxColorId; colorId++) {
      marker.push({
        count: 0,
        groups: 0,
      });
    }
    for (let i = 0; i < colorIds.length; i++) {
      const colorId = colorIds[i];
      marker[colorId].count++;
      if (i === 0 || colorId !== colorIds[i - 1]) {
        marker[colorId].groups++;
      }
    }
    markers.push(marker);
  }

  return markers;
}
