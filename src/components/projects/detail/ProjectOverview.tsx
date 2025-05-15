import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Projects } from '../../../../data';

interface ProjectOverviewProps {
  project: Projects;
  itemVariants: Variants;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project, itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="prose max-w-none dark:prose-invert"
    >
      <h2 className="text-3xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-4 flex items-center">
        <span className="mr-3 sm:mr-2 text-[#ff914d]">
          <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </span>
        Project Overview
      </h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
        <p className="text-lg sm:text-base">
          {project.description}
        </p>
        <div className="py-6 sm:py-4">
          <h3 className="text-2xl sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3">What We Offer</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
              <h4 className="font-bold text-[#ff914d] text-xl sm:text-lg mb-2">Arabic</h4>
              <p className="text-base sm:text-sm dark:text-gray-300">Gain fluency in the Arabic language, the key to understanding Islamic texts.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
              <h4 className="font-bold text-[#ff914d] text-xl sm:text-lg mb-2">Quran</h4>
              <p className="text-base sm:text-sm dark:text-gray-300">Master Quranic recitation, memorization, and Tafseer.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
              <h4 className="font-bold text-[#ff914d] text-xl sm:text-lg mb-2">Hadith</h4>
              <p className="text-base sm:text-sm dark:text-gray-300">Learn the sayings of the Prophet Muhammad.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
              <h4 className="font-bold text-[#ff914d] text-xl sm:text-lg mb-2">Fiqh</h4>
              <p className="text-base sm:text-sm dark:text-gray-300">Understand Islamic jurisprudence and law.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectOverview; 