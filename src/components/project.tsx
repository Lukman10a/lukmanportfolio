import Image from "next/image";
import React from "react";
import ataasil from "../../public/assets/images/ataasil.png";
import code from "../../public/assets/images/code.jpg";
import network from "../../public/assets/images/network.jpg";
import tables from "../../public/assets/images/tables.jpg";
import { HighlightedText } from "./ui/animated/highlightText";

const projects = [
  {
    title: "At-Taasil Islaamic University",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    image: ataasil,
  },
  {
    title: "Teverse",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    image: code,
    isRight: true, // For right-side alignment
  },
  {
    title: "Cloud",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    image: network,
  },
  {
    title: "Sunnah Hive",
    description: "An esteemed university in the Kingdom of Saudi Arabia",
    image: tables,
    isRight: true, // For right-side alignment
  },
];

export default function Project() {
  return (
    <div className="p-20 bg-black text-white sm:p-8">
      <h1 className="text-7xl sm:text-3xl text-center pb-10">
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
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`space-y-6 ${project.isRight ? "mt-40 sm:mt-0" : ""}`}
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
          >
            <h2 className="text-4xl font-bold sm:text-xl">{project.title}</h2>
            <p className="sm:text-xs">{project.description}</p>
            <div className="">
              <Image src={project.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
