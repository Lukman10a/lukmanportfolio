import React from "react";
import { ButtonComponent } from "./ui/animated/buttonComponent";
import { Magnetic } from "./ui/animated/magnetic";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#f8f4ec] p-20 sm:p-8 text-center">
      <div className="space-y-7">
        <h3 className="text-[80px] sm:text-7xl">
          Get In Touch <br /> With Us
        </h3>
        <div className="flex flex-col gap-8">
          <p className="text-4xl cursor-pointer sm:text-xl">
            abdulrauflukman9@gmail.com
          </p>
          <div className="self-center">
            <Link href={"/about"}>
              <Magnetic>
                <ButtonComponent
                  className="bg-accent-light w-[120px] h-[120px]"
                  style={{
                    height: "120px",
                    width: "120px",
                  }}
                >
                  <Magnetic>
                    <ArrowUpRightIcon className="z-10" />
                  </Magnetic>
                </ButtonComponent>
              </Magnetic>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
