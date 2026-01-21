"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type HTMLMotionProps,
  type SpringOptions,
} from "motion/react";

import { getStrictContext } from "@/lib/get-strict-context";
import {
  Slot,
  type WithAsChild,
} from "@/components/animate-ui/primitives/animate/slot";

type CursorType =
  | "default"
  | "pointer"
  | "grab"
  | "loading"
  | "color-picker"
  | string; // Allowing custom cursor types

type CursorContextType = {
  cursorPos: { x: number; y: number };
  active: boolean;
  global: boolean;
  type?: CursorType;
  setType?: (type: CursorType) => void;
  isPressed?: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
  cursorRef: React.RefObject<HTMLDivElement | null>;
};

const [LocalCursorProvider, useCursor] =
  getStrictContext<CursorContextType>("CursorContext");

type CursorProviderProps = {
  children: React.ReactNode;
  global?: boolean;
};

function CursorProvider({ children, global = false }: CursorProviderProps) {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const [active, setActive] = React.useState(false);
  const [type, setType] = React.useState<CursorType>("default");
  const [isPressed, setIsPressed] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const cursorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const id = "__cursor_none_style__";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      .animate-ui-cursor-none, .animate-ui-cursor-none * { cursor: none !important; }
    `;
    document.head.appendChild(style);
  }, []);

  React.useEffect(() => {
    let removeListeners: () => void;

    const handlePointerDown = () => setIsPressed(true);
    const handlePointerUp = () => setIsPressed(false);

    if (global) {
      const handlePointerMove = (e: PointerEvent) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
        setActive(true);
      };

      const handlePointerOut = (e: PointerEvent | MouseEvent) => {
        if (e instanceof PointerEvent && e.relatedTarget === null) {
          setActive(false);
          setIsPressed(false);
        }
      };

      const handleVisibilityChange = () => {
        if (document.visibilityState === "hidden") {
          setActive(false);
          setIsPressed(false);
        }
      };

      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      window.addEventListener("pointerdown", handlePointerDown);
      window.addEventListener("pointerup", handlePointerUp);
      window.addEventListener("pointerout", handlePointerOut, {
        passive: true,
      });
      window.addEventListener("mouseout", handlePointerOut, { passive: true });
      document.addEventListener("visibilitychange", handleVisibilityChange);

      removeListeners = () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerdown", handlePointerDown);
        window.removeEventListener("pointerup", handlePointerUp);
        window.removeEventListener("pointerout", handlePointerOut);
        window.removeEventListener("mouseout", handlePointerOut);
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
      };
    } else {
      if (!containerRef.current) return;

      const parent = containerRef.current.parentElement;
      if (!parent) return;

      if (getComputedStyle(parent).position === "static") {
        parent.style.position = "relative";
      }

      const handlePointerMove = (e: PointerEvent) => {
        const rect = parent.getBoundingClientRect();
        setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setActive(true);
      };

      const handlePointerOut = (e: PointerEvent | MouseEvent) => {
        if (
          e.relatedTarget === null ||
          !(parent as Node).contains(e.relatedTarget as Node)
        ) {
          setActive(false);
          setIsPressed(false);
        }
      };

      parent.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      parent.addEventListener("pointerdown", handlePointerDown);
      parent.addEventListener("pointerup", handlePointerUp);
      parent.addEventListener("pointerout", handlePointerOut, {
        passive: true,
      });
      parent.addEventListener("mouseout", handlePointerOut, { passive: true });

      removeListeners = () => {
        parent.removeEventListener("pointermove", handlePointerMove);
        parent.removeEventListener("pointerdown", handlePointerDown);
        parent.removeEventListener("pointerup", handlePointerUp);
        parent.removeEventListener("pointerout", handlePointerOut);
        parent.removeEventListener("mouseout", handlePointerOut);
      };
    }

    return removeListeners;
  }, [global]);

  return (
    <LocalCursorProvider
      value={{
        cursorPos,
        active,
        global,
        type,
        setType,
        isPressed,
        containerRef,
        cursorRef,
      }}
    >
      {children}
    </LocalCursorProvider>
  );
}

type CursorContainerProps = WithAsChild<HTMLMotionProps<"div">>;

function CursorContainer({
  ref,
  asChild = false,
  ...props
}: CursorContainerProps) {
  const { containerRef, global, active, isPressed, type } = useCursor();
  React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  const Component = asChild ? Slot : motion.div;

  return (
    <Component
      ref={containerRef}
      data-slot="cursor-container"
      data-global={global}
      data-active={active}
      data-pressed={isPressed}
      data-type={type}
      {...props}
    />
  );
}

type CursorProps = WithAsChild<
  HTMLMotionProps<"div"> & {
    children: React.ReactNode;
  }
>;

function Cursor({ ref, asChild = false, style, ...props }: CursorProps) {
  const {
    cursorPos,
    active,
    containerRef,
    cursorRef,
    global,
    isPressed,
    type,
  } = useCursor();
  React.useImperativeHandle(ref, () => cursorRef.current as HTMLDivElement);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  React.useEffect(() => {
    const target = global
      ? document.documentElement
      : containerRef.current?.parentElement;

    if (!target) return;

    if (active) {
      target.classList.add("animate-ui-cursor-none");
    } else {
      target.classList.remove("animate-ui-cursor-none");
    }

    return () => {
      target.classList.remove("animate-ui-cursor-none");
    };
  }, [active, global, containerRef]);

  React.useEffect(() => {
    x.set(cursorPos.x);
    y.set(cursorPos.y);
  }, [cursorPos, x, y]);

  const Component = asChild ? Slot : motion.div;

  return (
    <AnimatePresence>
      {active && (
        <Component
          ref={cursorRef}
          data-slot="cursor"
          data-global={global}
          data-active={active}
          data-pressed={isPressed}
          data-type={type}
          style={{
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            zIndex: 9999,
            position: global ? "fixed" : "absolute",
            top: y,
            left: x,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

type CursorFollowSide = "top" | "right" | "bottom" | "left";
type CursorFollowAlign = "start" | "center" | "end";

type CursorFollowProps = WithAsChild<
  Omit<HTMLMotionProps<"div">, "transition"> & {
    side?: CursorFollowSide;
    sideOffset?: number;
    align?: CursorFollowAlign;
    alignOffset?: number;
    transition?: SpringOptions;
    children: React.ReactNode;
  }
>;

function CursorFollow({
  ref,
  asChild = false,
  side = "bottom",
  sideOffset = 0,
  align = "end",
  alignOffset = 0,
  style,
  transition = { stiffness: 500, damping: 50, bounce: 0 },
  ...props
}: CursorFollowProps) {
  const { cursorPos, active, cursorRef, global } = useCursor();
  const cursorFollowRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(
    ref,
    () => cursorFollowRef.current as HTMLDivElement,
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, transition);
  const springY = useSpring(y, transition);

  const calculateOffset = React.useCallback(() => {
    const rect = cursorFollowRef.current?.getBoundingClientRect();
    const width = rect?.width ?? 0;
    const height = rect?.height ?? 0;

    let offsetX = 0;
    let offsetY = 0;

    switch (side) {
      case "top":
        offsetY = height + sideOffset;
        switch (align) {
          case "start":
            offsetX = width + alignOffset;
            break;
          case "center":
            offsetX = width / 2;
            break;
          case "end":
            offsetX = -alignOffset;
            break;
        }
        break;

      case "bottom":
        offsetY = -sideOffset;
        switch (align) {
          case "start":
            offsetX = width + alignOffset;
            break;
          case "center":
            offsetX = width / 2;
            break;
          case "end":
            offsetX = -alignOffset;
            break;
        }
        break;

      case "left":
        offsetX = width + sideOffset;
        switch (align) {
          case "start":
            offsetY = height + alignOffset;
            break;
          case "center":
            offsetY = height / 2;
            break;
          case "end":
            offsetY = -alignOffset;
            break;
        }
        break;

      case "right":
        offsetX = -sideOffset;
        switch (align) {
          case "start":
            offsetY = height + alignOffset;
            break;
          case "center":
            offsetY = height / 2;
            break;
          case "end":
            offsetY = -alignOffset;
            break;
        }
        break;
    }

    return { x: offsetX, y: offsetY };
  }, [side, align, sideOffset, alignOffset]);

  React.useEffect(() => {
    const offset = calculateOffset();
    const cursorRect = cursorRef.current?.getBoundingClientRect();
    const cursorWidth = cursorRect?.width ?? 20;
    const cursorHeight = cursorRect?.height ?? 20;

    x.set(cursorPos.x - offset.x + cursorWidth / 2);
    y.set(cursorPos.y - offset.y + cursorHeight / 2);
  }, [calculateOffset, cursorPos, cursorRef, x, y]);

  const Component = asChild ? Slot : motion.div;

  return (
    <AnimatePresence>
      {active && (
        <Component
          ref={cursorFollowRef}
          data-slot="cursor-follow"
          data-global={global}
          data-active={active}
          style={{
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            zIndex: 9998,
            position: global ? "fixed" : "absolute",
            top: springY,
            left: springX,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...props}
        />
      )}
    </AnimatePresence>
  );
}

type CursorTriggerProps = WithAsChild<
  HTMLMotionProps<"div"> & {
    type: string;
  }
>;

function CursorTrigger({ asChild, type, ...props }: CursorTriggerProps) {
  const { setType, isPressed } = useCursor();

  const Component = asChild ? Slot : motion.div;

  return (
    <Component
      data-slot="cursor-trigger"
      data-pressed={isPressed}
      data-type={type}
      {...props}
      onPointerEnter={(e: React.PointerEvent<HTMLDivElement>) => {
        setType?.(type);
        props.onPointerEnter?.(e);
      }}
      onPointerLeave={(e: React.PointerEvent<HTMLDivElement>) => {
        setType?.("default");
        props.onPointerLeave?.(e);
      }}
    />
  );
}

export {
  CursorProvider,
  Cursor,
  CursorContainer,
  CursorFollow,
  CursorTrigger,
  useCursor,
  type CursorProviderProps,
  type CursorProps,
  type CursorContainerProps,
  type CursorFollowProps,
  type CursorTriggerProps,
  type CursorFollowAlign,
  type CursorFollowSide,
  type CursorContextType,
  type CursorType,
};
