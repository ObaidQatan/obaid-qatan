"use client";

import {
  CursorProvider as CursorProviderPrimitive,
  Cursor as CursorPrimitive,
  CursorFollow as CursorFollowPrimitive,
  CursorContainer as CursorContainerPrimitive,
  type CursorProviderProps as CursorProviderPropsPrimitive,
  type CursorContainerProps as CursorContainerPropsPrimitive,
  type CursorProps as CursorPropsPrimitive,
  type CursorFollowProps as CursorFollowPropsPrimitive,
  type CursorContextType as CursorContextTypePrimitive,
  useCursor,
} from "@/components/animate-ui/primitives/animate/cursor";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

type CursorProviderProps = Omit<CursorProviderPropsPrimitive, "children"> &
  CursorContainerPropsPrimitive;

type CursorVariantProps = Pick<
  CursorContextTypePrimitive,
  "type" | "isPressed"
>;

function CursorProvider({ global, ...props }: CursorProviderProps) {
  return (
    <CursorProviderPrimitive global={global}>
      <CursorContainerPrimitive {...props} />
    </CursorProviderPrimitive>
  );
}

type CursorProps = Omit<CursorPropsPrimitive, "children" | "asChild">;

function Cursor({ className, ...props }: CursorProps) {
  const { type } = useCursor();

  return (
    <CursorPrimitive asChild {...props}>
      <div
        className={cn(
          "flex items-center justify-center size-6 text-foreground",
          className,
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={type}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center size-full"
          >
            <CursorContent />
          </motion.div>
        </AnimatePresence>
      </div>
    </CursorPrimitive>
  );
}

type CursorFollowProps = Omit<CursorFollowPropsPrimitive, "asChild">;

function CursorFollow({
  className,
  children,
  sideOffset = 15,
  alignOffset = 5,
  ...props
}: CursorFollowProps) {
  return (
    <CursorFollowPrimitive
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      asChild
      {...props}
    >
      <div
        className={cn(
          "bg-foreground rounded-md text-background px-2 py-1 text-sm",
          className,
        )}
      >
        {children}
      </div>
    </CursorFollowPrimitive>
  );
}

const DefaultArrow: React.FC<CursorVariantProps> = () => (
  <svg
    className="size-full"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
    />
  </svg>
);

const LoadingCursor: React.FC<CursorVariantProps> = () => (
  <div className="size-full rounded-full border-3 border-t-transparent border-foreground animate-spin" />
);

const GrabCursor: React.FC<CursorVariantProps> = ({ isPressed }) => {
  if (isPressed) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 50 50"
        style={{ shapeRendering: "geometricPrecision" }}
      >
        <path
          fill="currentColor"
          d="M 20.5,7.5 C 22.1667,7.5 23.8333,7.5 25.5,7.5C 25.1924,9.92397 25.5258,12.2573 26.5,14.5C 27.4656,12.604 27.7989,10.604 27.5,8.5C 29.1667,8.5 30.8333,8.5 32.5,8.5C 32.1924,10.924 32.5258,13.2573 33.5,15.5C 34.4519,13.9547 34.7852,12.288 34.5,10.5C 36.1667,10.5 37.8333,10.5 39.5,10.5C 39.6665,19.8393 39.4998,29.1726 39,38.5C 35.2491,41.981 30.7491,43.3143 25.5,42.5C 17.3752,43.8913 12.2085,40.5579 10,32.5C 9.33333,29.1667 9.33333,25.8333 10,22.5C 13.1427,18.8718 14.3094,14.5385 13.5,9.5C 15.1667,9.5 16.8333,9.5 18.5,9.5C 18.2011,11.604 18.5344,13.604 19.5,15.5C 20.48,12.9135 20.8134,10.2469 20.5,7.5 Z"
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 50 50"
      style={{ shapeRendering: "geometricPrecision" }}
    >
      <path
        fill="currentColor"
        d="M 22.5,-0.5 C 24.1667,-0.5 25.8333,-0.5 27.5,-0.5C 27.1694,6.86348 27.5027,14.1968 28.5,21.5C 29.4967,14.8665 29.83,8.19979 29.5,1.5C 31.1667,1.5 32.8333,1.5 34.5,1.5C 34.1697,8.53157 34.503,15.5316 35.5,22.5C 36.4948,17.2079 36.8282,11.8746 36.5,6.5C 38.1667,6.5 39.8333,6.5 41.5,6.5C 41.6666,19.5043 41.4999,32.5043 41,45.5C 39.6032,47.0703 38.1032,48.4036 36.5,49.5C 30.8333,49.5 25.1667,49.5 19.5,49.5C 13.9329,42.7097 8.59962,35.7097 3.5,28.5C 4.53877,24.8507 6.8721,23.684 10.5,25C 12.3589,26.5578 13.8589,28.3911 15,30.5C 15.4998,21.5062 15.6664,12.5062 15.5,3.5C 17.1667,3.5 18.8333,3.5 20.5,3.5C 20.1703,9.86818 20.5037,16.2015 21.5,22.5C 22.4975,14.8622 22.8308,7.19552 22.5,-0.5 Z"
      />
    </svg>
  );
};

const ColorPickerCursor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 64 64"
    style={{ shapeRendering: "geometricPrecision" }}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M 49.5,2.5 C 58.6439,3.79771 61.8106,8.79771 59,17.5C 54.6667,21.8333 50.3333,26.1667 46,30.5C 45.4926,31.9961 45.9926,33.1627 47.5,34C 46.3333,35.1667 45.1667,36.3333 44,37.5C 43.1627,35.9926 41.9961,35.4926 40.5,36C 34.8333,41.6667 29.1667,47.3333 23.5,53C 19.8332,54.1043 16.4999,55.7709 13.5,58C 5.77764,59.6135 2.94431,56.7802 5,49.5C 7.22907,46.5001 8.89573,43.1668 10,39.5C 15.6667,33.8333 21.3333,28.1667 27,22.5C 27.5074,21.0039 27.0074,19.8373 25.5,19C 26.6667,17.8333 27.8333,16.6667 29,15.5C 29.8373,17.0074 31.0039,17.5074 32.5,17C 37.5301,11.1143 43.1968,6.281 49.5,2.5 Z M 30.5,25.5 C 33.9754,26.8018 36.1421,29.1351 37,32.5C 31.5,38 26,43.5 20.5,49C 16.7061,49.6058 13.3728,51.1058 10.5,53.5C 9.52437,51.8767 10.0244,50.5433 12,49.5C 12.5112,47.1218 13.1779,44.7885 14,42.5C 19.7029,36.9647 25.2029,31.2981 30.5,25.5 Z"
    />
  </svg>
);

