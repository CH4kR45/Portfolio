import React from "react";
import { motion } from "framer-motion";

/**
 * Fades + rises children into view the first time they scroll into
 * the viewport. Thin wrapper around framer-motion's whileInView so
 * every section animates the same way.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
