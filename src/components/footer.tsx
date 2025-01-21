import Link from "next/link";
import React from "react";
import ContactForm from "./form";

export default function Footer() {
  const links = [
    { href: "https://github.com/Lukman10a/", label: "Github" },
    {
      href: "https://www.linkedin.com/in/abdulrauf-lukman-761095217/",
      label: "LinkedIn",
    },
    {
      href: "https://drive.google.com/file/d/1YUOOKXb9i6ruS3T6yBVAMcvg8UP8xdc8/view?usp=sharing",
      label: "CV",
    },
  ];

  return (
    <div className="bg-black p-20 sm:p-8 text-white grid grid-cols-2 gap-6 sm:grid-cols-1">
      <div className="space-y-7">
        <h3 className="text-[80px] sm:text-7xl">
          Get In Touch <br /> With Us
        </h3>
        <p className="text-4xl hover:text-[#3939cf] cursor-pointer sm:text-xl">
          abdulrauflukman9@gmail.com
        </p>
        <div className="flex gap-10">
          {links.map((link, index) => (
            <Link href={link.href} key={index}>
              <div className="group flex items-center justify-center w-24 h-24 rounded-full border-2 border-white hover:scale-110 hover:rotate-12 transition-all ease-in-out">
                <p className="text-white group-hover:text-white transition-colors">
                  {link.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
