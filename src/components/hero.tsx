import React from "react";
import Typewriter from "./ui/animated/typewriter";

export default function Hero() {
  return (
    <div className="bg-black text-white h-[600px] w-full p-20 sm:px-8 py-44 overflow-hidden">
      <div className="h-full ">
        <h1 className="text-7xl sm:text-4xl">
          <Typewriter
            text={
              "I am LUKMAN, a frontend Engineer that creates web applications"
            }
            delay={40}
          />
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 pt-10">
        <p></p>
        <p className="text-3xl">
          <Typewriter
            text="React | Next Js | JavaScript | Tailwind | React Native | NodeJS"
            delay={30}
          />
        </p>
      </div>
    </div>
  );
}
