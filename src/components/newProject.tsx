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

const projects = [
  {
    title: "At-Taasil Islaamic University",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    link: "https://ataasil.vercel.app/",
    image: ataasil,
  },
  {
    title: "Teverse",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    link: "https://teverse-web.vercel.app/",
    image: teverse,
    isRight: true, // For right-side alignment
  },
  {
    title: "Cloud",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    link: "https://cloud-test-project.vercel.app/",
    image: cloud,
  },
  {
    title: "Markazul Bayaan",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    link: "https://www.markazulbayaan.com.ng/",
    image: bayaan,
    isRight: true, // For right-side alignment
  },
  {
    title: "Sunnah Hive",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    link: "https://sunnah-hive.vercel.app/",
    image: sunnahhive,
  },
  {
    title: "Consology",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    link: "https://consology.vercel.app/",
    image: consology,
    isRight: true, // For right-side alignment
  },
];

export default function NewProject() {
  return (
    <div className="p-20 bg-black text-white sm:p-8">
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
          <Link href={project.link} key={index}>
            <div
              className={`py-16 overflow-hidden ${
                project.isRight ? "ml-40 sm:mt-0" : "mr-40"
              }`}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-center"
            >
              <Parallax
                offset={100}
                direction="horizontal"
                className="h-96"
                reverse={project.isRight}
              >
                <div className="space-y-5">
                  <h2 className="text-5xl font-bold sm:text-xl">
                    {project.title}
                  </h2>
                  <p className="text-xl sm:text-xs">{project.description}</p>
                  <div className="">
                    <Image src={project.image} alt={project.title} />
                  </div>
                </div>
              </Parallax>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
