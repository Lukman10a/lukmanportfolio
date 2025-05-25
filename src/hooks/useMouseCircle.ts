// hooks/useMouseCircle.ts
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

export const useMouseCircle = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [customClass, setCustomClass] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!mounted || typeof window === "undefined") return;
    
    gsap.to(circleRef.current, {
      duration: 0.25,
      css: {
        left: e.clientX,
        top: e.clientY,
        display: "flex",
      },
    });
  };

  const handleMouseOver = (
    customClassName: string,
    customAnimation?: (circle: HTMLDivElement) => void
  ) => {
    if (!mounted || typeof document === "undefined") return;
    
    setCustomClass(customClassName);
    const circle = circleRef.current;

    if (circle) {
      if (customAnimation) {
        customAnimation(circle); // Apply custom animation
      } else {
        gsap.to(circle, {
          duration: 0.25,
          scale: 1,
          autoAlpha: 1,
          borderColor: "white",
          borderWidth: 6,
          borderStyle: "solid",
        });
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseOut = () => {
    if (!mounted || typeof document === "undefined") return;
    
    setCustomClass("");
    gsap.to(circleRef.current, {
      duration: 0.25,
      scale: 0.5,
      autoAlpha: 0,
    });
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return { circleRef, handleMouseOver, handleMouseOut, customClass };
};
