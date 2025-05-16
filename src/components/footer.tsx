import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Lukman10a/", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/abdulrauf-lukman-761095217/", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Email", href: "mailto:abdulrauflukman9@gmail.com", icon: <Mail className="h-5 w-5" /> },
  ];

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
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-[#f8f4ec] dark:bg-[#121212] py-16 px-6 border-t border-black/5 dark:border-white/5">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-black dark:text-white"
            variants={item}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-black/70 dark:text-white/70 text-center max-w-lg"
            variants={item}
          >
            Interested in working together? I&apos;m always open to discussing new projects and opportunities.
          </motion.p>
          
          <motion.div variants={item} className="pt-4">
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-brand rounded-full overflow-hidden relative"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px 5px rgba(255, 145, 77, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 1 }}
              animate={{
                boxShadow: ["0 0 0px 0px rgba(255, 145, 77, 0)", "0 0 10px 3px rgba(255, 145, 77, 0.3)", "0 0 0px 0px rgba(255, 145, 77, 0)"],
              }}
              transition={{
                boxShadow: {
                  repeat: Infinity,
                  duration: 2,
                }
              }}
            >
              <span>Contact Me</span>
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 animate-pulse">
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </span>
              <span className="absolute -z-10 inset-0 bg-gradient-to-r from-brand to-brand-light opacity-50 blur-md animate-pulse"></span>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-6 pt-6"
            variants={item}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 dark:text-white/60 hover:text-brand transition-colors"
                whileHover={{ scale: 1.1, color: "#ff914d" }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-sm text-black/50 dark:text-white/50 pt-10"
            variants={item}
          >
            © {new Date().getFullYear()} Abdulrauf Lukman. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
