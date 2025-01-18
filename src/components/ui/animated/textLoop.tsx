"use client";

import { Children, useEffect, useState } from "react";

import { AnimatePresence, motion, Transition, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
  preset?: PresetName;
};

type PresetName =
  | "fade"
  | "slide"
  | "slide-up"
  | "bounce"
  | "scale"
  | "rotate"
  | "zoom"
  | "flip"
  | "blur"
  | "swing";

const presets: Record<PresetName, TextLoopProps["variants"]> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
  },
  "slide-up": {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  },
  bounce: {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    exit: { y: -20, opacity: 0 },
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
  },
  zoom: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.5, opacity: 0 },
  },
  flip: {
    initial: { rotateY: -180, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: 180, opacity: 0 },
  },
  rotate: {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 90, opacity: 0 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(8px)" },
  },
  swing: {
    initial: { rotate: -10, opacity: 0 },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    exit: { rotate: 10, opacity: 0 },
  },
};

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
  preset = "bounce",
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const intervalMs = interval * 1000;

    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, intervalMs);
    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  const motionVariants = presets[preset];

  return (
    <div className={cn("relative inline-block whitespace-nowrap", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
