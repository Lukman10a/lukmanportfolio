import React, { forwardRef } from "react";

interface MouseCircleProps {
  className?: string;
}

export const MouseCircle = forwardRef<HTMLDivElement, MouseCircleProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed w-10 h-10 bg-white bg-opacity-0 rounded-full z-50 transform transition-transform duration-300 ease-in-out ${className}`}
      />
    );
  }
);

MouseCircle.displayName = "MouseCircle";
