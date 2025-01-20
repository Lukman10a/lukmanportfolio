import AboutMe from "@/components/aboutMe";
import Hero from "@/components/hero";
import NewProject from "@/components/newProject";
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
      <AboutMe />
      <NewProject />
    </div>
  );
}
