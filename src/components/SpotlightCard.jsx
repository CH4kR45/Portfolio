import React from "react";
import { handleSpotlightMove } from "../hooks/useSpotlight";

/**
 * Card wrapper with a soft radial-gradient border glow that follows
 * the cursor on hover (see .spotlight-card in src/index.css).
 * Renders as an <a> when `href` is provided, otherwise a <div>.
 */
export default function SpotlightCard({ href, className = "", children, ...rest }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onMouseMove={handleSpotlightMove}
      className={`spotlight-card rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
