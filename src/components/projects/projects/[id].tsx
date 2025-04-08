import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  images: string[];
  description: string;
  techStack: string[];
  client: string;
  year: string;
  link: string;
}

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch project data based on ID (replace with your data fetching)
  const project: Project = {
    id: id as string,
    title: "Example Project",
    images: ["/assets/images/ataasil.png", "/assets/images/consology.png"],
    description: "A modern web application with cutting-edge features",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    client: "Tech Corp",
    year: "2024",
    link: "https://example.com",
  };

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
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.back()}
          className="mb-8 flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-5 h-5 mr-2"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {project.title}
          </motion.h1>

          {/* Image Gallery */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {project.images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Project screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                variants={itemVariants}
                className="prose max-w-none mb-8"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Details
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-gray-500">Client</dt>
                    <dd className="text-gray-700">{project.client}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Year</dt>
                    <dd className="text-gray-700">{project.year}</dd>
                  </div>
                </dl>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Visit Live Site
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
