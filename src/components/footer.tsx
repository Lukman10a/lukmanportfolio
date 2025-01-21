import React from "react";
import ContactForm from "./form";
import { ButtonComponent } from "./ui/animated/buttonComponent";
import { Magnetic } from "./ui/animated/magnetic";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import router from "next/router";

export default function Footer() {
  return (
    <div className="bg-black p-20 sm:p-8 text-white grid grid-cols-2 gap-6 sm:grid-cols-1 sm:gap-20">
      <div className="space-y-7">
        <h3 className="text-[80px] sm:text-7xl">
          Get In Touch <br /> With Us
        </h3>
        <div className="">
          <p className="text-4xl cursor-pointer sm:text-xl">
            abdulrauflukman9@gmail.com
          </p>
          <Magnetic>
            <ButtonComponent
              className="bg-accent-light w-[120px] h-[120px]"
              style={{
                height: "120px",
                width: "120px",
              }}
              onClick={() => router.push(`/projects`)}
            >
              <Magnetic>
                <ArrowUpRightIcon className="z-10" />
              </Magnetic>
            </ButtonComponent>
          </Magnetic>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
