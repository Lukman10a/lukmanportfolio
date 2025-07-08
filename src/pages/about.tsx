import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, MapPin, Calendar, Github, Linkedin, ExternalLink, Award } from "lucide-react";
import Link from "next/link";
import EnhancedButton from "@/components/ui/EnhancedButton";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Image from "next/image";

export default function About() {
  // Enable smooth scrolling
  useSmoothScroll({ duration: 800 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Skills (from CV)
  const skills = [
    { category: "Frontend Development", items: ["React JS", "Next JS", "Framer Motion", "Interactive UI"] },
    { category: "API Integration", items: ["REST APIs", "Axios", "GraphQL", "React Query", ] },
    { category: "Languages", items: ["JavaScript", "TypeScript", "Material UI", "Chakra UI"] },
    { category: "CSS Frameworks", items: ["Tailwind CSS", "Styled Component"] },
    { category: "Version Control", items: ["Git", "GitHub", "GitLab",] },
    { category: "State Management", items: ["Redux Toolkit", "React Query", "Zustand"] },
    { category: "Mobile Development", items: ["React Native", "Expo", "Nativewind", "GlueStack"] },
    { category: "Performance Optimization", items: ["Profiling", "Debugging", "Code Splitting", "Code Optimization"] },
    { category: "Backend", items: ["Node.js", "MongoDB", "Express", "Firebase", "Supabase"] },
  ];

  // Certificates & Courses (from CV & LinkedIn)
  const certificates = [
    { name: "Advanced Styling with Responsive Design", org: "Coursera" },
    { name: "Interactivity with JavaScript", org: "Coursera" },
    { name: "Modern Javascript", org: "Coursera" },
    { name: "Frontend Engineering Fellowship", org: "Manara" },
    { name: "React - The Complete Guide", org: "Udemy" },
    { name: "TypeScript Bootcamp", org: "Udemy" },
    // Add more as needed
  ];
  const courses = [
    { name: "Interactivity with JavaScript", org: "University of Michigan" },
    { name: "Introduction to CSS3", org: "University of Michigan" },
    // Add more as needed
  ];

  return (
    <div className="min-h-screen bg-[#f8f4ec] dark:bg-[#121212] pt-24">
      <div className="max-w-5xl mx-auto px-6 py-12">
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
            About <span className="text-brand">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Frontend Engineer with 4+ years of expertise in designing and implementing high-performance user interfaces using React, Next.js, and TypeScript. Skilled in building responsive, scalable, and accessible web applications for global clients, with a proven track record in performance optimization, cloud solutions, and modern UI/UX.
          </p>
        </motion.div>

        {/* Logo & Profile Info */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 mb-12"
        >
          <motion.div variants={itemVariants} className="rounded-full overflow-hidden shadow-lg bg-white dark:bg-gray-800 p-4">
            <Image
              src="/assets/images/logo.jpg"
              alt="Lukman Logo"
              width={120}
              height={120}
              className="rounded-full object-contain w-28 h-28"
              priority
            />
          </motion.div>
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-black dark:text-white">Abdulrauf Lukman</h2>
            <p className="text-brand font-medium">Frontend Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300 text-sm mt-2">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-brand" /> Lagos, Nigeria</span>
              <span className="flex items-center gap-1"><Mail className="w-4 h-4 text-brand" /> abdulrauflukman9@gmail.com</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-brand" /> Available for remote & freelance</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-black dark:text-white mb-8 text-center"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid md:grid-cols-3 grid-cols-2 sm:grid-cols-1 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md flex flex-col gap-2"
              >
                <span className="font-semibold text-brand mb-1">{skill.category}</span>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work Experience Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-black dark:text-white mb-8 text-center"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">
                <span className="font-semibold text-brand">Expertise:</span> 4+ years building high-performance, accessible, and scalable web applications for global clients (AI, cloud, education, SaaS, and more).
              </p>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                <li>Specialized in React, Next.js, TypeScript, and Tailwind CSS for modern, maintainable UIs.</li>
                <li>Proven results: boosted engagement, improved load speeds, and delivered seamless user experiences for users.</li>
                <li>Remote-first: Successfully delivered projects for clients in Australia, Saudi Arabia, UK, USA and globally.</li>
                <li>Performance-driven: Advanced code-splitting, profiling, and optimization for rapid, reliable apps.</li>
                <li>Accessibility advocate: Built inclusive interfaces and localized apps (i18n, RTL, etc.).</li>
                <li>Collaborative: Led UI/UX design, mentored teams, and contributed to open source.</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Certificates & Courses */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-black dark:text-white mb-8 text-center"
          >
            Certificates & Courses
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-6">
            {certificates.map((cert) => (
              <motion.div
                key={cert.name}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md flex items-center gap-4"
              >
                <Award className="w-8 h-8 text-brand" />
                <div>
                  <div className="font-semibold text-black dark:text-white">{cert.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">{cert.org}</div>
                </div>
              </motion.div>
            ))}
            {courses.map((course) => (
              <motion.div
                key={course.name}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md flex items-center gap-4"
              >
                <Award className="w-8 h-8 text-brand" />
                <div>
                  <div className="font-semibold text-black dark:text-white">{course.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">{course.org}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <EnhancedButton
              href="mailto:abdukareem92@gmail.com"
              variant="primary"
              icon={<Mail className="h-4 w-4" />}
            >
              Email Me
            </EnhancedButton>
            <EnhancedButton
              href="/contact"
              variant="outline"
              icon={<ExternalLink className="h-4 w-4" />}
            >
              Contact Form
            </EnhancedButton>
            <EnhancedButton
              href="https://www.linkedin.com/in/lukman-abdulrauf"
              variant="outline"
              icon={<Linkedin className="h-4 w-4" />}
            >
              LinkedIn
            </EnhancedButton>
            <EnhancedButton
              href="https://github.com/Lukman10a/"
              variant="outline"
              icon={<Github className="h-4 w-4" />}
            >
              GitHub
            </EnhancedButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
