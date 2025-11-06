import React from "react";
import { motion, Variants } from "framer-motion";
import { Projects } from "../../../../data";

interface ProjectSidebarProps {
  project: Projects;
  itemVariants: Variants;
}

const ProjectSidebar: React.FC<ProjectSidebarProps> = ({
  project,
  itemVariants,
}) => {
  return (
    <motion.div variants={itemVariants} className="space-y-8 sm:space-y-6">
      {/* Project Details */}
      <div className="bg-white dark:bg-gray-900 p-6 sm:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3 pb-4 sm:pb-3 border-b border-gray-100 dark:border-gray-700">
          Project Details
        </h3>
        <dl className="space-y-4 sm:space-y-3">
          <div className="flex justify-between items-center">
            <dt className="text-gray-500 dark:text-gray-400 font-medium text-base sm:text-sm">
              Client
            </dt>
            <dd className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-sm">
              {project.client}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-gray-500 dark:text-gray-400 font-medium text-base sm:text-sm">
              Year
            </dt>
            <dd className="text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-sm">
              {project.year}
            </dd>
          </div>
          <div className="pt-4 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center px-4 py-2 sm:px-3 sm:py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm sm:text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Visit Live Website
              <svg
                className="w-4 h-4 sm:w-3 sm:h-3 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </dl>
      </div>

      {/* Technologies */}
      <div className="bg-white dark:bg-gray-900 p-6 sm:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-xl sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3 pb-4 sm:pb-3 border-b border-gray-100 dark:border-gray-700">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-1">
          {project.techStack &&
            project.techStack.map((tech: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 sm:px-4 sm:py-3 bg-gray-50 dark:bg-gray-800 rounded-full text-sm sm:text-xs text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>

      {/* Hire Me Section */}
      <div className="bg-gradient-to-br from-[#ff914d] to-[#e67e3a] p-6 sm:p-4 rounded-xl shadow-lg text-white">
        <h3 className="text-xl sm:text-lg font-semibold mb-3 sm:mb-2">
          Need a Similar Project?
        </h3>
        <p className="text-white/90 mb-4 sm:mb-3 text-base sm:text-sm">
          I can build custom solutions tailored to your needs. Let's discuss
          your project!
        </p>
        <a
          href={`mailto:abdulrauflukman9@gmail.com?subject=Project Inquiry - ${project.title}`}
          className="inline-flex w-full items-center justify-center px-4 py-2.5 sm:px-3 sm:py-2 border-2 border-white shadow-sm text-sm sm:text-xs font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-[#ff914d] transition-all duration-200"
        >
          Hire Me
          <svg
            className="w-4 h-4 sm:w-3 sm:h-3 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectSidebar;
