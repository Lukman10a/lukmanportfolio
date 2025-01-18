import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#181414] p-20 sm:p-8 text-white grid grid-cols-2 gap-6 sm:grid-cols-1">
      <div className="space-y-7">
        <p className="text-xl">Lukman</p>
        <h3 className="text-[80px] sm:text-7xl">
          Get In Touch <br /> With Us
        </h3>
        <p className="text-4xl text-[#0000FF] sm:text-xl">
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
            <button
              type="submit"
              className="w-full p-4 text-black bg-[#0000FF] rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
