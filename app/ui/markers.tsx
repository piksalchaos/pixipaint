import { getColorStyleValue } from "../lib/color-style";
import styles from "./game.module.css";

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
    <div className={styles.columnMarkers}>
      {columnMarkers.map((columnMarker, column) => {
        return (
          <div
            key={column}
            className={styles.columnMarker}
            style={{
              backgroundColor:
                column % 2 == 0
                  ? "var(--highlight-med)"
                  : "var(--highlight-low)",
            }}
          >
            <MarkerNumbers markerData={columnMarker} />
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
    <div className={styles.rowMarkers}>
      {rowMarkers.map((rowMarker, row) => {
        return (
          <div
            key={row}
            className={styles.rowMarker}
            style={{
              backgroundColor:
                row % 2 == 0 ? "var(--highlight-med)" : "var(--highlight-low)",
            }}
          >
            <MarkerNumbers markerData={rowMarker} />
          </div>
        );
      })}
    </div>
  );
}

function MarkerNumbers({
  markerData,
}: {
  markerData: Array<{ count: number; groups: number }>;
}) {
  return markerData.map(({ count, groups }, colorId) => {
    if (count > 0) {
      return (
        <MarkerNumber
          key={colorId}
          count={count}
          groups={groups}
          colorId={colorId}
        />
      );
    }
  });
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
    <div className={styles.markerNumber}>
      <p
        className={styles.markerNumberCount}
        style={{ color: getColorStyleValue(colorId) }}
      >
        {count}
      </p>
      {groups > 1 ? (
        <p className={styles.markerNumberGroups}>{groups}</p>
      ) : null}
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
