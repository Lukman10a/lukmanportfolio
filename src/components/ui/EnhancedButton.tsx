import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface EnhancedButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const EnhancedButton = ({
  href,
  children,
  className,
  variant = "primary",
  icon,
  iconPosition = "right",
}: EnhancedButtonProps) => {
  return (
    <Link href={href} className="inline-block">
      <motion.button
        className={cn(
          "relative px-6 py-2.5 text-sm font-medium tracking-wide rounded-md transition-all duration-300 overflow-hidden group",
          variant === "primary" 
            ? "bg-brand text-white hover:bg-brand/90" 
            : "bg-transparent border-2 border-brand text-black dark:text-white hover:text-white",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {variant === "outline" && (
          <span className="absolute inset-0 w-0 bg-brand transition-all duration-300 group-hover:w-full" />
        )}
        
        <span className="relative flex items-center justify-center gap-2">
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </span>
      </motion.button>
    </Link>
  );
};

export default EnhancedButton; 