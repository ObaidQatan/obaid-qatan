"use client";
import { random } from "lodash";
import { useMemo, useState } from "react";

const Star = () => {
  const [x] = useState(random(true) * window.innerWidth);
  const [y] = useState(random(true) * window.innerHeight);
  const [size] = useState(random(true) * 2);
  const [color] = useState(
    `#${Math.floor(random(true) * 16777215).toString(16)}`,
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
