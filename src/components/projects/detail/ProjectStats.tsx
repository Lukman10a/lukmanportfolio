import React from 'react';
import { motion, Variants } from 'framer-motion';

interface ProjectStatsProps {
  itemVariants: Variants;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({ itemVariants }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="grid grid-cols-3 sm:grid-cols-1 gap-4 p-8 md:p-6 sm:p-4 bg-[#f8f4ec] dark:bg-gray-800"
    >
      <div className="p-6 sm:p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm text-center">
        <h3 className="text-4xl sm:text-3xl font-bold text-[#ff914d]">500+</h3>
        <p className="text-gray-600 dark:text-gray-300">Students Benefited</p>
      </div>
      <div className="p-6 sm:p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm text-center">
        <h3 className="text-4xl sm:text-3xl font-bold text-[#ff914d]">100+</h3>
        <p className="text-gray-600 dark:text-gray-300">Quranic Lessons Delivered</p>
      </div>
      <div className="p-6 sm:p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm text-center">
        <h3 className="text-4xl sm:text-3xl font-bold text-[#ff914d]">100+</h3>
        <p className="text-gray-600 dark:text-gray-300">Hours of Learning</p>
      </div>
    </motion.div>
  );
};

export default ProjectStats;