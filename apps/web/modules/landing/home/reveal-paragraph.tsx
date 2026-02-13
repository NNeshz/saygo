"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PARAGRAPH =
  "Aprende inglés a tu manera. Flexibilidad, tecnología y expertos para lograr confianza y fluidez real.";

const words = PARAGRAPH.split(" ");

export function RevealParagraph() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref} className="mx-auto max-w-5xl pb-8">
      <p className="text-3xl font-medium text-left leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-snug flex flex-wrap">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="mr-2 lg:mr-3"
            initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
            animate={
              isInView
                ? { opacity: 1, filter: "blur(0px)", y: 0 }
                : { opacity: 0, filter: "blur(8px)", y: 10 }
            }
            transition={{
              duration: 0.6,
              delay: i * 0.04, // Stagger effect
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        ))}
      </p>
    </div>
  );
}
