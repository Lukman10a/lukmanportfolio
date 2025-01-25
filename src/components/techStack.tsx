import React from "react";
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

export default function TechStack() {
  const partners = [
    react,
    nextjs,
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

  return (
    <div className="mx-auto overflow-hidden">
      {/* <p className="text-center text-5xl ">Tech Stacks</p> */}
      <PartnersSlider images={partners} grayscale />
    </div>
  );
}
