import { useMotionValue, MotionValue } from "framer-motion";
import { useEffect, useCallback } from "react";

interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export default function useMouse(): MousePosition {
  const mouse: MousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  // Use useCallback to memoize the mouseMove function
  const mouseMove = useCallback(
    (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX);
      mouse.y.set(clientY);
    },
    [mouse.x, mouse.y]
  ); // Include mouse.x and mouse.y as dependencies

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseMove]); // Add mouseMove to the dependency array

  return mouse;
}
