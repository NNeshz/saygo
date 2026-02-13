"use client";

import { motion } from "framer-motion";

const words = [
  "Knowledge",
  "Growth",
  "Understanding",
  "Curiosity",
  "Practice",
  "Mastery",
  "Discovery",
  "Wisdom",
  "Progress",
  "Success",
  "Excellence",
  "Fluency",
  "Confidence",
  "Clarity",
  "Focus",
];

export function Slider() {
  return (
    <div className="relative w-full overflow-hidden py-6 select-none">
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to right, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)",
        }}
      />
      <motion.div
        className="flex gap-6 md:gap-40 shrink-0 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 250,
            ease: "linear",
          },
        }}
      >
        {[...words, ...words].map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="text-2xl md:text-7xl text-foreground italic font-serif whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
