import Link from "next/link";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the structure for form data
interface FormData {
  [key: string]: string; // Allows any string key
  fullName: string;
  email: string;
  message: string;
}

// Define the structure for link data
interface LinkItem {
  href: string;
  label: string;
}

export default function ContactForm() {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    message: "",
  });

  // State for errors
  // const [error, setError] = useState<string>("");

  // Links array with type safety
  const links: LinkItem[] = [
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

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Check if the form is valid
  const isFormValid: string =
    formData?.fullName.trim() &&
    formData?.email.trim() &&
    formData?.message.trim();

  // Handle form submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(serviceID, templateID, formData, publicKey);

      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="space-y-5 py-20">
      {/* Toast container */}
      <ToastContainer />

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff914d]"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help?"
            className="w-full p-4  bg-transparent border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff914d] h-32"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full p-4 rounded-md transition-colors ${
              isFormValid
                ? "text-black bg-white hover:bg-[#ff914d]"
                : "text-gray-500 bg-gray-300 cursor-not-allowed"
            }`}
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="flex justify-between">
        {links.map((link, index) => (
          <Link href={link.href} key={index} passHref>
            <p className="hover:underline">{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
