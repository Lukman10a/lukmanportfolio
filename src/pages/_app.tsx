// import Footer from "@/components/footer";
import { NavbarDemo } from "@/components/navBar/newNav";
import Preloader from "@/components/ui/animated/preloader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather, Smooch_Sans, Poppins } from "next/font/google";
import { useEffect, useState } from "react";

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

export default function App({ Component, pageProps }: AppProps) {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => setPreloader(false), 5000);
  }, [preloader]);

  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <main className={`${merri.className} ${play.variable}`}>
          {/* <NavBar /> */}
          <NavbarDemo />
          <Component {...pageProps} />
          {/* <Footer /> */}
        </main>
      )}
    </>
  );
}
