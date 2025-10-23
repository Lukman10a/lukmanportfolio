import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { generateSlug } from "@/utils/slug";
import { projectDetails, Projects } from "../../../data";
import { ArrowLeft, ExternalLink } from "lucide-react";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Image from "next/image";
import SEO from "@/components/SEO";

export default function ProjectsPage() {
  // Enable smooth scrolling
  useSmoothScroll({ duration: 800 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <SEO
        title="Projects - Lukman"
        description="Explore my featured projects and case studies"
      />
      <main className="bg-[#f8f4ec] dark:bg-[#121212] min-h-screen pt-32">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4">
              My <span className="text-brand">Projects</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              A collection of my work showcasing modern web development, user
              experience design, and innovative solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-6 md:gap-8"
          >
            {projectDetails.map((project: Projects) => {
              const slug = `/projects/${generateSlug(project.title)}`;

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <Link href={slug} className="block">
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-200 dark:border-gray-700"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Project Image */}
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          width={500}
                          height={500}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-brand transition-colors duration-200">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-brand transition-colors duration-200" />
                        </div>

                        <p
                          className="text-gray-600 dark:text-gray-300 text-sm mb-4 overflow-hidden"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md">
                              +{project.techStack.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Project Meta */}
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                          <span>{project.client}</span>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Interested in working together?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-brand text-white font-medium rounded-lg hover:bg-brand/90 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
