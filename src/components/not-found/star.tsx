"use client";

import { random } from "lodash";
import { useMemo, useState } from "react";

const getRandomPosition = () => {
  if (typeof window === "undefined") return { x: 0, y: 0 };

  return {
    x: random(true) * window.innerWidth,
    y: random(true) * window.innerHeight,
  };
};

const Star = () => {
  const [{ x, y }] = useState(getRandomPosition);

  const [size] = useState(() => random(true) * 2);
  const [color] = useState(
    () => `#${Math.floor(random(true) * 16777215).toString(16)}`,
  );

  return useMemo(
    () => (
      <div
        style={{
          position: "absolute",
          top: y,
          left: x,
          width: size,
          height: size,
          background: color,
        }}
      />
    ),
    [x, y, size, color],
  );
};

export default Star;
