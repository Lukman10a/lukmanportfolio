import Link from "next/link";
import React from "react";
import ContactForm from "./form";

export default function Footer() {
  return (
    <div className="bg-[#181414] p-20 sm:p-8 text-white grid grid-cols-2 gap-6 sm:grid-cols-1">
      <div className="space-y-7">
        <p className="text-xl">Lukman</p>
        <h3 className="text-[80px] sm:text-7xl">
          Get In Touch <br /> With Us
        </h3>
        <p className="text-4xl hover:text-[#3939cf] cursor-pointer sm:text-xl">
          abdulrauflukman9@gmail.com
        </p>
        <div className="flex justify-between">
          <Link href={"https://github.com/Lukman10a/"}>
            <p>Github</p>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/abdulrauf-lukman-761095217/"}
          >
            <p>LinkedIn</p>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1YUOOKXb9i6ruS3T6yBVAMcvg8UP8xdc8/view?usp=sharing"
            }
          >
            <p>CV Resume</p>
          </Link>
        </div>
      </div>

      {/* Form Section */}
      <ContactForm />
    </div>
  );
}
