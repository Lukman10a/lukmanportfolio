// import Footer from "@/components/footer";
// import { NavbarDemo } from "@/components/navBar/newNav";
// import { MinimalNav } from "@/components/navBar/MinimalNav";
import { AnimatedNav } from "@/components/navBar/AnimatedNav";
// import Preloader from "@/components/ui/animated/preloader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather, Smooch_Sans, Poppins, Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import ThemeToggle from "@/components/ui/theme-toggle";

const merri = Merriweather({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-merri",
});

export const play = Smooch_Sans({
  display: "swap",
  variable: "--font-play",
  subsets: ["latin"],
  weight: "600",
});

export const poppins = Poppins({
  display: "swap",
  variable: "--font-pop",
  subsets: ["latin"],
  weight: "600",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [preloader, setPreloader] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setPreloader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Add theme initialization
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mounted]);

  return (
    <>
      {preloader ? (
        <div className="fixed inset-0 bg-[#f8f4ec] dark:bg-[#121212] flex items-center justify-center z-50">
          <div className="text-3xl font-bold relative">
            <span className="text-black dark:text-white">LUK</span>
            <span className="text-brand">MAN</span>
            <div className="absolute bottom-0 left-0 h-0.5 bg-brand w-0 animate-loading"></div>
          </div>
        </div>
      ) : (
        <main className={`${merri.className} ${play.variable} ${geistSans.variable} ${geistMono.variable}`}>
          <AnimatedNav />
          <Component {...pageProps} />
          <Footer />
          <ThemeToggle />
        </main>
      )}
    </>
  );
}
