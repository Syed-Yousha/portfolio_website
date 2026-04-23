"use client";

import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Archive from "./components/Archive";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import FooterBar from "./components/FooterBar";
import Tweaks from "./components/Tweaks";

export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      setDark(localStorage.getItem("theme") === "dark");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Nav onToggleTheme={() => setDark((d) => !d)} dark={dark} />
      <main>
        <Hero />
        <Featured />
        <About />
        <Marquee />
        <Archive />
        <Experience />
        <Contact />
      </main>
      <FooterBar />
      <Tweaks dark={dark} setDark={setDark} />
    </>
  );
}
