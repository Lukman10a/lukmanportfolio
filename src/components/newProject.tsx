import Image from "next/image";
import React from "react";
import ataasil from "../../public/assets/images/ataasil.png";
import teverse from "../../public/assets/images/teverse.png";
import cloud from "../../public/assets/images/cloud.png";
import bayaan from "../../public/assets/images/bayaan.png";
import consology from "../../public/assets/images/consology.png";
import sunnahhive from "../../public/assets/images/sunnahhive.png";
import { HighlightedText } from "./ui/animated/highlightText";
import { Parallax } from "./ui/animated/parallax";
import Link from "next/link";
import { useMouseCircle } from "@/hooks/useMouseCircle";
import { MouseCircle } from "./ui/animated/movingButton";

const projects = [
  {
    title: "At-Taasil Islaamic University",
    description:
      "A leading Islamic university in Saudi Arabia, offering advanced education and training in Islamic studies.",
    link: "https://ataasil.vercel.app/",
    image: ataasil,
  },
  {
    title: "Teverse",
    description:
      "A cloud services company providing solutions in the areas of cloud computing and identity access management (IDAM).",
    link: "https://teverse-web.vercel.app/",
    image: teverse,
    isRight: true, // For right-side alignment
  },
  {
    title: "Cloud",
    description:
      "A cloud-based project for a company based in Saudi Arabia designed to demonstrate the scalability and flexibility of modern cloud infrastructure.",
    link: "https://cloud-test-project.vercel.app/",
    image: cloud,
  },
  {
    title: "Markazul Bayaan",
    description:
      "An online Islamic school offering courses in Islamic studies to students globally, with a focus on teaching authentic knowledge.",
    link: "https://www.markazulbayaan.com.ng/",
    image: bayaan,
    isRight: true, // For right-side alignment
  },
  {
    title: "Sunnah Hive",
    description:
      "A digital platform dedicated to providing access to authentic Islamic content, including books, lectures, and more.",
    link: "https://sunnah-hive.vercel.app/",
    image: sunnahhive,
  },
  {
    title: "Consology",
    description:
      "A web development tech startup focused on building innovative solutions for businesses in the digital era.",
    link: "https://consology.vercel.app/",
    image: consology,
    isRight: true, // For right-side alignment
  },
];

export default function NewProject() {
  const { circleRef, handleMouseOver, handleMouseOut, customClass } =
    useMouseCircle();

  return (
    <div className="p-20 bg-black text-white sm:p-2">
      {/* Global Mouse Circle */}
      <MouseCircle className={customClass} ref={circleRef} />

      <h1 className="text-7xl sm:text-3xl text-center pb-20">
        My Latest{" "}
        <HighlightedText
          highlightColor="#0000FF"
          highlightHeight="100%"
          className="p-2"
          highlightClassName="z-[-1] rounded-lg"
        >
          Projects
        </HighlightedText>
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`py-16 sm:py-8 overflow-hidden ${
              project.isRight ? "ml-40 sm:ml-8 sm:mt-0" : "mr-40 sm:mr-8"
            }`}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
            onMouseOver={() => handleMouseOver("bg-red-500 scale-150")}
            onMouseOut={handleMouseOut}
          >
            <Parallax
              offset={100}
              direction="horizontal"
              // className="h-96"
              reverse={project.isRight}
            >
              <div className="space-y-4">
                <h2 className="text-5xl font-bold sm:text-xl">
                  {project.title}
                </h2>
                <p className="text-xl sm:text-xs">{project.description}</p>
                <Link href={project.link}>
                  <div className="">
                    <Image src={project.image} alt={project.title} />
                  </div>
                </Link>
              </div>
            </Parallax>
          </div>
        ))}
      </div>
    </div>
  );
}
