/**
 * Attach to a card's onMouseMove to update the --x / --y CSS custom
 * properties that the `.spotlight-card` class (see src/index.css)
 * uses to position its radial-gradient hover glow.
 */
export function handleSpotlightMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--x", `${e.clientX - rect.left}px`);
  card.style.setProperty("--y", `${e.clientY - rect.top}px`);
}
