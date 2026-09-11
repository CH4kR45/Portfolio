import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../Reveal";
import { CONTACT, SOCIALS } from "../../data/content";

const ICONS = { Github, Linkedin, Mail };

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-slate-200 bg-[radial-gradient(rgba(11,29,58,0.1)_1px,transparent_1px)] bg-[length:22px_22px] transition-colors duration-500 dark:border-white/10 dark:bg-[radial-gradient(rgba(147,197,253,0.1)_1px,transparent_1px)]"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 sm:py-24">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {/* TODO: edit CONTACT.heading in src/data/content.js */}
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            {/* TODO: edit CONTACT.note in src/data/content.js */}
            {CONTACT.note}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-8 inline-block rounded-full bg-navy-900 px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-950 hover:shadow-lg dark:bg-navy-500 dark:hover:bg-navy-400"
          >
            {/* TODO: edit CONTACT.email in src/data/content.js */}
            {CONTACT.email}
          </a>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-8 flex items-center justify-center gap-5">
            {SOCIALS.map(({ icon, label, href }) => {
              const Icon = ICONS[icon] ?? Mail;
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-70 dark:border-white/10 dark:bg-slate-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
