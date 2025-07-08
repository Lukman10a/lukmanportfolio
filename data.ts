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
    img: "/assets/images/sunnahhive.png",
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
    id: "4",
    title: "Teverse",
    images: [
      "/assets/images/teverse_1.png",
      "/assets/images/teverse_2.png",
    ],
    description:
      "Teverse is a cloud company based in Sydney, Australia, offering innovative cloud computing solutions for businesses. The platform provides scalable infrastructure, enabling companies to deploy, manage, and scale applications efficiently. With a focus on security, performance, and user experience, Teverse helps businesses leverage cloud technology to reduce operational costs and accelerate digital transformation.",
    techStack: ["React", "Node.js", "AWS", "TypeScript", "Tailwind CSS"],
    client: "Teverse Cloud Technologies",
    year: "2024",
    link: "https://teverse.com",
  },
  // {
  //   id: "1",
  //   title: "Portfolio Website",
  //   images: [
  //     "/assets/images/portfolio1.png",
  //     "/assets/images/portfolio2.png",
  //     "/assets/images/portfolio1.png",
  //     "/assets/images/portfolio2.png",
  //   ],
  //   description:
  //     "A modern portfolio website built with Next.js and Framer Motion",
  //   techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   client: "Personal Project",
  //   year: "2024",
  //   link: "https://example.com/portfolio",
  // },
  // {
  //   id: "2",
  //   title: "E-Commerce Platform",
  //   images: ["/assets/images/ecommerce1.png", "/assets/images/ecommerce2.png"],
  //   description: "A full-featured e-commerce platform with admin dashboard",
  //   techStack: ["React", "Node.js", "MongoDB", "Express"],
  //   client: "Retail Client",
  //   year: "2023",
  //   link: "https://example.com/ecommerce",
  // },
  {
    id: "3",
    title: "Markazul Bayaan",
    images: [
      "/assets/images/bayaan.png",
      "/assets/images/2.png",
      "/assets/images/3.png",
      "/assets/images/4.png",
      "/assets/images/5.png",
      "/assets/images/6.png",
    ],
    description:
      "An online Islamic school offering comprehensive courses in Islamic studies to students globally. Markazul Bayaan focuses on teaching authentic knowledge based on the Qur'an and Sunnah, providing an accessible way for students to learn at their own pace through structured courses, live sessions, and interactive learning resources. With over 500 students benefitted and 100+ Quranic lessons delivered, the institute has established itself as a trusted source for Islamic education.",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "WordPress",
      "Interactive UI",
    ],
    client: "Markazul Bayaan Islamic Institute",
    year: "2023",
    link: "https://www.markazulbayaan.com.ng/",
    coursesLink: "https://www.markazulbayaan.com.ng/newCourse",
  },
  {
    id: "5",
    title: "Cloude Code",
    images: ["/assets/images/cloud.png", "/assets/images/cloud2.png"],
    description:
      "CloudCode is a powerful cloud-based integrated development environment (IDE) designed for collaborative coding and seamless project management. The platform enables developers to write, test, and deploy code directly from the browser, eliminating the need for local setup. With real-time collaboration features, version control integration, and support for multiple programming languages, CloudCode streamlines the development workflow for teams of all sizes.",
    techStack: [
      "React",
      "Node.js",
      "WebSockets",
      "Monaco Editor",
      "Docker",
      "Kubernetes",
      "TypeScript",
      "Material UI",
    ],
    client: "CloudCode Technologies",
    year: "2023",
    link: "https://cloud-test-project.vercel.app/",
  },
  {
    id: "6",
    title: "SunnahHive",
    images: [
      "/assets/images/sunnahhive.png",
      "/assets/images/sunnahhive_1.png",
      "/assets/images/sunnahhive_2.png",
    ],
    description:
      "SunnahHive is a comprehensive digital platform dedicated to authentic Islamic knowledge and practice. The platform features a vast collection of verified Hadiths (Prophetic traditions), Quranic interpretations, and scholarly articles. Users can access daily Islamic reminders, a prayer time calculator, Qibla direction finder, and community forums. SunnahHive serves as a one-stop resource for Muslims seeking reliable information and guidance in their spiritual journey.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Redux",
      "Authentication",
    ],
    client: "SunnahHive Foundation",
    year: "2022",
    link: "https://sunnah-hive.vercel.app/",
  },
  {
    id: "7",
    title: "Consology",
    images: [
      "/assets/images/consology.png",
      "/assets/images/consology2.png",
      "/assets/images/consology3.png",
      "/assets/images/consology4.png",
    ],
    description:
      "Consology is an innovative construction management platform that digitizes and streamlines the entire construction process. The system includes project planning tools, resource allocation, budget tracking, and progress monitoring features. With interactive dashboards and real-time reporting, Consology provides construction managers with complete visibility and control over their projects, enhancing efficiency and reducing costs through optimized workflow management.",
    techStack: [
      "React",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "Express",
      "Chart.js",
      "Mapbox",
      "PWA",
      "Responsive Design",
    ],
    client: "Consology Solutions",
    year: "2023",
    link: "https://consology.vercel.app/",
  },
  {
    id: "8",
    title: "LearnSmart",
    images: [
      "/assets/images/learnsmart.png",
      "/assets/images/learnsmart_1.png",
      "/assets/images/learnsmart_2.png",
      "/assets/images/learnsmart_3.png",
    ],
    description:
      "LearnSmart is a mobile-first educational application designed to make learning accessible, engaging, and personalized. The app features adaptive learning paths that adjust to individual progress, interactive quizzes, video lessons, and flashcards covering various subjects. With gamification elements, progress tracking, and offline learning capabilities, LearnSmart caters to students of all ages looking to enhance their knowledge on-the-go through a mobile-optimized learning experience.",
    techStack: [
      "React Native",
      "TypeScript",
      "Redux",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Push Notifications",
      "Offline Support",
    ],
    client: "LearnSmart Educational Tech",
    year: "2023",
    link: "https://learnsmart-app.com",
  },
  // Add more projects as needed
];
