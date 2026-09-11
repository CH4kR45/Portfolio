import React from "react";
import { MapPin } from "lucide-react";
import Reveal from "../Reveal";
import { ABOUT } from "../../data/content";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-slate-50 transition-colors duration-500 dark:border-white/10 dark:bg-slate-900"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-5 md:items-center">

        <Reveal delay={100} className="md:col-span-3">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            About me
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
            {/* TODO: edit ABOUT.paragraphs in src/data/content.js */}
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 md:justify-start">
            <MapPin className="h-4 w-4 shrink-0" />
            {/* TODO: edit ABOUT.location in src/data/content.js */}
            <span>{ABOUT.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
