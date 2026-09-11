import React from "react";
import Reveal from "../Reveal";
import LogoBadge from "../LogoBadge";
import { TECH_STACK } from "../../data/content";

export default function TechStack() {
  // Duplicate the list so the CSS marquee loops seamlessly.
  const loop = [...TECH_STACK, ...TECH_STACK];

  return (
    <section id="stack" className="relative mx-auto max-w-6xl py-20 sm:py-24">
      <div className="px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Tech stack
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            The languages, frameworks, and platforms I build with.
          </p>
        </Reveal>
      </div>

      {/* Full-bleed marquee: edges fade with a mask so it doesn't feel
          like it's cut off, and it pauses on hover for accessibility. */}
      <Reveal delay={100}>
        <div className="group mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
            {loop.map((tech, i) => (
              <LogoBadge item={tech} key={`${tech.name}-${i}`} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
