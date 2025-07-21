"use client";

import { useState } from "react";

export function Tile({ colorId }: { colorId: number }) {
    const [isFilled, setIsFilled] = useState(false);
    return (
        <div
            className="tile"
            style={{backgroundColor: isFilled ? "white" : "black"}}
            onClick={() => {
                setIsFilled(prevIsFilled => !prevIsFilled)
            }}
        />
    )
}