import About from "@/components/about";
import Hero from "@/components/hero";
import Project from "@/components/project";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <Hero />
      <About />
      <Project />
    </div>
  );
}
