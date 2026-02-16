"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import { Badge } from "@saygo/ui/src/components/badge";
import { Button } from "@saygo/ui/src/components/button";
import { IconArrowDownRight } from "@tabler/icons-react";

const lineVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const paragraphVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const badgeMotionVariants = {
  initial: {
    opacity: 0,
    y: -8,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 18,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    y: -2,
  },
};

function HeroHeading() {
  const lines = ["Conoce nuestros temarios", { text: "para avanzar tu inglés.", italic: true }];

  return (
    <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.95] tracking-tighter font-bold text-white">
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <motion.span
            className="block"
            style={{
              transformOrigin: "center bottom",
              transformStyle: "preserve-3d",
            }}
            custom={i}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          >
            {typeof line === "string" ? (
              line
            ) : (
              <em className="font-serif font-normal">{line.text}</em>
            )}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function HeroDescription() {
  return (
    <motion.p
      className="text-base md:text-lg max-w-xl text-white/90"
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
    >
      Escuela de inglés enfocada en que hables con seguridad, naturalidad y
      propósito. Con clases personales, grupales y online.
    </motion.p>
  );
}

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useTransform(x, [0, 1], [-10, 10]);
  const mouseY = useTransform(y, [0, 1], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY, currentTarget } = event;
    const { width, height } = currentTarget.getBoundingClientRect();
    const xPct = clientX / width;
    const yPct = clientY / height;
    x.set(xPct);
    y.set(yPct);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-full relative overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ x: mouseX, y: mouseY }}
      >
        <img
          src="/bg/BG Blue.jpg"
          alt="Background"
          className="w-full h-full object-cover scale-120" // scale up slightly to avoid edges
        />
      </motion.div>

      <div className="relative z-10 w-full">
        <section className="min-h-dvh flex items-center justify-center">
          <MaxWidth className="w-full flex flex-col items-center justify-center text-center pt-24 pb-12 space-y-4">
            <HeroHeading />
            <HeroDescription />
          </MaxWidth>
        </section>
      </div>
    </div>
  );
}
