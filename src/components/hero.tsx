import React, { useState } from "react";
import Typewriter from "./ui/animated/typewriter";
import { TextLoop } from "./ui/animated/textLoop";
import { PartnersSlider } from "./partnerSlider";
import react from "../../public/assets/svg/react.svg";
import nextjs from "../../public/assets/svg/nextjs.svg";
import nodejs from "../../public/assets/svg/nodejs.svg";
import expo from "../../public/assets/svg/expo.svg";
import firebase from "../../public/assets/svg/firebase.svg";
import postman from "../../public/assets/svg/postman.svg";
import material_ui from "../../public/assets/svg/material_ui.svg";
import tailwind from "../../public/assets/svg/tailwind.svg";
import git from "../../public/assets/svg/git.svg";
import github from "../../public/assets/svg/github.svg";
import vscode from "../../public/assets/svg/vscode.svg";
import javascript from "../../public/assets/svg/javascript.svg";
import typescript from "../../public/assets/svg/typescript.svg";

export default function Hero() {
  const partners = [
    nextjs,
    react,
    tailwind,
    javascript,
    typescript,
    nodejs,
    expo,
    material_ui,
    firebase,
    postman,
    git,
    github,
    vscode,
  ];
  const [text, setText] = useState(false);
  return (
    <>
      <div className="bg-black text-white h-[600px] w-full p-20 sm:px-8 py-44 overflow-hidden">
        <div className="h-full ">
          <h1 className="text-7xl sm:text-4xl overflow-hidden">
            <Typewriter
              text={"I am LUKMAN, a Frontend Engineer that creates:"}
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
          <p className="text-center place-self-center">Explore &gt; </p>
          <p className="text-3xl sm:text-xl">
            <Typewriter
              text="React | Next Js | JavaScript | Tailwind | React Native | NodeJS"
              delay={30}
            />
          </p>
        </div>
      </div>
      <div className="mx-auto overflow-hidden bg-black">
        <PartnersSlider images={partners} grayscale />
        <PartnersSlider images={partners} reverse />
      </div>
    </>
  );
}
