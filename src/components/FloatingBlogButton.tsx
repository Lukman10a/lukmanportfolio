import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";

export default function FloatingBlogButton() {
  const pathname = usePathname();
  
  // Hide the button if user is on blog pages
  const isOnBlogPage = pathname?.startsWith('/blog');
  
  // Debug log
  console.log('FloatingBlogButton - pathname:', pathname, 'isOnBlogPage:', isOnBlogPage);
  
  if (isOnBlogPage) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-24 sm:top-24 right-6 z-[9999] block"
    >
      <Link href="/blog">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -8, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="bg-brand text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center relative overflow-hidden"
        >
          {/* Floating glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-brand/20 to-brand/40 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 flex items-center">
            <BookOpen className="w-5 h-5" />
            <span className="ml-2 text-sm font-medium">Blog</span>
          </div>
        </motion.button>
      </Link>
    </motion.div>
  );
} 