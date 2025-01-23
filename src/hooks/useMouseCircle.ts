// hooks/useMouseCircle.ts
import { useRef, useState } from "react";
import gsap from "gsap";

export const useMouseCircle = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const [customClass, setCustomClass] = useState<string>("");

  const handleMouseMove = (e: MouseEvent) => {
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
    setCustomClass(customClassName);
    const circle = circleRef.current;
    console.log(circle);

    if (circle) {
      if (customAnimation) {
        customAnimation(circle); // Apply custom animation
      } else {
        gsap.to(circle, {
          duration: 0.25,
          scale: 1,
          autoAlpha: 1,
        });
      }
    }
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseOut = () => {
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
