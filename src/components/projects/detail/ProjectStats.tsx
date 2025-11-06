import React from "react";
import { motion, Variants } from "framer-motion";
import { Projects } from "../../../../data";

interface ProjectStatsProps {
  itemVariants: Variants;
  project: Projects;
}

const ProjectStats: React.FC<ProjectStatsProps> = ({
  itemVariants,
  project,
}) => {
  // Get project-specific stats
  const getProjectStats = () => {
    switch (project.title) {
      case "Markazul Bayaan":
        return [
          {
            value: "500+",
            label: "Students Benefited",
            color: "text-[#ff914d]",
          },
          {
            value: "100+",
            label: "Quranic Lessons Delivered",
            color: "text-[#ff914d]",
          },
          {
            value: "100+",
            label: "Hours of Learning",
            color: "text-[#ff914d]",
          },
        ];
      case "Teverse":
        return [
          {
            value: "99.9%",
            label: "Uptime Guarantee",
            color: "text-blue-600 dark:text-blue-400",
          },
          {
            value: "50+",
            label: "Enterprise Clients",
            color: "text-blue-600 dark:text-blue-400",
          },
          {
            value: "24/7",
            label: "Support Available",
            color: "text-blue-600 dark:text-blue-400",
          },
        ];
      case "Cloude Code":
        return [
          {
            value: "10K+",
            label: "Active Developers",
            color: "text-indigo-600 dark:text-indigo-400",
          },
          {
            value: "20+",
            label: "Languages Supported",
            color: "text-indigo-600 dark:text-indigo-400",
          },
          {
            value: "1M+",
            label: "Lines of Code Written",
            color: "text-indigo-600 dark:text-indigo-400",
          },
        ];
      case "SunnahHive":
        return [
          {
            value: "10K+",
            label: "Verified Hadiths",
            color: "text-green-600 dark:text-green-400",
          },
          {
            value: "50K+",
            label: "Active Users",
            color: "text-green-600 dark:text-green-400",
          },
          {
            value: "100+",
            label: "Islamic Scholars",
            color: "text-green-600 dark:text-green-400",
          },
        ];
      case "Consology":
        return [
          {
            value: "200+",
            label: "Projects Managed",
            color: "text-orange-600 dark:text-orange-400",
          },
          {
            value: "$50M+",
            label: "Budget Tracked",
            color: "text-orange-600 dark:text-orange-400",
          },
          {
            value: "95%",
            label: "On-Time Delivery",
            color: "text-orange-600 dark:text-orange-400",
          },
        ];
      case "LearnSmart":
      case "LearnBoost":
        return [
          {
            value: "100K+",
            label: "App Downloads",
            color: "text-purple-600 dark:text-purple-400",
          },
          {
            value: "500+",
            label: "Interactive Lessons",
            color: "text-purple-600 dark:text-purple-400",
          },
          {
            value: "4.8★",
            label: "Average Rating",
            color: "text-purple-600 dark:text-purple-400",
          },
        ];
      default:
        return [
          { value: "100+", label: "Users Served", color: "text-[#ff914d]" },
          { value: "50+", label: "Features Built", color: "text-[#ff914d]" },
          {
            value: "99%",
            label: "Client Satisfaction",
            color: "text-[#ff914d]",
          },
        ];
    }
  };

  const stats = getProjectStats();

  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-3 sm:grid-cols-1 gap-4 p-8 md:p-6 sm:p-4 bg-[#f8f4ec] dark:bg-gray-800"
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 sm:p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm text-center"
        >
          <h3 className={`text-4xl sm:text-3xl font-bold ${stat.color}`}>
            {stat.value}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default ProjectStats;
