import React from "react";
import { motion, Variants } from "framer-motion";
import { Projects } from "../../../../data";

interface ProjectOverviewProps {
  project: Projects;
  itemVariants: Variants;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  project,
  itemVariants,
}) => {
  // Define project-specific features based on project title
  const getProjectFeatures = () => {
    switch (project.title) {
      case "Markazul Bayaan":
        return {
          title: "What We Offer",
          features: [
            {
              name: "Arabic",
              description:
                "Gain fluency in the Arabic language, the key to understanding Islamic texts.",
              color: "text-[#ff914d]",
            },
            {
              name: "Quran",
              description:
                "Master Quranic recitation, memorization, and Tafseer.",
              color: "text-[#ff914d]",
            },
            {
              name: "Hadith",
              description: "Learn the sayings of the Prophet Muhammad.",
              color: "text-[#ff914d]",
            },
            {
              name: "Fiqh",
              description: "Understand Islamic jurisprudence and law.",
              color: "text-[#ff914d]",
            },
          ],
        };
      case "Teverse":
        return {
          title: "Key Features",
          features: [
            {
              name: "Scalable Infrastructure",
              description:
                "Dynamically scale your cloud resources up or down based on demand.",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              name: "Container Orchestration",
              description:
                "Deploy and manage containerized applications with ease.",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              name: "Security Compliance",
              description:
                "Enterprise-grade security features and compliance certifications.",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              name: "Advanced Analytics",
              description:
                "Gain insights into your application performance and usage patterns.",
              color: "text-blue-600 dark:text-blue-400",
            },
          ],
        };
      case "Cloude Code":
        return {
          title: "Core Features",
          features: [
            {
              name: "Browser-Based IDE",
              description:
                "Write, test, and deploy code directly from your browser without local setup.",
              color: "text-indigo-600 dark:text-indigo-400",
            },
            {
              name: "Real-Time Collaboration",
              description:
                "Work together with your team in real-time with live code sharing.",
              color: "text-indigo-600 dark:text-indigo-400",
            },
            {
              name: "Version Control",
              description:
                "Integrated Git support for seamless version management.",
              color: "text-indigo-600 dark:text-indigo-400",
            },
            {
              name: "Multi-Language Support",
              description:
                "Support for various programming languages and frameworks.",
              color: "text-indigo-600 dark:text-indigo-400",
            },
          ],
        };
      case "SunnahHive":
        return {
          title: "Platform Features",
          features: [
            {
              name: "Hadith Collection",
              description:
                "Access to thousands of verified Prophetic traditions with detailed explanations.",
              color: "text-green-600 dark:text-green-400",
            },
            {
              name: "Quranic Resources",
              description:
                "Comprehensive Quranic interpretations and recitations.",
              color: "text-green-600 dark:text-green-400",
            },
            {
              name: "Prayer Tools",
              description:
                "Prayer time calculator, Qibla finder, and Islamic calendar.",
              color: "text-green-600 dark:text-green-400",
            },
            {
              name: "Community Forums",
              description:
                "Engage with other Muslims and scholars in discussion forums.",
              color: "text-green-600 dark:text-green-400",
            },
          ],
        };
      case "Consology":
        return {
          title: "Platform Capabilities",
          features: [
            {
              name: "Project Planning",
              description:
                "Comprehensive tools for planning and scheduling construction projects.",
              color: "text-orange-600 dark:text-orange-400",
            },
            {
              name: "Resource Management",
              description:
                "Track and allocate resources efficiently across projects.",
              color: "text-orange-600 dark:text-orange-400",
            },
            {
              name: "Budget Tracking",
              description:
                "Monitor expenses and stay within budget with real-time financial insights.",
              color: "text-orange-600 dark:text-orange-400",
            },
            {
              name: "Progress Reporting",
              description:
                "Generate detailed reports and dashboards for project stakeholders.",
              color: "text-orange-600 dark:text-orange-400",
            },
          ],
        };
      case "LearnSmart":
      case "LearnBoost":
        return {
          title: "App Features",
          features: [
            {
              name: "Adaptive Learning",
              description:
                "Personalized learning paths that adjust to your progress and learning style.",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              name: "Interactive Quizzes",
              description:
                "Engaging quizzes with instant feedback to reinforce learning.",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              name: "Video Lessons",
              description:
                "High-quality video content covering various subjects and topics.",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              name: "Offline Mode",
              description:
                "Download content and learn on-the-go without internet connectivity.",
              color: "text-purple-600 dark:text-purple-400",
            },
          ],
        };
      default:
        return {
          title: "Key Features",
          features: [
            {
              name: "Modern Design",
              description:
                "Clean, intuitive interface designed for optimal user experience.",
              color: "text-[#ff914d]",
            },
            {
              name: "Responsive Layout",
              description: "Seamlessly adapts to all screen sizes and devices.",
              color: "text-[#ff914d]",
            },
            {
              name: "High Performance",
              description:
                "Optimized for speed and efficiency across all operations.",
              color: "text-[#ff914d]",
            },
            {
              name: "Secure & Reliable",
              description:
                "Built with security and reliability as top priorities.",
              color: "text-[#ff914d]",
            },
          ],
        };
    }
  };

  const { title, features } = getProjectFeatures();

  return (
    <motion.div
      variants={itemVariants}
      className="prose max-w-none dark:prose-invert"
    >
      <h2 className="text-3xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-4 flex items-center">
        <span className="mr-3 sm:mr-2 text-[#ff914d]">
          <svg
            className="w-8 h-8 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3.586l2.707 2.707a1 1 0 01-1.414 1.414l-3-3A1 1 0 019 10V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Project Overview
      </h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
        <p className="text-lg sm:text-base">{project.description}</p>
        <div className="py-6 sm:py-4">
          <h3 className="text-2xl sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-3">
            {title}
          </h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-3 rounded-lg"
              >
                <h4
                  className={`font-bold ${feature.color} text-xl sm:text-lg mb-2`}
                >
                  {feature.name}
                </h4>
                <p className="text-base sm:text-sm dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectOverview;
