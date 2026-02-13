"use client";

import { useRef } from "react";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useTransform } from "framer-motion";

const PARAGRAPH =
  "Aprende inglés a tu manera. Flexibilidad, tecnología y expertos para lograr confianza y fluidez real.";

const words = PARAGRAPH.split(" ");

function RevealWord({
  word,
  index,
  scrollYProgress,
}: {
  word: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const thresholdStart = (index / words.length) * 0.8;
  const thresholdEnd = thresholdStart + 0.04;
  const opacity = useTransform(
    scrollYProgress,
    [0, thresholdStart, thresholdEnd, 1],
    [0.15, 0.15, 1, 1],
  );
  const filter = useTransform(
    scrollYProgress,
    [0, thresholdStart, thresholdEnd, 1],
    ["blur(8px)", "blur(8px)", "blur(0px)", "blur(0px)"],
  );

  return (
    <motion.span
      className="mr-2 inline-block lg:mr-3"
      style={{
        opacity,
        filter,
        transition: "opacity 75ms, filter 75ms",
      }}
    >
      {word}
    </motion.span>
  );
}

export function RevealParagraph() {
  const paragraphRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["end end", "center center"],
  });

  return (
    <div ref={paragraphRef} className="mx-auto max-w-5xl pb-8">
      <p className="text-3xl font-medium text-left leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-snug">
        {words.map((word, i) => (
          <RevealWord
            key={`${word}-${i}`}
            word={word}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </p>
    </div>
  );
}
