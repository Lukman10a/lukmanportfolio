import React from "react";
import { motion, Variants } from "framer-motion";
import { Projects } from "../../../../data";

interface CoursesSectionProps {
  project: Projects;
  itemVariants: Variants;
}

const CoursesSection: React.FC<CoursesSectionProps> = ({
  project,
  itemVariants,
}) => {
  // Define project-specific call-to-action content
  const getCallToAction = () => {
    switch (project.title) {
      case "Markazul Bayaan":
        return {
          icon: (
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Have Questions?",
          description:
            "Interested in building a similar Islamic education platform? Let's discuss how I can help bring your vision to life with modern web technologies.",
          buttonText: "Contact Me",
          buttonColor: "bg-[#ff914d] hover:bg-[#e67e3a]",
          iconColor: "text-[#ff914d]",
        };
      case "Teverse":
        return {
          icon: (
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Need a Cloud Platform?",
          description:
            "Looking to build an enterprise cloud solution or modern web platform? I specialize in React, Next.js, and scalable architectures. Let's discuss your project.",
          buttonText: "Get in Touch",
          buttonColor:
            "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
          iconColor: "text-blue-600 dark:text-blue-400",
        };
      case "Cloude Code":
        return {
          icon: (
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Want a Developer Tool?",
          description:
            "Need a custom IDE, code editor, or developer platform? I build complex web applications with real-time features using WebSockets, Node.js, and modern frameworks.",
          buttonText: "Hire Me",
          buttonColor:
            "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",
          iconColor: "text-indigo-600 dark:text-indigo-400",
        };
      case "SunnahHive":
        return {
          icon: (
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Build Your Community Platform?",
          description:
            "Need a community platform with user authentication, forums, and dynamic content? I create full-stack applications with MongoDB, Next.js, and modern UI/UX design.",
          buttonText: "Let's Talk",
          buttonColor:
            "bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
          iconColor: "text-green-600 dark:text-green-400",
        };
      case "Consology":
        return {
          icon: (
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Need a Management System?",
          description:
            "Looking for a project management platform, dashboard, or business application? I build data-driven solutions with interactive charts, real-time updates, and intuitive interfaces.",
          buttonText: "Contact Me",
          buttonColor:
            "bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600",
          iconColor: "text-orange-600 dark:text-orange-400",
        };
      case "LearnSmart":
      case "LearnBoost":
        return {
          icon: (
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Want a Mobile App?",
          description:
            "Interested in a mobile app or progressive web app? I develop with React Native and modern mobile-first approaches. From education to e-commerce, let's build your app.",
          buttonText: "Start Your Project",
          buttonColor:
            "bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600",
          iconColor: "text-purple-600 dark:text-purple-400",
        };
      default:
        return {
          icon: (
            <svg
              className="w-7 h-7 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ),
          title: "Have a Project in Mind?",
          description:
            "Interested in building something similar? I'd love to discuss your project and how I can help bring your ideas to life with modern technologies.",
          buttonText: "Let's Connect",
          buttonColor: "bg-[#ff914d] hover:bg-[#e67e3a]",
          iconColor: "text-[#ff914d]",
        };
    }
  };

  const cta = getCallToAction();

  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-50 dark:bg-gray-800 p-8 md:p-6 sm:p-4 rounded-xl shadow-sm"
    >
      <h3 className="text-2xl sm:text-xl font-semibold text-gray-900 dark:text-white mb-6 sm:mb-4 flex items-center">
        <span className={`mr-3 sm:mr-2 ${cta.iconColor}`}>{cta.icon}</span>
        {cta.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 sm:mb-4 text-base sm:text-sm">
        {cta.description}
      </p>
      <a
        href={`mailto:abdulrauflukman9@gmail.com?subject=Inquiry about ${project.title}`}
        className={`inline-flex items-center justify-center px-6 py-3 sm:px-4 sm:py-2 border border-transparent text-base sm:text-sm font-medium rounded-md text-white ${cta.buttonColor} transition-colors duration-200`}
      >
        {cta.buttonText}
        <svg
          className="w-5 h-5 sm:w-4 sm:h-4 ml-2"
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
  );
};

export default CoursesSection;
