"use client";

import React from "react";

import { ClassValue } from "clsx";
import { HTMLMotionProps, motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface HighlightTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
  className?: string;
  highlightColor?: string;
  once?: boolean;
  amount?: number;
  delay?: number;
  highlightClassName?: ClassValue | string;
  highlightHeight?: string;
}

const HighlightedText: React.FC<HighlightTextProps> = ({
  children,
  className = "",
  highlightColor = "rgb(254, 215, 170, 0.5)",
  once = true,
  amount = 0.5,
  delay = 0.2,
  highlightClassName = "",
  highlightHeight = "4px",
  ...motionProps
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.span
      ref={ref}
      // initial={{ color: "transparent" }}
      // animate={isInView ? { color: "currentColor" } : {}}
      className={`relative isolate inline-block ${className}`}
      transition={{ duration: 0.5, delay }}
      {...motionProps}
    >
      {children}
      <motion.span
        className={cn(
          `absolute bottom-0 left-0 w-full origin-left`,
          highlightClassName
        )}
        style={{
          height: highlightHeight,
          backgroundColor: highlightColor,
        }}
        initial={{ color: "transparent", scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      />
    </motion.span>
  );
};

// Preset colors with elegant, slightly muted tones
const highlightColors = {
  yellow: "rgb(254, 240, 138, 0.5)", // Softer yellow
  blue: "rgb(147, 197, 253, 0.5)", // Soft blue
  green: "rgb(134, 239, 172, 0.5)", // Soft green
  pink: "rgb(254, 205, 211, 0.5)", // Soft pink
  purple: "rgb(216, 180, 254, 0.5)", // Soft purple
  orange: "rgb(254, 215, 170, 0.5)", // Soft orange
} as const;

// Demo component to show different animation styles

export { HighlightedText, highlightColors };
