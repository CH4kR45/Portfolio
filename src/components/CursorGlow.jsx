import React from "react";
import { useCursorGlow } from "../hooks/useCursorGlow";

/**
 * Ambient glow that eases toward the cursor. Sits behind all content
 * (z-0, pointer-events-none) and is hidden on small/touch screens so
 * it never interferes with reading or tapping.
 */
export default function CursorGlow() {
  const ref = useCursorGlow(160);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[160px] w-[160px] rounded-full bg-navy-500/15 blur-3xl will-change-transform dark:bg-navy-300/15 sm:block"
    />
  );
}
