import Footer from "@/components/footer";
import { NavBar } from "@/components/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
