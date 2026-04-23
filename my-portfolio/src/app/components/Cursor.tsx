"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 820px)").matches) {
      setHidden(true);
      return;
    }
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let rx = mx,
      ry = my;
    let raf: number;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !t.matches) return;
      if (t.closest("a, button, .repo, .project, .swatch, .font-opt, .chip")) {
        ringRef.current?.classList.add("hover");
        ringRef.current?.classList.remove("text");
      } else if (t.closest("p, h1, h2, h3, h4, li, .summary")) {
        ringRef.current?.classList.add("text");
        ringRef.current?.classList.remove("hover");
      } else {
        ringRef.current?.classList.remove("hover");
        ringRef.current?.classList.remove("text");
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onEnter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (hidden) return null;
  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
