import React from "react";
import { Award } from "lucide-react";
import Reveal from "../Reveal";
import SpotlightCard from "../SpotlightCard";
import { CERTIFICATIONS } from "../../data/content";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-slate-200 bg-slate-50 transition-colors duration-500 dark:border-white/10 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Certifications
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Eligibility and course completions I've earned along the way.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {CERTIFICATIONS.map((group, i) => (
            <Reveal key={group.issuer} delay={i * 100}>
              <SpotlightCard className="h-full p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-900 dark:bg-navy-300/10 dark:text-navy-200">
                    <Award className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold leading-snug">{group.issuer}</h3>
                    <ul className="mt-3 space-y-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm leading-relaxed text-slate-500 dark:text-slate-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
