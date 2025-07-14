import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen } from "lucide-react";

export default function FloatingBlogButton() {
  const pathname = usePathname();
  
  // Hide the button if user is on blog pages
  const isOnBlogPage = pathname?.startsWith('/blog');
  
  if (isOnBlogPage) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-24 right-6 z-50 sm:hidden"
    >
      <Link href="/blog">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        >
          <BookOpen className="w-5 h-5" />
          <span className="ml-2 text-sm font-medium">Blog</span>
        </motion.button>
      </Link>
    </motion.div>
  );
} 