import React, { useRef, useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  Wifi,
  Brain,
  Palette,
  Settings2,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Reveal from "../Reveal";
import { SKILLS } from "../../data/content";

// Maps each SKILLS category (src/data/content.js) to an icon. Add an
// entry here if you rename or add a category — falls back to Code2.
const CATEGORY_ICONS = {
  "Web Development": Code2,
  "Mobile Development": Smartphone,
  "Databases & Backend": Database,
  "IoT & Networking": Wifi,
  "AI / ML": Brain,
  Design: Palette,
  "Other Technical": Settings2,
  "Soft Skills": Users,
};

/**
 * Single scrollable row of category chips + one shared content panel
 * below that crossfades to match whichever category is active.
 *
 * This intentionally avoids per-card floating popovers: an element
 * positioned absolutely below a card inside a horizontally-scrolling
 * container gets clipped by the browser (setting overflow-x forces
 * overflow-y away from "visible" too), and a popover centered on an
 * edge card can get pushed past the viewport and clipped by the page's
 * overflow-x-hidden. A single panel in normal document flow has
 * neither problem, on any screen size.
 */
export default function Skills() {
  const [hovered, setHovered] = useState(null);
  const [pinned, setPinned] = useState(0);
  const active = hovered ?? pinned;

  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, [updateScrollState]);

  const activeGroup = SKILLS[active];
  const ActiveIcon = CATEGORY_ICONS[activeGroup.category] ?? Code2;

  return (
    <section
      id="skills"
      className="relative border-t border-slate-200 bg-blue-50/50 transition-colors duration-500 dark:border-white/10 dark:bg-blue-950/30"
    >
      <div className="relative z-10 mx-auto max-w-6xl py-20 sm:py-24">
        <div className="px-5 sm:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Skills
                </h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
                  Hover or tap a category to see what's inside.
                </p>
              </div>
              {/* Scroll buttons — hidden on touch-first layouts where swiping is natural */}
              <div className="hidden shrink-0 items-center gap-2 sm:flex">
                <button
                  onClick={() => scrollBy(-1)}
                  disabled={!canScrollLeft}
                  aria-label="Scroll categories left"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-300 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollBy(1)}
                  disabled={!canScrollRight}
                  aria-label="Scroll categories right"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-300 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Category chip row — single line, scrollable left to right */}
        <Reveal delay={80}>
          <div className="relative mt-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/60 sm:w-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-blue-50/50 to-transparent dark:from-blue-950/60 sm:w-10" />

            <div
              ref={scrollerRef}
              onScroll={updateScrollState}
              className="no-scrollbar flex gap-2 overflow-x-auto scroll-smooth px-5 sm:px-8"
            >
              {SKILLS.map((group, i) => {
                const Icon = CATEGORY_ICONS[group.category] ?? Code2;
                const isActive = active === i;
                return (
                  <button
                    key={group.category}
                    type="button"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => setPinned(i)}
                    className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "border-navy-900 bg-navy-900 text-white shadow-sm dark:border-navy-400 dark:bg-navy-500 dark:text-slate-950"
                        : "border-slate-200 bg-white text-slate-600 hover:border-navy-900/30 hover:text-navy-900 dark:border-white/10 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-navy-200"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="whitespace-nowrap">{group.category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Content panel — crossfades to the active category */}
        <div className="mt-6 px-5 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.category}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900/5 text-navy-900 dark:bg-navy-300/10 dark:text-navy-200">
                  <ActiveIcon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold">{activeGroup.category}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-navy-900/5 px-3 py-1.5 text-sm font-medium text-navy-900 dark:bg-navy-300/10 dark:text-navy-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
