import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "./ui/animated/typewriter";
import { TextLoop } from "./ui/animated/textLoop";
import EnhancedButton from "./ui/EnhancedButton";
import { ArrowRight, Download, DollarSign } from "lucide-react";

export default function EnhancedHero() {
  const [text, setText] = useState(false);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-[#f8f4ec] dark:bg-[#1a1a2e] bg-grain min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-brand/10 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gradient-to-tl from-brand/15 to-transparent blur-3xl" />
      
      {/* Decorative grid pattern (similar to the image) */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-grid-pattern opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Small subtitle at top */}
          <motion.p
            variants={item}
            className="text-xs md:text-sm sm:text-xs font-medium tracking-wider uppercase text-black/70 dark:text-white/70 mb-6"
          >
            Portfolio By Lukman @ Frontend Engineer
          </motion.p>
          
          {/* Large heading */}
          <motion.h1 
            variants={item} 
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            <div>
              <span className="text-brand sm:text-6xl">Frontend</span>
            </div>
            <div className="text-black sm:text-6xl dark:text-white">
              Developer.
            </div>
          </motion.h1>
          
          {/* Paragraph */}
          <motion.div 
            variants={item}
            className="text-xl md:text-2xl sm:text-base text-black/70 dark:text-white/70 mb-6 max-w-2xl mx-auto"
          >
            <Typewriter
              text="I build high-performing, responsive interfaces"
              delay={40}
              onTypingComplete={() => setText(true)}
            />
            {text && (
              <span className="flex items-center justify-center mt-2">
                <span className="mr-3">specializing in</span>
                <TextLoop preset="slide-up">
                  <span className="text-brand sm:text-sm">Project Management </span>
                  <span className="text-brand sm:text-sm">User Experience</span>
                  <span className="text-brand sm:text-sm">Modern Frameworks</span>
                  <span className="text-brand sm:text-sm">Responsive Design</span>
                </TextLoop>
              </span>
            )}
          </motion.div>
          
          <motion.p 
            variants={item}
            className="text-black/70 sm:text-base dark:text-white/70 text-lg mb-10 max-w-xl mx-auto"
          >
            Creating modern, responsive, and interactive user experiences with cutting-edge technologies and clean, maintainable code.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center">
            <EnhancedButton 
              href="/projects" 
              variant="primary"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              View Projects
            </EnhancedButton>
            
            <EnhancedButton 
              href="/pricing" 
              variant="outline"
              icon={<DollarSign className="h-4 w-4" />}
            >
              View Pricing
            </EnhancedButton>
            
            <EnhancedButton 
              href="https://drive.google.com/file/d/1YUOOKXb9i6ruS3T6yBVAMcvg8UP8xdc8/view?usp=sharing" 
              variant="outline"
              icon={<Download className="h-4 w-4" />}
            >
              Download CV
            </EnhancedButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-black/60 dark:text-white/60 mb-2">Scroll to explore</span>
        <motion.div 
          className="w-6 h-10 border-2 border-black/20 dark:border-white/20 rounded-full p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <div className="w-full h-2 bg-brand rounded-full" />
        </motion.div>
      </motion.div> */}
    </section>
  );
} 