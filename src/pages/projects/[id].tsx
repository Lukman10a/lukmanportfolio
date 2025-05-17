import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { generateSlug } from "@/utils/slug";
import { useState, useEffect } from "react";
import { projectDetails, Projects } from "../../../data";
import MarkazulBayaanProject from "@/components/projects/detail/MarkazulBayaanProject";
import StandardProjectDisplay from "@/components/projects/detail/StandardProjectDisplay";
import MobileAppDisplay from "@/components/projects/detail/MobileAppDisplay";
import useSmoothScroll from "@/hooks/useSmoothScroll";

// Using the Projects interface from data.ts
type Project = Projects;

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [project, setProject] = useState<Project | null>(null);
  const [isMarkazul, setIsMarkazul] = useState(false);
  const [isMobileApp, setIsMobileApp] = useState(false);
  
  // Enable smooth scrolling
  useSmoothScroll({ duration: 800 });

  useEffect(() => {
    if (id && typeof id === "string") {
      // Find the project based on the slug
      const foundProject = projectDetails.find(
        (p) => generateSlug(p.title) === id
      );

      if (foundProject) {
        setProject(foundProject);
        setIsMarkazul(foundProject.title === "Markazul Bayaan");
        setIsMobileApp(foundProject.title === "LearnSmart");
      }
    }
  }, [id]);

  // If project not found or data is still loading
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f4ec] dark:bg-gray-900">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-[#ff914d] h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-[#ff914d] rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-[#ff914d] rounded"></div>
              <div className="h-4 bg-[#ff914d] rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const handleNextImage = () => {
    if (project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (project.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen pt-24 ${isMarkazul ? 'bg-[#f8f4ec] dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-900'}`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-6 md:px-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="mb-8 md:mb-6 flex items-center mt-10 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-base md:text-sm"
        >
          <svg
            className="w-5 h-5 md:w-4 md:h-4 mr-2 md:mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </motion.button>

        {isMarkazul ? (
          <MarkazulBayaanProject 
            project={project} 
            containerVariants={containerVariants} 
            itemVariants={itemVariants}
            currentImageIndex={currentImageIndex}
            handleNextImage={handleNextImage}
            handlePreviousImage={handlePreviousImage}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        ) : isMobileApp ? (
          <MobileAppDisplay 
            project={project}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        ) : (
          <StandardProjectDisplay 
            project={project}
            containerVariants={containerVariants}
            itemVariants={itemVariants}
          />
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
