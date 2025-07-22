"use client";
import { useState, useEffect } from "react";
import { Grid } from "./ui/grid";
import { Palette } from "./ui/palette";
import flowerPattern from "@/app/patterns/flower.json";
import { defineColorStyleVariables } from "./lib/color-style";

export default function Home() {
  useEffect(() => {
    defineColorStyleVariables(flowerPattern.colors);
  });

  let [chosenColorId, setChosenColorId] = useState(0);
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
      <Grid pattern={flowerPattern} chosenColorId={chosenColorId} />
      <Palette
        colorAmount={flowerPattern.colors.length}
        chosenColorId={chosenColorId}
        handleColorSelected={(colorId) => {
          setChosenColorId(colorId);
        }}
      />
    </div>
  );
}
