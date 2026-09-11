import React, { useState } from "react";

/**
 * Pill badge showing a tool/tech logo + name. Falls back to a small
 * placeholder box if `item.logo` is missing or the image 404s, so a
 * bad/unavailable logo URL never breaks the layout. Shared by the
 * Tech Stack and Tools sections.
 *
 * `neutralBg` (Tools section only): renders the logo on a fixed,
 * always-light circular backdrop instead of directly on the card. This
 * keeps every logo's real color consistent in both light and dark mode
 * — a colored logo (Photoshop, Figma, Postman...) stays colored in
 * both, and a black/monochrome logo (GitHub, Claude, ChatGPT...) stays
 * visible in both without needing a per-icon dark:invert guess. Tech
 * Stack doesn't use this — it keeps its original transparent look.
 */
export default function LogoBadge({ item, size = "md", neutralBg = false }) {
  const [failed, setFailed] = useState(!item.logo);
  const dims = size === "sm" ? "h-6 w-6" : "h-8 w-8";

  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-900">
      {failed ? (
        // IMAGE: no logo available for this one yet — drop a file in
        // /public/logos/ and set its `logo` path in src/data/content.js
        // (e.g. logo: "/logos/capcut.svg") to replace this box.
        <span
          className={`flex ${dims} shrink-0 items-center justify-center rounded-full border border-dashed border-navy-900/30 text-[10px] font-semibold text-navy-900 dark:border-navy-300/30 dark:text-navy-200`}
        >
          {item.code}
        </span>
      ) : neutralBg ? (
        <span
          className={`flex ${dims} shrink-0 items-center justify-center rounded-full bg-white p-1 ring-1 ring-black/5`}
        >
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="h-full w-full object-contain"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        </span>
      ) : (
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className={`${dims} shrink-0 object-contain ${item.invertOnDark ? "dark:invert" : ""}`}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      <span className="whitespace-nowrap text-sm font-medium">{item.name}</span>
    </div>
  );
}
