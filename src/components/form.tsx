import React from "react";

export default function ContactForm() {
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
    </div>
  );
}
