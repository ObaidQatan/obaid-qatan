import { useEffect } from "react";

/**
 * Ensures body doesnt have pointer-event-none style due to UI library effect like Radix.
 */
function PointerEffectGuard({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    // store the inital value first and reset it on component unmount
    const initialPointerEvents = document.body.style.pointerEvents;
    document.body.style.pointerEvents = "auto";
    return () => {
      document.body.style.pointerEvents = initialPointerEvents;
    };
  }, []);
  return <>{children}</>;
}

export default PointerEffectGuard;
