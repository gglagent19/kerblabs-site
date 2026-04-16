"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let px = 0, py = 0;
    let rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      px = e.clientX;
      py = e.clientY;
    };

    const tick = () => {
      rx += (px - rx) * 0.12;
      ry += (py - ry) * 0.12;

      if (dot.current) {
        dot.current.style.transform = `translate(${px - 4}px, ${py - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onOver = () => {
      dot.current?.classList.add("is-hover");
      ring.current?.classList.add("is-hover");
    };
    const onOut = () => {
      dot.current?.classList.remove("is-hover");
      ring.current?.classList.remove("is-hover");
    };

    const addListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", onOver);
        el.removeEventListener("mouseleave", onOut);
        el.addEventListener("mouseenter", onOver);
        el.addEventListener("mouseleave", onOut);
      });
    };

    window.addEventListener("mousemove", onMove);
    addListeners();

    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
