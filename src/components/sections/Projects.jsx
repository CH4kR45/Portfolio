import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import SpotlightCard from "../SpotlightCard";
import { PROJECTS, GRAPHIC_DESIGN } from "../../data/content";

/**
 * Project cover: cycles through `images` automatically while the
 * cursor is over the card, crossfading between them. Falls back to a
 * plain placeholder if an image is missing/404s, and never cycles if
 * there's only one image (or none).
 */
function ProjectMedia({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [broken, setBroken] = useState({});
  const timerRef = useRef(null);

  const start = () => {
    if (images.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1800);
  };
  const stop = () => {
    clearInterval(timerRef.current);
    setIndex(0);
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const current = images[index];
  const showPlaceholder = !current || broken[index];

  return (
    <div
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-800"
      onMouseEnter={start}
      onMouseLeave={stop}
    >
      {/* IMAGE: this cycles through PROJECTS[i].images automatically on
          hover — add real screenshots in src/data/content.js and drop
          the files in /public/projects/ */}
      <AnimatePresence>
        {!showPlaceholder && (
          <motion.img
            key={index}
            src={current}
            alt=""
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setBroken((b) => ({ ...b, [index]: true }))}
          />
        )}
      </AnimatePresence>

      {showPlaceholder && (
        <span className="text-xs text-slate-500 dark:text-slate-400">Project image</span>
      )}

      {/* Dot indicators — only shown when there's more than one photo */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 z-[1] flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * A single graphic design showcase image. Landscape and portrait
 * images are both welcome: every image is set to the same fixed
 * height and left at `w-auto`, so the browser scales each one's width
 * to match its natural aspect ratio — that's what keeps the row's
 * heights aligned without cropping or distorting anything.
 */
function ShowcaseImage({ item }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // IMAGE: add a file at this path and it replaces this placeholder
    // automatically — see GRAPHIC_DESIGN in src/data/content.js.
    return (
      <div className="flex h-44 w-32 shrink-0 items-center justify-center rounded-xl border border-dashed border-navy-900/30 text-xs text-navy-900 dark:border-navy-300/30 dark:text-navy-200">
        Add image
      </div>
    );
  }

  return (
    <img
      src={item.src}
      alt={item.alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-44 w-auto shrink-0 rounded-xl object-cover shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    />
  );
}

export default function Projects() {
  // Duplicate the list so the CSS marquee loops seamlessly (same
  // technique as the Tech Stack section).
  const designLoop = [...GRAPHIC_DESIGN, ...GRAPHIC_DESIGN];

  return (
    <section
      id="projects"
      className="border-t border-slate-200 bg-slate-50 transition-colors duration-500 dark:border-white/10 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            A selection of things I've built.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <SpotlightCard href={project.link} className="group flex h-full flex-col overflow-hidden">
                <ProjectMedia images={project.images} />

                <div className="relative z-[2] flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold">{project.title}</h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-navy-900 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-navy-200" />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-navy-900/5 px-2.5 py-1 text-[11px] font-medium text-navy-900 dark:bg-navy-300/10 dark:text-navy-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Graphic design — a subsection of Projects, not its own nav
            item. Same background/section as the cards above it. */}
        <div className="mt-16 border-t border-slate-200 pt-12 dark:border-white/10">
          <Reveal>
            <h3 className="text-lg font-semibold tracking-tight">Graphic design</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              A few pieces of design and visual work.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="group relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
              <div
                className="flex w-max animate-marquee items-end gap-4 group-hover:[animation-play-state:paused]"
                style={{ animationDuration: "40s" }}
              >
                {designLoop.map((item, i) => (
                  <ShowcaseImage item={item} key={`${item.src}-${i}`} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}