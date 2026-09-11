import React, { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, LOGO_MARK } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-500 dark:border-white/10 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-lg font-semibold tracking-tight text-navy-900 dark:text-navy-200"
        >
          {LOGO_MARK}
        </button>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="group relative text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-navy-900 transition-all duration-300 group-hover:w-full dark:bg-navy-300" />
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile / tablet controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="text-slate-900 dark:text-slate-100"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 dark:border-white/10 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="rounded-md px-2 py-2 text-left text-sm font-medium text-slate-500 transition-colors duration-300 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
