import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Projects } from '../../../../data';

interface CoursesSectionProps {
  project: Projects;
  itemVariants: Variants;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({ project, itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-50 dark:bg-gray-800 p-8 md:p-6 sm:p-4 rounded-xl shadow-sm"
    >
      <h3 className="text-2xl sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-4 flex items-center">
        <span className="mr-3 sm:mr-2 text-[#ff914d]">
          <svg className="w-7 h-7 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        </span>
        Our Courses
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-4 text-base sm:text-sm">
        Embark on your journey of Islamic knowledge with our comprehensive range of courses. 
        Whether you&apos;re a beginner seeking foundational understanding or an advanced learner 
        aiming to deepen your knowledge, our courses are designed to cater to all levels.
      </p>
      {project.coursesLink && (
        <a
          href={project.coursesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 sm:px-4 sm:py-2 border border-transparent text-base sm:text-sm font-medium rounded-md text-white bg-[#ff914d] hover:bg-[#e67e3a] transition-colors duration-200"
        >
          Explore Our Courses
          <svg
            className="w-5 h-5 sm:w-4 sm:h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      )}
    </motion.div>
  );
};

export default CoursesSection; 