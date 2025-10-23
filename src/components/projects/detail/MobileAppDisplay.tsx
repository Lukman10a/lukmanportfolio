import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Projects } from "../../../../data";

interface MobileAppDisplayProps {
  project: Projects;
  containerVariants: Variants;
  itemVariants: Variants;
  currentImageIndex: number;
  handleNextImage: () => void;
  handlePreviousImage: () => void;
  setCurrentImageIndex: (index: number) => void;
}

const MobileAppDisplay: React.FC<MobileAppDisplayProps> = ({
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
        <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 align-middle py-1 px-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          Mobile App
        </span>
      </motion.h1>

      {/* Mobile App Preview */}
      <motion.div
        variants={itemVariants}
        className="relative mb-8 sm:mb-12 flex justify-center items-center space-x-4 sm:space-x-4 overflow-x-auto pb-4 hide-scrollbar"
      >
        {project.images && project.images.length > 0 ? (
          <>
            <button
              onClick={handlePreviousImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-r-lg text-white z-10 hover:bg-black/70"
              aria-label="Previous image"
            >
              ←
            </button>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              className="relative min-w-[160px] sm:min-w-[200px] md:min-w-[240px] h-[320px] sm:h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg border-8 border-gray-800 dark:border-gray-700"
              style={{
                borderRadius: "2rem",
              }}
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={`App screenshot ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 240px"
                priority
                onError={handleImageError}
              />
              {/* Phone notch design */}
              <div className="absolute top-0 w-1/3 h-5 bg-gray-800 dark:bg-gray-700 left-1/3 rounded-b-lg"></div>
            </motion.div>
            <button
              onClick={handleNextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-l-lg text-white z-10 hover:bg-black/70"
              aria-label="Next image"
            >
              →
            </button>
            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="col-span-full text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <p>No images available</p>
          </div>
        )}
      </motion.div>

      {/* App Store Badge */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center mb-16 space-x-4"
      >
        <a href="#" className="w-[135px] h-[40px] relative">
          <Image
            src="/assets/images/app_store.svg"
            alt="Download on App Store"
            width={135}
            height={40}
          />
        </a>
        <a href="#" className="w-[135px] h-[40px] relative">
          <Image
            src="/assets/images/google_play.svg"
            alt="Get it on Google Play"
            width={135}
            height={40}
          />
        </a>
      </motion.div>

      {/* Project Details */}
      <motion.div
        variants={containerVariants}
        className="grid sm:grid-cols-1 grid-cols-2 gap-6 lg:gap-8"
      >
        {/* Main Content */}
        <div className="">
          <motion.div
            variants={itemVariants}
            className="prose dark:prose-invert max-w-none mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              App Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* App Features */}
          <motion.div
            variants={itemVariants}
            className="prose dark:prose-invert max-w-none mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Adaptive Learning Paths
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Interactive Quizzes
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Progress Tracking
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Offline Learning
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Video Lessons
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  Gamification Elements
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4 sm:space-y-6">
          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              App Details
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
              <div>
                <dt className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Platforms
                </dt>
                <dd className="text-gray-700 dark:text-gray-300">
                  iOS, Android
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
                Visit App Website
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

export default MobileAppDisplay;
