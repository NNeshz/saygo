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
    <div className="relative w-full overflow-hidden py-8 select-none">
      <motion.div
        className="flex gap-6 md:gap-40 shrink-0 w-max"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
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
            className="text-2xl md:text-7xl text-white py-4 italic font-serif whitespace-nowrap"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
