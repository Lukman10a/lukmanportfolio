import React, { useState } from "react";
import Typewriter from "./ui/animated/typewriter";
import { HighlightedText } from "./ui/animated/highlightText";

export default function About() {
  const [text, setText] = useState(false);
  return (
    <div className="p-20 grid grid-cols-2 sm:grid-cols-1 sm:gap-6 sm:p-8 h-full bg-[#181414] text-white">
      <p className="text-5xl sm:text-[24px]">
        A{" "}
        <HighlightedText
          highlightColor="#0000FF"
          highlightHeight="100%"
          className="p-2"
          highlightClassName="z-[-1] rounded-lg"
        >
          beautiful
        </HighlightedText>{" "}
        journey
      </p>
      <div className="space-y-10">
        <p className="text-2xl sm:text-lg">
          <Typewriter
            text="Experienced Frontend Developer (4+ years) specializing in React.js, Next.js, TypeScript, and Tailwind CSS."
            delay={10}
            onTypingComplete={() => setText(true)}
          />
        </p>
        {text && (
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
        )}
      </div>
    </div>
  );
}
