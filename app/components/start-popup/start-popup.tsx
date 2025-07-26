import styles from "./start-popup.module.css";
import patterns from "@/app/patterns/patterns.json";
import Image from "next/image";

export function StartPopup({
  isVisible,
  handleButtonClick,
}: {
  isVisible: boolean;
  handleButtonClick: (patternIndex: number) => void;
}) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  console.log("current day", currentDay);
  console.log("current month and year", currentMonth, currentYear);
  return (
    <div className={styles.container} style={{ opacity: isVisible ? 1 : 0 }}>
      <p>
        <b>PIXIPAINT</b>
      </p>
      <p>color every tile to win!</p>
      <p className="text-sm">
        this is a demo. As of right now the everything is super unpolished and
        scuffed, but it may be better in the future (if I decide to go back on
        this project, which is a little unlikely).
      </p>
      <div className="flex w-full">
        <div className="m-4">
          <Image
            src="/instructions-1.png"
            alt="Instructions"
            width={327}
            height={254}
            className="h-70"
          />
          <p className="text-lg">
            numbers indicate how many tiles of that color are in a row/column
          </p>
        </div>
        <div className="m-4">
          <Image
            src="/instructions-2.png"
            alt="Instructions"
            width={408}
            height={300}
            className="h-70"
          />
          <p className="text-lg">
            subscripts indicate how many separate groups a color has in a
            row/column
          </p>
        </div>
      </div>

      <div className={styles.dayButtons}>
        {patterns.map((_, index) => (
          <button
            key={index}
            disabled={
              currentDay < 23 + index &&
              currentMonth <= 7 &&
              currentYear <= 2025
            }
            onClick={() => handleButtonClick(index)}
          >
            Day {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
