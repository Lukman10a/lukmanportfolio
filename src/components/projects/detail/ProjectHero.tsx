import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Projects } from '../../../../data';

interface ProjectHeroProps {
  project: Projects;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemVariants: any;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ project, itemVariants }) => {
  const [imageError, setImageError] = useState(false);
  
  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      {/* Title Section - Above Image */}
      <motion.div
        variants={itemVariants}
        className="px-8 pt-10 pb-6 bg-[#f8f4ec] dark:bg-gray-800"
      >
        <h1 className="text-5xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-xl md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          An online Islamic school offering authentic knowledge to students globally
        </p>
      </motion.div>

      {/* Hero Image Section */}
      <div className="relative h-[50vh] lg:h-[40vh] w-full overflow-hidden">
        <Image
          src={imageError ? '/placeholder.jpg' : project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
          priority
          onError={handleImageError}
        />
      </div>
    </>
  );
};

export default ProjectHero; 