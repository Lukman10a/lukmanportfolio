import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Projects } from '../../../../data';

interface TeverseProjectDisplayProps {
  project: Projects;
  containerVariants: Variants;
  itemVariants: Variants;
  currentImageIndex: number;
  handleNextImage: () => void;
  handlePreviousImage: () => void;
  setCurrentImageIndex: (index: number) => void;
}

const TeverseProjectDisplay: React.FC<TeverseProjectDisplayProps> = ({
  project,
  containerVariants,
  itemVariants,
  currentImageIndex,
  handleNextImage, 
  handlePreviousImage,
  setCurrentImageIndex
}) => {
  const [imageError, setImageError] = useState(false);

  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 pt-10 pb-6">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-4xl font-bold mb-3 text-white"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-lg text-white/90 max-w-3xl"
          >
            Cloud Infrastructure Solutions
          </motion.p>
        </div>
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
      </div>

      {/* Main Content Section */}
      <div className="p-8 md:p-6 sm:p-4">
        <div className="grid grid-cols-3 gap-12 lg:grid-cols-1">
          {/* Left Column */}
          <div className="col-span-2 space-y-12 lg:space-y-8">
            {/* Features Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-4 flex items-center">
                <span className="mr-3 sm:mr-2 text-blue-600 dark:text-blue-400">
                  <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
                Cloud Solutions
              </h2>
              <div className="text-gray-700 dark:text-gray-300 space-y-4">
                <p className="text-lg sm:text-base">
                  {project.description}
                </p>
                <div className="py-6 sm:py-4">
                  <h3 className="text-2xl sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-4">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
                      <h4 className="font-bold text-blue-600 dark:text-blue-400 text-xl sm:text-lg mb-2">Scalable Infrastructure</h4>
                      <p className="text-base sm:text-sm dark:text-gray-300">Dynamically scale your cloud resources up or down based on demand.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
                      <h4 className="font-bold text-blue-600 dark:text-blue-400 text-xl sm:text-lg mb-2">Container Orchestration</h4>
                      <p className="text-base sm:text-sm dark:text-gray-300">Deploy and manage containerized applications with ease.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
                      <h4 className="font-bold text-blue-600 dark:text-blue-400 text-xl sm:text-lg mb-2">Security Compliance</h4>
                      <p className="text-base sm:text-sm dark:text-gray-300">Enterprise-grade security features and compliance certifications.</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg">
                      <h4 className="font-bold text-blue-600 dark:text-blue-400 text-xl sm:text-lg mb-2">Advanced Analytics</h4>
                      <p className="text-base sm:text-sm dark:text-gray-300">Gain insights into your application performance and usage patterns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-4 flex items-center">
                <span className="mr-3 sm:mr-2 text-blue-600 dark:text-blue-400">
                  <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </span>
                Platform Screenshots
              </h2>
              <div className="relative h-96 md:h-80 sm:h-60 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={imageError ? '/placeholder.jpg' : project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 767px) 80vw, 50vw"
                  priority
                  onError={handleImageError}
                />
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={handlePreviousImage}
                      className="absolute left-4 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 p-2 sm:p-1 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all duration-300"
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6 sm:w-4 sm:h-4 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={handleNextImage}
                      className="absolute right-4 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-80 dark:bg-opacity-80 p-2 sm:p-1 rounded-full shadow-md z-10 hover:bg-opacity-100 transition-all duration-300"
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6 sm:w-4 sm:h-4 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              {/* Image indicator dots */}
              {project.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? "bg-blue-600 dark:bg-blue-400 scale-110" 
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1">
            <div className="space-y-8 sm:space-y-6 sticky top-24">
              {/* Project Details */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 sm:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3 pb-4 sm:pb-3 border-b border-gray-100 dark:border-gray-700">
                  Project Details
                </h3>
                <dl className="space-y-4 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <dt className="text-gray-500 dark:text-gray-400 font-medium text-base sm:text-sm">Client</dt>
                    <dd className="text-gray-700 dark:text-gray-300 font-semibold text-sm">{project.client}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500 dark:text-gray-400 font-medium text-base sm:text-sm">Year</dt>
                    <dd className="text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-sm">{project.year}</dd>
                  </div>
                  <div className="pt-4 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center px-4 py-2 sm:px-3 sm:py-2 border border-transparent shadow-sm text-sm sm:text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                    >
                      Visit Website
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
              </motion.div>

              {/* Technologies */}
              <motion.div 
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 sm:p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3 pb-4 sm:pb-3 border-b border-gray-100 dark:border-gray-700">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-1">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 sm:px-2 sm:py-1 bg-gray-50 dark:bg-gray-800 rounded-full text-sm sm:text-xs text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Contact Section */}
              <motion.div 
                variants={itemVariants}
                className="bg-blue-50 dark:bg-blue-900/20 p-6 sm:p-4 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800/30"
              >
                <h3 className="text-xl sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3">
                  Get in Touch
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-3 text-base sm:text-sm">
                  Interested in our cloud solutions? Contact our team for a free consultation and demo.
                </p>
                <a
                  href="mailto:info@teverse.com"
                  className="inline-flex w-full items-center justify-center px-4 py-2 sm:px-3 sm:py-2 border border-transparent shadow-sm text-sm sm:text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-200"
                >
                  Contact Us
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeverseProjectDisplay; 