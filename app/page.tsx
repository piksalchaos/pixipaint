import { Game } from "./ui/game";

import flowerPattern from "@/app/patterns/flower.json";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Game pattern={flowerPattern} />
    </div>
  );
}
