// import React, { forwardRef } from "react";

// export const MouseCircle = forwardRef<HTMLDivElement>((_, ref) => (
//   <div
//     ref={ref}
//     className="pointer-events-none fixed -translate-x-2/4 -translate-y-2/4 justify-center items-center w-[120px] h-[120px] hidden rounded-full border-[1.5px] border-solid border-black text-black left-2/4 top-2/4 font-graphik focus:outline-0"
//   >
//     <div className="text-white">Click</div>
//   </div>
// ));
// MouseCircle.displayName = "MouseCircle";

// components/ui/MouseCircle.tsx
import React, { forwardRef } from "react";

interface MouseCircleProps {
  className?: string;
}

export const MouseCircle = forwardRef<HTMLDivElement, MouseCircleProps>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={`fixed w-10 h-10 bg-blue-500 rounded-full pointer-events-none z-50 transform transition-transform duration-300 ease-in-out ${className}`}
      />
    );
  }
);

MouseCircle.displayName = "MouseCircle";
