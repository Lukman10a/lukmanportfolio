import { useEffect, useState } from "react";

interface Dimension {
  width: number;
  height: number;
}

export default function useDimension(): Dimension {
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const resize = (): void => {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      setDimension({
        width: innerWidth,
        height: innerHeight,
      });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return dimension;
}
