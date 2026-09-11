import React from "react";
import { FOOTER_NAME } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-8 text-center text-xs text-slate-500 transition-colors duration-500 dark:border-white/10 dark:bg-slate-950 dark:text-slate-400 sm:px-8">
      {/* TODO: edit FOOTER_NAME in src/data/content.js */}
      © {new Date().getFullYear()} {FOOTER_NAME}. Built with React &amp; Tailwind CSS.
    </footer>
  );
}
