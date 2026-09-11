import React from "react";
import Reveal from "../Reveal";
import { HERO } from "../../data/content";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[radial-gradient(rgba(11,29,58,0.12)_1px,transparent_1px)] bg-[length:22px_22px] dark:bg-[radial-gradient(rgba(147,197,253,0.12)_1px,transparent_1px)]"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 md:flex-row md:items-center md:justify-between lg:pt-44">
        <div className="max-w-xl text-center md:text-left">
          <Reveal>
            <p className="mb-3 text-sm font-medium text-navy-900 dark:text-navy-200">
              {/* TODO: edit HERO.title in src/data/content.js */}
              {HERO.title}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display bg-gradient-to-r from-navy-900 via-navy-500 to-navy-900 bg-[length:200%_auto] bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent animate-gradient-x dark:from-navy-100 dark:via-navy-300 dark:to-navy-100 sm:text-5xl lg:text-6xl">
              {/* TODO: edit HERO.name in src/data/content.js */}
              {HERO.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
              {/* TODO: edit HERO.intro in src/data/content.js */}
              {HERO.intro}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="rounded-full bg-navy-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-950 hover:shadow-lg dark:bg-navy-500 dark:hover:bg-navy-400"
              >
                View my work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/5"
              >
                Get in touch
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          {/* IMAGE: Replace this container's contents with your profile photo.
              e.g. <img src="/profile.jpg" alt="Your Name" className="h-full w-full object-cover" />
              Drop the file in /public and reference it as "/profile.jpg".
              Recommended: square image, at least 500x500px. */}
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-slate-900 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
            <img
              src="/profile.svg"
              alt="Hans Christian Cañadido"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
