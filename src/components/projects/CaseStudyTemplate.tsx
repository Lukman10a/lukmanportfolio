import { motion } from "framer-motion";
import Image from "next/image";

interface CaseStudyProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  imageUrl: string;
  liveSite?: string;
  sourceCode?: string;
}

export default function CaseStudyTemplate({
  title,
  description,
  challenge,
  solution,
  results,
  technologies,
  imageUrl,
  liveSite,
  sourceCode,
}: CaseStudyProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          {description}
        </p>

        <div className="relative aspect-[16/9] mb-16">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-2">
            <h3 className="font-semibold text-brand">Technologies</h3>
            <ul className="space-y-1">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          {liveSite && (
            <div className="space-y-2">
              <h3 className="font-semibold text-brand">Live Site</h3>
              <a
                href={liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                Visit Website →
              </a>
            </div>
          )}
          {sourceCode && (
            <div className="space-y-2">
              <h3 className="font-semibold text-brand">Source Code</h3>
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                View on GitHub →
              </a>
            </div>
          )}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>The Challenge</h2>
          <p>{challenge}</p>

          <h2>The Solution</h2>
          <p>{solution}</p>

          <h2>Key Results</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
}
