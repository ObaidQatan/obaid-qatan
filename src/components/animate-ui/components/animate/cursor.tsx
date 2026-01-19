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

const PointerCursor: React.FC<CursorVariantProps> = ({ isPressed }) => (
  <motion.div
    animate={{ scale: isPressed ? 0.6 : 1 }}
    className={cn(
      "rounded-full border-2 border-foreground transition-colors",
      isPressed ? "bg-foreground size-3" : "bg-background/20 size-4",
    )}
  />
);

const GrabCursor: React.FC<CursorVariantProps> = ({ isPressed }) => (
  <span className="text-xl select-none">{isPressed ? "✊" : "🖐️"}</span>
);

const LoadingCursor: React.FC<CursorVariantProps> = () => (
  <div className="size-full rounded-full border-2 border-t-transparent border-foreground animate-spin" />
);

const ColorPickerCursor: React.FC<CursorVariantProps> = () => (
  <div className="size-5 border-2 border-foreground shadow-sm bg-gradient-to-tr from-red-500 to-blue-500 rounded-sm" />
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
