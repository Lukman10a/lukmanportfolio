import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { generateSlug } from "@/utils/slug";
import { Project, projects } from "../../../../data";

interface ProjectsProps {
  setActiveMenu: (index: number | null) => void;
}

export default function Projects({ setActiveMenu }: ProjectsProps) {
  return (
    <div className="relative z-10 text-black dark:text-white w-full">
      <motion.ul 
        className="border-b border-black/10 dark:border-white/10" 
        onMouseLeave={() => setActiveMenu(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {projects.map((project: Project, i: number) => {
          const slug = `/projects/${generateSlug(project.title)}`;

          return (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              onMouseOver={() => setActiveMenu(i)}
              key={project.title}
              className="text-[3.5vw] sm:text-2xl lg:text-[2vw] p-4 sm:p-5 md:p-6 border-t border-black/10 dark:border-white/10 transition-all duration-300 hover:pl-10"
            >
              <Link
                href={slug}
                className="flex items-center justify-between w-full group"
                passHref
              >
                <span className="font-medium">{project.title}</span>
                <motion.span 
                  className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300 text-sm md:text-base text-brand"
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
