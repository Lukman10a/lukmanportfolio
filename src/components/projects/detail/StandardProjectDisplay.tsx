import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Projects } from "../../../../data";

interface StandardProjectDisplayProps {
  project: Projects;
  containerVariants: Variants;
  itemVariants: Variants;
  currentImageIndex: number;
  handleNextImage: () => void;
  handlePreviousImage: () => void;
  setCurrentImageIndex: (index: number) => void;
}

const StandardProjectDisplay: React.FC<StandardProjectDisplayProps> = ({
  project,
  containerVariants,
  itemVariants,
  currentImageIndex,
  handleNextImage,
  handlePreviousImage,
  setCurrentImageIndex,
}) => {
  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.jpg";
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
      >
        {project.title}
      </motion.h1>

      {/* Image Gallery */}
      <motion.div variants={itemVariants} className="relative mb-8 sm:mb-12">
        {project.images && project.images.length > 0 ? (
          <div className="relative h-60 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
            <button
              onClick={handlePreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <Image
              src={project.images[currentImageIndex]}
              alt={`Project screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
              priority
              onError={handleImageError}
            />

            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <p>No images available</p>
          </div>
        )}
      </motion.div>

      {/* Project Details */}
      <motion.div
        variants={containerVariants}
        className="grid sm:grid-cols-1 grid-cols-2 gap-8"
      >
        {/* Main Content */}
        <div className="">
          <motion.div
            variants={itemVariants}
            className="prose dark:prose-invert max-w-none mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Project Details
            </h3>
            <dl className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div>
                <dt className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Client
                </dt>
                <dd className="text-gray-700 dark:text-gray-300">
                  {project.client}
                </dd>
              </div>
              <div>
                <dt className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Year
                </dt>
                <dd className="text-gray-700 dark:text-gray-300">
                  {project.year}
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {project.techStack &&
                project.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </motion.div>

          {project.link && (
            <motion.div variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 w-full border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
              >
                Visit Live Site
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
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
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StandardProjectDisplay;
