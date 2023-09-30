import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import "@/styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
