import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  // Check for system preference and stored preference
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check for stored theme preference or use system preference
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
  }, []);

  // Update the DOM when theme changes
  useEffect(() => {
    // Update <html> class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-2 rounded-full bg-white dark:bg-black shadow-lg border border-gray-200 dark:border-gray-800"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === "light" ? 0 : 180,
          scale: theme === "light" ? 1 : 0.5
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-brand" />
        ) : (
          <Moon className="h-5 w-5 text-brand" />
        )}
      </motion.div>
    </motion.button>
  );
} 