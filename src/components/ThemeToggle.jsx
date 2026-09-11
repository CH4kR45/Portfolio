import React from "react";
import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/**
 * Night-sky / day-sky switch, matching the reference design: a large
 * circular thumb that overflows the top and bottom of the pill-shaped
 * track, with a starry near-black sky for dark mode and a matching
 * sun-lit sky for light mode.
 *
 * Every layer crossfades with framer-motion rather than relying on
 * CSS gradient transitions (which don't interpolate reliably across
 * browsers), so the whole switch animates smoothly in every browser.
 * The thumb slides with a spring for a soft, physical feel.
 */

const STARS = [
  { top: "24%", left: "16%", size: 1 },
  { top: "62%", left: "10%", size: 1 },
  { top: "40%", left: "28%", size: 1 },
  { top: "70%", left: "34%", size: 1 },
  { top: "20%", left: "42%", size: 1 },
  { top: "50%", left: "48%", size: 1 },
];

const TRACK_WIDTH = 66; // px
const THUMB_SIZE = 24; // px — intentionally bigger than the track height
const THUMB_MARGIN = 2; // px resting gap from the track edge
const THUMB_TRAVEL = TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={dark}
      className="relative h-8 w-16 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900/40 dark:focus-visible:ring-navy-300/40"
      style={{ borderRadius: 9999 }}
    >
      {/* Track — clipped to the pill shape so the sky/cloud/star layers
          never spill past the rounded ends */}
      <span className="absolute inset-0 overflow-hidden rounded-full border border-black/10 shadow-inner dark:border-white/10">
        {/* Day sky — white to light blue, echoing the site's light-mode background */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-sky-200"
          initial={false}
          animate={{ opacity: dark ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Night sky */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0b0f1a] to-black"
          initial={false}
          animate={{ opacity: dark ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        {/* Soft violet night glow, bottom corner — echoes the reference image */}
        <motion.span
          aria-hidden="true"
          className="absolute -bottom-3 -left-2 h-8 w-8 rounded-full bg-fuchsia-700/50 blur-md"
          initial={false}
          animate={{ opacity: dark ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        />
        {/* Warm day glow, opposite corner */}
        <motion.span
          aria-hidden="true"
          className="absolute -top-3 -right-2 h-8 w-8 rounded-full bg-amber-200/50 blur-md"
          initial={false}
          animate={{ opacity: dark ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        />
       
        {/* Stars (night only) */}
        <motion.span
          aria-hidden="true"
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: dark ? 1 : 0 }}
          transition={{ duration: 0.5, delay: dark ? 0.12 : 0 }}
        >
          {STARS.map((s, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white"
              style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
            />
          ))}
        </motion.span>
      </span>

      {/* Thumb — sits outside the clipped track so it can overflow
          top/bottom the way the reference image does */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-1/2 rounded-full shadow-lg"
        style={{ height: THUMB_SIZE, width: THUMB_SIZE, marginTop: -THUMB_SIZE / 2 }}
        initial={false}
        animate={{ x: dark ? THUMB_TRAVEL : THUMB_MARGIN }}
        transition={{ type: "spring", stiffness: 360, damping: 28 }}
      >
        {/* Sun sphere */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #fef3c7, #fbbf24 55%, #d97706 100%)",
          }}
          initial={false}
          animate={{ opacity: dark ? 0 : 1 }}
          transition={{ duration: 0.35 }}
        />
        {/* Moon sphere */}
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #93c5fd, #2563eb 55%, #0b1d3a 100%)",
          }}
          initial={false}
          animate={{ opacity: dark ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
        {/* Crescent moon icon, dark mode only */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ opacity: dark ? 1 : 0, scale: dark ? 1 : 0.7 }}
          transition={{ duration: 0.35 }}
        >
          <Moon className="h-5 w-5 fill-white text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
        </motion.span>
      </motion.span>
    </button>
  );
}
