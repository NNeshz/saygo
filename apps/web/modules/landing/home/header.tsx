"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";

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

function HeroHeading() {
  const lines = [
    "Building confident",
    "English speakers who",
    { text: "connect & succeed.", italic: true },
  ];

  return (
    <h1 className="text-[clamp(3rem,8vw,12rem)] leading-[0.90] tracking-tighter font-bold text-white">
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
      className="mt-8 text-xl md:text-2xl max-w-2xl text-white"
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
    >
      Una escuela de inglés especializada en formar hablantes seguros y
      competentes — construyendo verdaderas conexiones que transforman vidas y
      abren oportunidades profesionales.
    </motion.p>
  );
}

export function Header() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useTransform(x, [0, 1], [-15, 15]);
  const mouseY = useTransform(y, [0, 1], [-15, 15]);

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
      className="w-full relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ x: mouseX, y: mouseY }}
      >
        <img
          src="/bg/BG.jpg"
          alt="Background"
          className="w-full h-full object-cover scale-120" // scale up slightly to avoid edges
        />
      </motion.div>

      <MaxWidth className="relative z-10 w-full flex flex-col items-center justify-center text-center pt-24 pb-12">
        <HeroHeading />
        <HeroDescription />
      </MaxWidth>
    </div>
  );
}
