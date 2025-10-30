import React, { useEffect } from "react";
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Projects } from "../../../../data";
import ProjectHero from "./ProjectHero";
import ProjectStats from "./ProjectStats";
import ImageGallery from "./ImageGallery";
import ProjectOverview from "./ProjectOverview";
import CoursesSection from "./CoursesSection";
import ProjectSidebar from "./ProjectSidebar";

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
  // Setup intersection observers for scroll animations
  const statsControls = useAnimation();
  const galleryControls = useAnimation();
  const overviewControls = useAnimation();
  const coursesControls = useAnimation();
  const sidebarControls = useAnimation();

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [overviewRef, overviewInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [coursesRef, coursesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [sidebarRef, sidebarInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for scroll effects
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Trigger animations when sections come into view
  useEffect(() => {
    if (statsInView) statsControls.start("visible");
    if (galleryInView) galleryControls.start("visible");
    if (overviewInView) overviewControls.start("visible");
    if (coursesInView) coursesControls.start("visible");
    if (sidebarInView) sidebarControls.start("visible");
  }, [
    statsInView,
    galleryInView,
    overviewInView,
    coursesInView,
    sidebarInView,
    statsControls,
    galleryControls,
    overviewControls,
    coursesControls,
    sidebarControls,
  ]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Hero Section */}
      <ProjectHero project={project} itemVariants={itemVariants} />

      {/* Stats Section */}
      <motion.div
        ref={statsRef}
        initial="hidden"
        animate={statsControls}
        variants={scrollVariants}
      >
        <ProjectStats itemVariants={itemVariants} />
      </motion.div>

      {/* Main Content Section */}
      <div className="p-8 md:p-6 sm:p-4">
        <div className="grid grid-cols-3 gap-12 lg:grid-cols-1">
          {/* Left Column */}
          <div className="col-span-2 space-y-12 lg:space-y-8">
            {/* Image Gallery */}
            <motion.div
              ref={galleryRef}
              initial="hidden"
              animate={galleryControls}
              variants={scrollVariants}
            >
              <ImageGallery
                images={project.images}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                handleNextImage={handleNextImage}
                handlePreviousImage={handlePreviousImage}
                itemVariants={itemVariants}
              />
            </motion.div>

            {/* Project Overview */}
            <motion.div
              ref={overviewRef}
              initial="hidden"
              animate={overviewControls}
              variants={scrollVariants}
            >
              <ProjectOverview project={project} itemVariants={itemVariants} />
            </motion.div>

            {/* Courses Section */}
            <motion.div
              ref={coursesRef}
              initial="hidden"
              animate={coursesControls}
              variants={scrollVariants}
            >
              <CoursesSection project={project} itemVariants={itemVariants} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 sm:col-span-2">
            <motion.div
              ref={sidebarRef}
              initial="hidden"
              animate={sidebarControls}
              variants={scrollVariants}
            >
              <ProjectSidebar project={project} itemVariants={itemVariants} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StandardProjectDisplay;
