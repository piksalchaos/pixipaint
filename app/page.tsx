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
    <div>
      <Grid pattern={flowerPattern} />
      <Palette
        colorAmount={flowerPattern.colors.length}
        chosenColorId={chosenColorId}
        onColorButtonClick={(colorId) => {
          setChosenColorId(colorId);
        }}
      />
    </div>
  );
}