const PointerCursor: React.FC<CursorVariantProps> = ({ isPressed }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 72 72"
    style={{
      transition: "transform 0.1s ease",
      transform: isPressed ? "translateX(-2px) rotate(-2deg)" : "none",
    }}
  >
    <path
      fill="currentColor"
      d="M36,41c-0.552,0-1,0.448-1,1c0,0.186,0,7.814,0,8c0,0.552,0.448,1,1,1s1-0.448,1-1c0-0.186,0-7.814,0-8C37,41.448,36.552,41,36,41z M41,41c-0.552,0-1,0.448-1,1c0,0.186,0,7.814,0,8c0,0.552,0.448,1,1,1s1-0.448,1-1c0-0.186,0-7.814,0-8C42,41.448,41.552,41,41,41z M46,41c-0.552,0-1,0.448-1,1c0,0.186,0,7.814,0,8c0,0.552,0.448,1,1,1s1-0.448,1-1c0-0.186,0-7.814,0-8C47,41.448,46.552,41,46,41z M57.506,26.099C60.221,27.004,61,28.729,61,31.804c0,0.294-0.005,4.756-0.005,5.717c0,12.368-6.518,12.607-6.518,19.071c0,1.714,0.127,3.426-0.25,4.008S53.542,62,51.783,62c-0.136,0-4.632,0-4.782,0c-3.221,0-4.983-2.44-4.983-2.44S39.806,62,37.638,62c-1.006,0-6.195,0-7.828,0c-0.396,0-1.939-0.444-2.527-1.402c-0.974-1.585-0.161-3.034-0.974-4.79c-0.916-1.978-5.546-4.202-8.121-11.226c-2.734-7.455-6.61-6.977-6.61-10.77c0-3.768,2.77-5.338,4.644-5.338c4.87,0,7.586,3.465,7.586,3.465s-3.452-10.102-4.073-12.23c-1.287-4.404-0.016-8.35,3.98-9.217c4.594-0.997,6.618,2.786,7.332,4.703c0.826,2.219,3.251,8.56,3.251,8.56s2.652-1.214,4.884-0.74c2.422,0.514,3.391,1.856,3.391,1.856s2.147-1.887,5.672-1.23c3.323,0.62,4.55,3.164,4.55,3.164S55.332,25.374,57.506,26.099z"
    />
  </svg>
);

// The "Strategy" component: This handles the conditional logic outside the main Cursor component, keeping the pressed state optionally internal to the cursor component itself.
function CursorContent() {
  const { type, isPressed } = useCursor();

  switch (type) {
    case "pointer":
      return <PointerCursor isPressed={isPressed} />;
    case "grab":
      return <GrabCursor isPressed={isPressed} />;
    case "loading":
      return <LoadingCursor />;
    case "color-picker":
      return <ColorPickerCursor />;
    default:
      return <DefaultArrow />;
  }
}

export {
  CursorProvider,
  Cursor,
  CursorFollow,
  type CursorProviderProps,
  type CursorProps,
  type CursorFollowProps,
};
