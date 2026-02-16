"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconCalendar, IconUsers, IconRocket } from "@tabler/icons-react";
import { useScrollContext } from "@saygo/web/modules/landing/context/scroll-context";
import { Button } from "@saygo/ui/src/components/button";

const steps = [
  {
    icon: IconCalendar,
    title: "Evalucación inicial",
    description:
      "Evaluamos tu nivel de inglés y te asignamos un plan de estudios personalizado.",
  },
  {
    icon: IconUsers,
    title: "Comunicación directa",
    description:
      "Comunicamos contigo a través de WhatsApp para resolver tus dudas y seguir tu progreso.",
  },
  {
    icon: IconRocket,
    title: "Avanza a tu ritmo",
    description:
      "Avanza a tu ritmo con una comunidad de estudiantes que te ayudan a avanzar.",
  },
];

export function HowWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastStepRef = useRef<HTMLDivElement>(null);
  const [lineHeightPx, setLineHeightPx] = useState(0);
  const { scrollRef } = useScrollContext();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    container: scrollRef,
    offset: ["start center", "end center"],
  });

  // Measure the distance to the last step to set exact line height
  useEffect(() => {
    const updateHeight = () => {
      if (lastStepRef.current) {
        // The line starts at top-10 (40px).
        // The last icon center is at lastStep.offsetTop + 40px.
        // So height = (lastStep.offsetTop + 40px) - 40px = lastStep.offsetTop.
        setLineHeightPx(lastStepRef.current.offsetTop);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <section className="w-full py-24 px-6 relative z-10">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Sticky Content */}
          <div className="lg:sticky lg:top-32 lg:self-start lg:h-min">
            <h2 className="text-4xl font-medium leading-tight mb-6 sm:text-5xl lg:text-6xl">
              Cómo funciona
            </h2>
            <p className="text-lg mb-8 max-w-md leading-relaxed">
              Aprende inglés de manera personalizada, flexible y acompañada en cada paso.<br />
              <span className="block mt-2">
                <strong className="text-citrus-zest font-medium">
                  Sin complicaciones
                </strong>
                , solo resultados reales para tu desarrollo.
              </span>
            </p>
            <Button size={"lg"} variant={"default"}>
              Agendar una cita
            </Button>
          </div>

          {/* Right Column: Timeline */}
          <div
            ref={containerRef}
            className="relative flex flex-col gap-16 lg:gap-32 pl-4"
          >
            {/* Vertical Line Container */}
            <div
              className="absolute left-[55px] top-10 w-0.5 hidden lg:block"
              style={{
                height: lineHeightPx > 0 ? lineHeightPx : "auto",
                bottom: lineHeightPx > 0 ? "auto" : "40px",
              }}
            >
              {/* Background Line */}
              <div className="absolute inset-0 bg-muted" />
              {/* Animated Foreground Line */}
              <motion.div
                style={{ height: lineHeight }}
                className="absolute top-0 w-full bg-citrus-zest origin-top"
              />
            </div>

            {steps.map((step, index) => (
              <Step
                key={index}
                step={step}
                index={index}
                progress={scrollYProgress}
                total={steps.length}
                measureRef={
                  index === steps.length - 1 ? lastStepRef : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({
  step,
  index,
  progress,
  total,
  measureRef,
}: {
  step: any;
  index: number;
  progress: any;
  total: number;
  measureRef?: React.RefObject<HTMLDivElement | null>;
}) {
  const Icon = step.icon;

  const position = total > 1 ? index / (total - 1) : 0;

  const threshold = position * 0.9;

  const backgroundColor = useTransform(
    progress,
    [Math.max(0, threshold - 0.05), threshold + 0.05],
    ["var(--background)", "var(--citrus-zest)"],
  );

  return (
    <div
      ref={measureRef}
      className="relative grid grid-cols-[80px_1fr] gap-6 items-start"
    >
      {/* Icon Circle */}
      <motion.div
        style={{
          backgroundColor,
        }}
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full"
      >
        <motion.div>
          <Icon size={32} stroke={1.5} />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="pt-2">
        <h3 className="text-2xl font-medium mb-2 text-left">{step.title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed text-left">
          {step.description}
        </p>
      </div>
    </div>
  );
}
