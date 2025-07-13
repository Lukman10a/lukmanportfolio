import { useEffect, useState } from "react";
import Lenis from "lenis";
import Scene from "@/components/projects/scene";
import Projects from "@/components/projects/projects/index";
import EnhancedHero from "@/components/EnhancedHero";
import Footer from "@/components/footer";

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
    <div className="bg-[#f8f4ec] dark:bg-[#121212]">
      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Project Section with ID for navigation */}
      <section
        id="projects"
        className="relative w-full bg-[#f8f4ec] dark:bg-[#121212] overflow-hidden"
      >
        <div className="container mx-auto py-16">
          <Scene activeMenu={activeMenu} />
          <div className="p-5 md:p-10 sm:p-5">
            <Projects setActiveMenu={setActiveMenu} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
