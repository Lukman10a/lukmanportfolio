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
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          ),
          title: "Our Courses",
          description:
            "Embark on your journey of Islamic knowledge with our comprehensive range of courses. Whether you're a beginner seeking foundational understanding or an advanced learner aiming to deepen your knowledge, our courses are designed to cater to all levels.",
          buttonText: "Explore Our Courses",
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
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          ),
          title: "Get in Touch",
          description:
            "Interested in our cloud solutions? Contact our team for a free consultation and demo. We'll help you understand how Teverse can transform your business infrastructure.",
          buttonText: "Contact Sales",
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
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: "Start Coding Today",
          description:
            "Ready to experience cloud-based development? Sign up for a free trial and start collaborating with your team instantly. No credit card required.",
          buttonText: "Get Started Free",
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
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          ),
          title: "Join Our Community",
          description:
            "Connect with thousands of Muslims worldwide. Access authentic Islamic resources, engage in meaningful discussions, and grow in your faith journey with SunnahHive.",
          buttonText: "Join Community",
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
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: "Request a Demo",
          description:
            "See how Consology can streamline your construction projects. Schedule a personalized demo with our team and discover the power of digital project management.",
          buttonText: "Schedule Demo",
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
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
          ),
          title: "Start Learning Now",
          description:
            "Download LearnBoost today and begin your personalized learning journey. Available on iOS and Android, with thousands of lessons ready to boost your knowledge.",
          buttonText: "Download App",
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
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: "Learn More",
          description:
            "Interested in learning more about this project? Get in touch with us to discover how we can help you achieve your goals.",
          buttonText: "Get in Touch",
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
      {(project.coursesLink || project.link) && (
        <a
          href={project.coursesLink || project.link}
          target="_blank"
          rel="noopener noreferrer"
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
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      )}
    </motion.div>
  );
};

export default CoursesSection;
