import React from "react";
import { projects, Project } from "../../../data";
import Link from "next/link";

interface ProjectsProps {
  setActiveMenu: (index: number | null) => void;
}

export default function Projects({ setActiveMenu }: ProjectsProps) {
  return (
    <div className="relative mix-blend-difference z-10 text-white w-full min-h-screen">
      <ul className="border-b" onMouseLeave={() => setActiveMenu(null)}>
        {projects.map((project: Project, i: number) => {
          return (
            <li
              onMouseOver={() => setActiveMenu(i)}
              key={project.title}
              className="text-[4vw] md:text-[3vw] lg:text-[2.5vw] p-3 sm:p-4 md:p-5 border-t transition-all duration-300 hover:pl-8"
            >
              <Link
                href={`/projects/${project.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="flex items-center justify-between w-full group"
              >
                <p>{project.title}</p>
                <span className="opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300 text-sm md:text-base">
                  View Project →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
