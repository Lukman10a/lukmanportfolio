// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export const useMouseCircle = (items: React.RefObject<HTMLDivElement[]>) => {
//   const buttonRef = useRef<HTMLDivElement>(null);
//   const buttonTextRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const buttonText = buttonTextRef.current;

//     const moveCircle = (e: MouseEvent) => {
//       gsap.to(button, {
//         duration: 0.25,
//         css: {
//           left: e.clientX,
//           top: e.clientY,
//           display: "flex",
//         },
//       });
//     };

//     const handleMouseOver = () => {
//       gsap.to(button, {
//         duration: 0.25,
//         scale: 1,
//         autoAlpha: 1,
//       });
//     };

//     const handleMouseOut = () => {
//       gsap.to(button, {
//         duration: 0.25,
//         scale: 0.5,
//         autoAlpha: 0,
//       });
//     };

//     const handleMouseDown = () => {
//       gsap.to(button, {
//         duration: 0.5,
//         css: { transform: `translate(-50%, -50%) scale(0.75)` },
//       });
//       gsap.to(buttonText, {
//         duration: 0.25,
//         css: { opacity: 1 },
//       });
//     };

//     const handleMouseUp = () => {
//       gsap.to(button, {
//         duration: 1,
//         css: { background: `transparent` },
//       });
//       gsap.to(button, {
//         duration: 0.5,
//         css: { transform: `translate(-50%, -50%) scale(1)` },
//       });
//       gsap.to(buttonText, {
//         duration: 0.25,
//         css: { opacity: 1 },
//       });
//     };

//     const elements = items.current || [];
//     elements.forEach((el) => {
//       el?.addEventListener("mouseover", handleMouseOver);
//       el?.addEventListener("mouseout", handleMouseOut);
//       el?.addEventListener("mousedown", handleMouseDown);
//       el?.addEventListener("mouseup", handleMouseUp);
//     });

//     document.addEventListener("mousemove", moveCircle);

//     return () => {
//       elements.forEach((el) => {
//         el?.removeEventListener("mouseover", handleMouseOver);
//         el?.removeEventListener("mouseout", handleMouseOut);
//         el?.removeEventListener("mousedown", handleMouseDown);
//         el?.removeEventListener("mouseup", handleMouseUp);
//       });
//       document.removeEventListener("mousemove", moveCircle);
//       gsap.killTweensOf(button);
//       gsap.killTweensOf(buttonText);
//     };
//   }, [items]);

//   return { buttonRef, buttonTextRef };
// };

// hooks/useMouseCircle.ts
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export const useMouseCircle = () => {
//   const circleRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       gsap.to(circleRef.current, {
//         duration: 0.25,
//         css: {
//           left: e.clientX,
//           top: e.clientY,
//           display: "flex",
//         },
//       });
//     };

//     const handleMouseOver = () => {
//       gsap.to(circleRef.current, {
//         duration: 0.25,
//         scale: 1,
//         autoAlpha: 1,
//       });
//     };

//     const handleMouseOut = () => {
//       gsap.to(circleRef.current, {
//         duration: 0.25,
//         scale: 0.5,
//         autoAlpha: 0,
//       });
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseover", handleMouseOver);
//     document.addEventListener("mouseout", handleMouseOut);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseover", handleMouseOver);
//       document.removeEventListener("mouseout", handleMouseOut);
//     };
//   }, []);

//   return circleRef;
// };

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

  const handleMouseOver = (customClassName: string) => {
    setCustomClass(customClassName); // Update class for specific styles
    gsap.to(circleRef.current, {
      duration: 0.25,
      scale: 1,
      autoAlpha: 1,
    });
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseOut = () => {
    setCustomClass(""); // Reset custom class
    gsap.to(circleRef.current, {
      duration: 0.25,
      scale: 0.5,
      autoAlpha: 0,
    });
    document.removeEventListener("mousemove", handleMouseMove);
  };

  return { circleRef, handleMouseOver, handleMouseOut, customClass };
};
