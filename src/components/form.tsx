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

// Define the structure for link items
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

  // State for loading
  const [isLoading, setIsLoading] = useState(false);

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
  const isFormValid: boolean =
    Boolean(formData?.fullName.trim()) &&
    Boolean(formData?.email.trim()) &&
    Boolean(formData?.message.trim());

  // Handle form submission
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Check if environment variables are available
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error("Email service is not configured. Please contact the administrator.");
      console.error("EmailJS environment variables are missing");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);

      toast.success("Message sent successfully!");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f4ec] dark:bg-[#121212] min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Contact Info */}
          <div className="bg-brand p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s work together
            </h2>
            <p className="text-lg mb-8 text-white/90">
              I&apos;m always interested in new opportunities and exciting projects.
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Connect with me</h3>
                <div className="flex flex-wrap gap-4">
                  {links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-white/90">abdukareem92@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="fullName" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full bg-brand text-white py-3 px-6 rounded-lg font-semibold hover:bg-brand/90 focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
