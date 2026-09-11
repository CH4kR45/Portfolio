import React from "react";
import Reveal from "../Reveal";
import { EXPERIENCE } from "../../data/content";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Experience
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
          Where I've worked and what I've done.
        </p>
      </Reveal>

      {/* Timeline built with flex (dot column + content column) rather
          than absolute positioning, so it never clips on narrow screens. */}
      <div className="mt-10 space-y-8">
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.role + job.year} delay={i * 100}>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-navy-900 dark:bg-navy-300" />
                {i !== EXPERIENCE.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-slate-200 dark:bg-white/10" />
                )}
              </div>
              <div className="pb-2">
                <p className="text-xs font-medium text-navy-900 dark:text-navy-200">{job.year}</p>
                <h3 className="mt-1 text-base font-semibold">{job.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {job.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
