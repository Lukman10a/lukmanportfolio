import Link from "next/link";
import React from "react";

export default function ContactForm() {
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
    <div className="space-y-5">
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 text-white bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 text-white bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <textarea
            placeholder="How can I help?"
            className="w-full p-4 text-white bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
        </div>
        <div>
          <button className="w-full p-4 text-black bg-white rounded-md hover:bg-blue-600">
            Send Message
          </button>
        </div>
      </form>
      <div className="flex justify-between">
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            {/* <div className="group flex items-center justify-center w-24 h-24 rounded-full border-2 border-white hover:scale-110 hover:rotate-12 transition-all ease-in-out"> */}
            <p className="text-white group-hover:text-white transition-colors">
              {link.label}
            </p>
            {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
}
