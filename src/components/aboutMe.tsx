import React, { useState } from "react";
import Typewriter from "./ui/animated/typewriter";
import { HighlightedText } from "./ui/animated/highlightText";
import { AnimatedGroup } from "./ui/animated/animatedGroups";

export default function About() {
  const [text, setText] = useState(false);

  // Services data
  const services = [
    { icon: "🖱️", title: "Frontend Development" },
    { icon: "🧩", title: "Cross-Platform Development" },
    { icon: "🔌", title: "API Integration" },
    { icon: "💻", title: "Web Applications" },
    { icon: "📱", title: "Mobile Applications" },
    { icon: "💾", title: "Deployments & Hosting" },
  ];

  return (
    <div className="p-20 text-center sm:p-8 bg-[#f8f4ec] text-black">
      {/* Intro Section */}
      <p className="text-5xl sm:text-[24px]">
        My{" "}
        <HighlightedText
          highlightColor="#ff914d"
          highlightHeight="100%"
          className="p-2"
          highlightClassName="z-[-1] rounded-lg"
        >
          Services
        </HighlightedText>{" "}
      </p>

      {/* Typewriter Section */}
      <div className="space-y-10 h-full w-full" style={{ minHeight: "250px" }}>
        <p className="text-2xl sm:text-lg pt-6 px-32 sm:px-0">
          <Typewriter
            text="Frontend Developer (4+ years) specializing in React.js, Next.js, TypeScript, and Tailwind CSS."
            delay={10}
            onTypingComplete={() => setText(true)}
          />
        </p>

        {/* Services Section */}
        {text && (
          <div>
            <AnimatedGroup
              viewport={{
                once: false,
                amount: 0.5,
                margin: "10px",
              }}
              className="grid grid-cols-3 sm:grid-cols-2 gap-16"
              preset="scale"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-lg cursor-pointer p-6 flex flex-col items-center justify-center text-center space-y-4 hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-4xl ">{service.icon}</span>
                  <p>{service.title}</p>
                </div>
              ))}
            </AnimatedGroup>
          </div>
        )}
      </div>
    </div>
  );
}
