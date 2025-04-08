import Hero from "@/components/hero";
import { Geist, Geist_Mono } from "next/font/google";
import Scene from "@/components/projects/scene";
import { useEffect, useState } from "react";
import Lenis from "lenis";
import { HighlightedText } from "@/components/ui/animated/highlightText";
import Footer from "@/components/footer";
import Projects from "@/components/projects/projects";
import { HeroScrollDemo } from "@/components/ui/containerScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // Add the projects section functionality
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  // Initialize smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle touch events for mobile devices
    const handleTouchStart = () => {
      // Reset activeMenu on touch to prevent stuck hover states on mobile
      setActiveMenu(null);
    };

    document.addEventListener("touchstart", handleTouchStart);
    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <Hero />
      <HeroScrollDemo />

      {/* Project Section with ID for navigation */}
      <section
        id="projects"
        className="relative w-full bg-[#f8f4ec] overflow-hidden"
      >
        <p className="text-5xl sm:text-[24px] text-center py-4">
          My{" "}
          <HighlightedText
            highlightColor="#ff914d"
            highlightHeight="100%"
            className="p-2"
            highlightClassName="z-[-1] rounded-lg"
          >
            Projects
          </HighlightedText>{" "}
        </p>

        <Scene activeMenu={activeMenu} />
        <div className="p-5 md:p-10">
          <Projects setActiveMenu={setActiveMenu} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
