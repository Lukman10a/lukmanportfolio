"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { X } from "lucide-react";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiMenu,
} from "react-icons/fi";

// Define navigation items
const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" }, // Added pricing to nav
];

// Social links
const socialLinks = [
  { name: "GitHub", icon: FiGithub, url: "https://github.com/Lukman10a/" },
  { name: "Twitter", icon: FiTwitter, url: "https://x.com/dashboard_exp" },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/abdulrauf-lukman-761095217/",
  },
  { name: "Email", icon: FiMail, url: "mailto:abdulrauflukman9@gmail.com" },
];

export function AnimatedNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect for navbar background
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, mounted]);

  // Close mobile menu on route change
  useEffect(() => {
    if (!mounted) return;

    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events, mounted]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!mounted || typeof document === "undefined") return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen, mounted]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="relative z-10">
              <div className="flex flex-col">
                <Link href="/" className="text-3xl font-bold tracking-tight">
                  LUKMAN
                </Link>
              </div>
            </div>
            <div className="relative z-50 w-12 h-12 flex items-center justify-center">
              <div className="text-black dark:text-white">
                <FiMenu className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        scrolled
          ? "bg-[#f8f4ec]/90 dark:bg-[#121212]/90 shadow-sm backdrop-blur-sm top-0"
          : "bg-transparent top-6"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <Link href="/" className="text-3xl font-bold tracking-tight">
              LUKMAN
            </Link>
          </motion.div>

          {/* Navigation Items - Center */}
          <nav className="sm:hidden md:flex items-center justify-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-brand",
                  pathname === item.href
                    ? "text-brand"
                    : "text-black dark:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links - Right */}
          <div className="sm:hidden flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:text-brand transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <motion.button
            className="relative z-50 sm:block hidden w-12 h-12 items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            whileHover="hover"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-black dark:text-white"
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-black dark:text-white"
                >
                  <FiMenu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Only visible on mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 dark:bg-black/95 backdrop-blur-lg z-40 sm:block"
            style={{ touchAction: "none" }}
          >
            <motion.div
              className="absolute top-0 right-0 left-0 bottom-0 w-full md:w-[500px] bg-[#f8f4ec] dark:bg-[#121212] p-8 flex flex-col justify-center"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                duration: 0.5,
              }}
              style={{ touchAction: "none" }}
            >
              <nav className="flex flex-col space-y-12 text-2xl font-bold mb-auto mt-20">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block hover:text-brand transition-colors duration-300",
                        pathname === item.href
                          ? "text-brand"
                          : "text-black dark:text-white"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Social Links */}
              <motion.div
                className="flex space-x-6 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-brand transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
