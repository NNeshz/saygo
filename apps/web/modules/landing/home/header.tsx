"use client";

import { motion } from "framer-motion";
import { Grainient } from "@saygo/ui/src/components/reactbits/grainient";
import { MaxWidth } from "@saygo/web/modules/global/max-widht";

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
    <h1 className="text-[clamp(3rem,8vw,12rem)] leading-[1.05] tracking-tighter text-foreground">
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
              <em className="font-serif">{line.text}</em>
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
      className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl"
      variants={paragraphVariants}
      initial="hidden"
      animate="visible"
    >
      Una escuela de inglés especializada en formar hablantes seguros y competentes — 
      construyendo verdaderas conexiones que transforman vidas y abren oportunidades profesionales.
    </motion.p>
  );
}

export function Header() {
  return (
    <div className="w-full h-dvh relative">
      <Grainient
        color1="#E8A84D" // cream-gelato
        color2="#4A5FA8" // amalfi-tile
        color3="#E8A84D" // citrus-zest
        timeSpeed={0.25}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <MaxWidth className="absolute inset-0 flex items-center justify-start px-6">
        <div>
          <HeroHeading />
          <HeroDescription />
        </div>
      </MaxWidth>
    </div>
  );
}
