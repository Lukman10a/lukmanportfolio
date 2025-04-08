import React, { useState } from "react";
import Typewriter from "./ui/animated/typewriter";
import { TextLoop } from "./ui/animated/textLoop";

import Button from "./ui/customButton";
import Link from "next/link";

export default function Hero() {
  const [text, setText] = useState(false);

  return (
    <>
      <div className="bg-[#f8f4ec] h-[600px] w-full p-20 sm:px-8 py-44 overflow-hidden text-black">
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

        <div className="grid grid-cols-2 sm:grid-cols-1 sm:gap-10 pt-10">
          <Link href={""}>
            <Button />
          </Link>
          <p className="text-3xl sm:text-xl font-play sm:hidden">
            <Typewriter
              text="React | Next Js | JavaScript | Tailwind | React Native | NodeJS"
              delay={30}
            />
          </p>
        </div>
      </div>
    </>
  );
}
