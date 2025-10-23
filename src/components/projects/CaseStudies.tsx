import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: string;
}

const mockCaseStudies: CaseStudy[] = [
  {
    id: "project-1",
    title: "E-Learning Platform",
    description:
      "A modern learning management system with real-time collaboration features and interactive assessments.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    link: "/projects/e-learning-platform",
    category: "Web Application",
  },
  {
    id: "project-2",
    title: "Healthcare Dashboard",
    description:
      "An intuitive analytics dashboard for healthcare providers to monitor patient data and track outcomes.",
    image: "https://picsum.photos/800/600?random=2",
    tags: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    link: "/projects/healthcare-dashboard",
    category: "Dashboard",
  },
  {
    id: "project-3",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce solution with real-time inventory management and payment processing.",
    image: "https://picsum.photos/800/600?random=3",
    tags: ["Next.js", "Stripe", "PostgreSQL", "AWS"],
    link: "/projects/e-commerce-platform",
    category: "E-commerce",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work building modern web applications and
            digital experiences.
          </p>
        </motion.div>

        <div className="space-y-32">
          {mockCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={study.link}>
                <div className="group grid md:grid-cols-12 gap-8 items-center">
                  <div
                    className={`md:col-span-6 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  </div>

                  <div
                    className={`md:col-span-6 ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <span className="text-brand text-sm font-medium mb-2 block">
                      {study.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-brand transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-brand font-medium inline-flex items-center gap-2">
                      View Case Study
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
