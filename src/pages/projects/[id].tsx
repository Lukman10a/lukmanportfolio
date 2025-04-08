import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../../data"; // Import your projects data
import { generateSlug } from "@/utils/slug"; // Import your slug utility

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

  // Find the project based on the slug
  const project = projects.find((p) => generateSlug(p.title) === id) as
    | Project
    | undefined;

  // If project not found or data is still loading
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading project details...</p>
      </div>
    );
  }

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

  return <div>d</div>;
};

export default ProjectDetail;
