import Footer from "@/components/footer";
import { NavBar } from "@/components/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Merriweather } from "next/font/google";

const merri = Merriweather({
  subsets: ["latin"],
  weight: "300",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={merri.className}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
