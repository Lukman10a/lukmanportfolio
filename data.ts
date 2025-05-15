export interface Project {
  title: string;
  img: string;
}

export const projects: Project[] = [
  {
    title: "Teverse",
    img: "/assets/images/teverse.png",
  },
  {
    title: "Cloude Code",
    img: "/assets/images/cloud.png",
  },
  {
    title: "At-Taasil",
    img: "/assets/images/ataasil.png",
  },
  {
    title: "Markazul Bayaan",
    img: "/assets/images/bayaan.png",
  },
  {
    title: "Consology",
    img: "/assets/images/consology.png",
  },
  {
    title: "SunnahHive",
    img: "/assets/images/sunnahhive.png",
  },
  {
    title: "LearnSmart",
    img: "/assets/images/Sunnahhive.png",
  },
];

// data.ts
export interface Projects {
  id: string;
  title: string;
  images: string[];
  description: string;
  techStack: string[];
  client: string;
  year: string;
  link: string;
  coursesLink?: string;
}

export const projectDetails: Projects[] = [
  {
    id: "1",
    title: "Portfolio Website",
    images: ["/assets/images/portfolio1.png", "/assets/images/portfolio2.png"],
    description:
      "A modern portfolio website built with Next.js and Framer Motion",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    client: "Personal Project",
    year: "2024",
    link: "https://example.com/portfolio",
  },
  {
    id: "2",
    title: "E-Commerce Platform",
    images: ["/assets/images/ecommerce1.png", "/assets/images/ecommerce2.png"],
    description: "A full-featured e-commerce platform with admin dashboard",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    client: "Retail Client",
    year: "2023",
    link: "https://example.com/ecommerce",
  },
  {
    id: "3",
    title: "Markazul Bayaan",
    images: [
      "/assets/images/bayaan.png",
      "/assets/images/2.png", 
      "/assets/images/3.png",
      "/assets/images/4.png",
      "/assets/images/5.png",
      "/assets/images/6.png"
    ],
    description: "An online Islamic school offering comprehensive courses in Islamic studies to students globally. Markazul Bayaan focuses on teaching authentic knowledge based on the Qur'an and Sunnah, providing an accessible way for students to learn at their own pace through structured courses, live sessions, and interactive learning resources. With over 500 students benefitted and 100+ Quranic lessons delivered, the institute has established itself as a trusted source for Islamic education.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Responsive Design", "WordPress", "Interactive UI"],
    client: "Markazul Bayaan Islamic Institute",
    year: "2023",
    link: "https://www.markazulbayaan.com.ng/",
    coursesLink: "https://www.markazulbayaan.com.ng/newCourse"
  },
  // Add more projects as needed
];
