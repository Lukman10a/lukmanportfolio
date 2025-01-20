import Footer from "@/components/footer";
import { NavBar } from "@/components/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather, Smooch_Sans } from "next/font/google";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${merri.className} ${play.variable}`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
