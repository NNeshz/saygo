"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";

const BG_GREEN = "/bg/BG.jpg";

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
  const lines = ["Clases para", { text: "cada nivel.", italic: true }];

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
      Encuentra el material de clase organizado por niveles, listo para usar o descargar. Elige tu ruta de aprendizaje y accede a recursos en constante actualización.
    </motion.p>
  );
}

export function ClassesHeader() {
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
      className="relative w-full overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ x: mouseX, y: mouseY }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- asset estático en /public */}
        <img
          src={BG_GREEN}
          alt=""
          className="h-full w-full scale-120 object-cover"
        />
      </motion.div>

      <div className="relative z-10 w-full">
        <section className="flex min-h-dvh items-center justify-center">
          <MaxWidth className="flex w-full flex-col items-center justify-center space-y-4 pt-24 pb-12 text-center">
            <HeroHeading />
            <HeroDescription />
          </MaxWidth>
        </section>
      </div>
    </div>
  );
}
