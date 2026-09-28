import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/**
 * Simple light/dark theme switch with a pill-shaped track and
 * circular thumb. The thumb slides with a spring animation,
 * while the Sun and Moon icons transition smoothly between modes.
 *
 * The thumb matches the webpage background in each theme,
 * keeping the toggle clean and minimal.
 */

const TRACK_WIDTH = 66; // px
const THUMB_SIZE = 24; // px
const THUMB_MARGIN = 2; // px resting gap from the track edge
const THUMB_TRAVEL =
  TRACK_WIDTH - THUMB_SIZE - THUMB_MARGIN * 2;

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
      {/* Track — simple solid background that changes with the theme */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full border shadow-inner"
        initial={false}
        animate={{
          backgroundColor: dark ? "#0f172a" : "#e2e8f0",
          borderColor: dark
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.1)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      />

      {/* Thumb — matches the webpage background */}
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-1/2 flex items-center justify-center rounded-full shadow-md"
        style={{
          height: THUMB_SIZE,
          width: THUMB_SIZE,
          marginTop: -THUMB_SIZE / 2,
        }}
        initial={false}
        animate={{
          x: dark ? THUMB_TRAVEL : THUMB_MARGIN,
          backgroundColor: dark ? "#0f172a" : "#f8fafc",
        }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 28,
        }}
      >
        {/* Theme icon */}
        <AnimatePresence mode="wait" initial={false}>
          {dark ? (
            <motion.span
              key="moon"
              className="absolute flex items-center justify-center"
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.6,
              }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-4 w-4 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              className="absolute flex items-center justify-center"
              initial={{
                opacity: 0,
                rotate: 90,
                scale: 0.6,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: -90,
                scale: 0.6,
              }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-4 w-4 text-slate-900" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  );
}