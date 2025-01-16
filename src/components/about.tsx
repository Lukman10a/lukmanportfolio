import React from "react";
import Typewriter from "./ui/animated/typewriter";

export default function About() {
  return (
    <div className="p-20 grid grid-cols-2 sm:grid-cols-1 sm:gap-6 sm:p-8">
      <p className="text-5xl sm:text-4xl">A beautiful journey</p>
      <div className="space-y-10">
        <p className="text-2xl sm:text-xl">
          <Typewriter
            text="Experienced Frontend Developer (4+ years) specializing in React.js, Next.js, TypeScript, and Tailwind CSS."
            delay={10}
          />
        </p>
        <div className="grid grid-cols-2 gap-9">
          <p>
            Focus on building responsive, scalable web and mobile applications
            with efficient, maintainable code.
          </p>
          <p>
            Focus on building responsive, scalable web and mobile applications
            with efficient, maintainable code.
          </p>
        </div>
      </div>
    </div>
  );
}
