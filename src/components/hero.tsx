import React, { useState } from "react";
import Typewriter from "./ui/animated/typewriter";
import { TextLoop } from "./ui/animated/textLoop";
import TechStack from "./techStack";
import { MouseCircle } from "./ui/animated/movingButton";
import { useMouseCircle } from "@/hooks/useMouseCircle";
import { fadeAndGrow } from "@/lib/utils";

export default function Hero() {
  const [text, setText] = useState(false);

  const { circleRef, handleMouseOver, customClass } = useMouseCircle();

  return (
    <>
      <div
        className="bg-black text-white h-[600px] w-full p-20 sm:px-8 py-44 overflow-hidden"
        onMouseOver={() =>
          handleMouseOver("bg-blue-500 rounded-full", (circle) =>
            fadeAndGrow(circle)
          )
        }
      >
        {/* Global Mouse Circle */}
        <MouseCircle className={customClass} ref={circleRef} />
        <div className="h-full ">
          <h1 className="text-7xl sm:text-4xl overflow-hidden">
            <Typewriter
              text={"I am LUKMAN, a Frontend Engineer specializing in:"}
              delay={40}
              onTypingComplete={() => setText(true)}
            />
            {text && ( // Render TextLoop only when typing completes
              <TextLoop>
                <span className="font-bold sm:text-[30px]">
                  Web Applications
                </span>
                <span className="font-bold sm:text-[30px]">
                  Mobile Applications
                </span>
              </TextLoop>
            )}
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 pt-10">
          {/* <p className="text-center place-self-center">Explore &gt; </p> */}
          <p className="text-3xl sm:text-xl font-play">
            <Typewriter
              text="React | Next Js | JavaScript | Tailwind | React Native | NodeJS"
              delay={30}
            />
          </p>
        </div>
      </div>
      <TechStack />
    </>
  );
}
