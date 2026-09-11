import { useEffect, useRef } from "react";

/**
 * Drives a fixed, blurred glow element that eases toward the cursor
 * position. Uses direct DOM style mutation (not React state) so the
 * animation runs at 60fps without re-rendering the component tree.
 * Automatically disabled on touch devices and for users who prefer
 * reduced motion.
 */
export function useCursorGlow(size = 160) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isCoarsePointer) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };
    let raf;

    const handleMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      pos.x += (target.x - pos.x) * 0.07;
      pos.y += (target.y - pos.y) * 0.07;
      el.style.transform = `translate3d(${pos.x - size / 2}px, ${
        pos.y - size / 2
      }px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, [size]);

  return ref;
}
