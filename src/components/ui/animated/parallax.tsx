"use client";

import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  offset = 50,
  className = "",
  direction = "vertical",
  reverse = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const calculateRange = (start: number, end: number) =>
    reverse ? [end, start] : [start, end];

  // Always define the transformations for both directions
  const transformY = useTransform(
    scrollYProgress,
    [0, 1],
    calculateRange(offset, -offset)
  );
  const transformX = useTransform(
    scrollYProgress,
    [0, 1],
    calculateRange(offset, -offset)
  );

  // Choose the transform style based on direction
  const transform =
    direction === "vertical" ? { y: transformY } : { x: transformX };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={transform}>{children}</motion.div>
    </div>
  );
};
