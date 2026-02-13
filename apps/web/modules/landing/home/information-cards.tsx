"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function GuidedOnboardingCard() {
  return (
    <motion.article
      className="group bg-citrus-zest rounded-3xl p-8 pb-0 overflow-hidden min-h-[350px] md:min-h-[560px] md:row-span-2 flex flex-col"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={0}
      whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
    >
      <div className="relative z-10 text-center mb-6 transition-transform duration-500 ease-out group-hover:scale-105">
        <h3 className="text-2xl md:text-4xl font-medium text-white leading-tight mb-3">
          Todo desde un solo lugar, siempre
        </h3>
        <p className="text-white text-sm">
          Nuestra plataforma te permite estudiar y avanzar diferentes temas desde un solo lugar
        </p>
      </div>
      <div className="flex-1 flex justify-center items-end transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        <div className="relative bg-background shadow-2xl border-black/5 overflow-hidden z-10 w-56 md:w-64 h-96 md:h-[460px] rounded-t-3xl border-[6px] border-b-0">
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-10 top-2 w-20 h-5"
            aria-hidden
          />
          <div className="absolute inset-0 bg-background pt-14 px-5">
            <h4 className="text-3xl font-medium text-foreground leading-none tracking-tight mt-4">
              Tu espacio de estudio
            </h4>
            <h4 className="text-3xl font-medium text-foreground leading-none tracking-tight mb-4">
              está listo!
            </h4>
            <p className="text-sm text-neutral-500 leading-snug mb-8">
              Invite your team and start collaborating instantly.
            </p>
            <div className="relative bg-linear-to-br from-citrus-zest via-citrus-zest/80 to-citrus-zest/50 rounded-2xl p-4 h-52 shadow-xl overflow-hidden">
              <svg
                className="absolute inset-0 size-full"
                viewBox="0 0 100 60"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0,60 Q30,40 60,50 T100,30"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="0.5"
                />
                <path
                  d="M0,55 Q40,35 70,45 T100,25"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                />
              </svg>
              <div className="relative z-10 flex items-start justify-between gap-3 h-full">
                <div>
                  <p className="text-base font-semibold text-neutral-900">
                    Verbos
                  </p>
                  <p className="text-base font-semibold text-neutral-900">
                    Regulares
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-25 text-black"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div
                className="absolute bottom-3 left-5 flex items-center gap-2 text-neutral-700 text-xs tracking-widest"
                aria-hidden
              >
                <span>SayGo</span>
                <span>•</span>
                <span>2026</span>
                <span>•</span>
                <span>Class 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function RealTimeDataCard() {
  return (
    <motion.article
      className="group bg-amalfi-tile rounded-3xl p-8 overflow-hidden min-h-80 relative flex flex-col md:block"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={0.1}
      whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
    >
      <div className="relative z-10 max-w-48 transition-transform duration-500 ease-out group-hover:scale-105">
        <h3 className="text-xl md:text-2xl whitespace-nowrap font-medium text-card-foreground leading-tight mb-3">
          Clases personalizadas
        </h3>
        <p className="text-card-foreground-muted text-sm">
          Aprende a tu ritmo con clases personalizadas y adaptadas a tus necesidades
        </p>
      </div>
      <div className="relative md:absolute mt-8 md:mt-0 md:right-12 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105 self-center md:self-auto">
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <div className="absolute size-56 border border-citrus-zest/80 rounded-full" />
          <div className="absolute size-72 border border-citrus-zest/60 rounded-full" />
          <div className="absolute size-88 border border-citrus-zest/40 rounded-full" />
        </div>
        <div className="relative bg-background shadow-2xl border-black overflow-hidden z-10 w-44 md:w-48 h-64 md:h-72 rounded-3xl border-4">
          <div
            className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-10 top-2 w-16 h-4"
            aria-hidden
          />
          <div className="absolute inset-0 bg-background pt-9 px-3">
            <div className="bg-white rounded-full px-2 py-1.5 mb-3 flex items-center gap-1.5 border border-neutral-200">
              <span className="text-neutral-400 text-xs">Search class...</span>
            </div>
            <p className="text-xs text-neutral-500 mb-0.5">Current class</p>
            <p className="text-xl font-medium text-white mb-3">Class 1</p>
            <div className="flex gap-1.5 mb-4">
              <span className="bg-citrus-zest text-black text-xs px-2.5 py-1 rounded-full">
                Verbos
              </span>
              <span className="text-neutral-400 text-xs px-2 py-1">Regulares</span>
              <span className="text-neutral-400 text-xs px-2 py-1">Irregulares</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-neutral-900 rounded-2xl px-5 py-3 shadow-xl z-20 whitespace-nowrap">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-neutral-400 text-xs">Class status</span>
            <span className="text-neutral-500 text-xs">ⓘ</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-medium text-white">All topics</span>
            <span className="text-xs font-medium text-citrus-zest bg-citrus-zest/20 px-2 py-0.5 rounded">
              ✓ 100%
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const AVATAR_IMAGES = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
];

export function TrustedByCard() {
  return (
    <motion.article
      className="group bg-amalfi-tile rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-64"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={0.2}
      whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
    >
      <div className="transition-transform duration-500 ease-out group-hover:scale-110">
        <h3 className="text-2xl md:text-3xl font-medium text-card-foreground leading-tight mb-1">
          Confianza de 
        </h3>
        <h3 className="text-2xl md:text-3xl font-medium text-card-foreground leading-tight mb-5">
          nuestros estudiantes
        </h3>
      </div>
      <div className="transition-transform duration-500 ease-out group-hover:scale-105">
        <div className="flex items-center">
          {AVATAR_IMAGES.map((src, i) => (
            <div
              key={src}
              className="size-12 rounded-full border-2 border-white/25 overflow-hidden -ml-4 first:ml-0"
            >
              <Image
                alt=""
                src={src}
                width={48}
                height={48}
                className="size-full object-cover"
              />
            </div>
          ))}
          <div className="size-12 rounded-full border-2 border-white/25 overflow-hidden -ml-4 bg-citrus-zest text-black flex items-center justify-center text-sm font-semibold">
            5+
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function BuiltToScaleCard() {
  return (
    <motion.article
      className="group bg-citrus-zest rounded-3xl p-6 md:p-8 flex flex-col min-h-64"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={0.3}
      whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
    >
      <div className="mb-auto transition-transform duration-500 ease-out group-hover:scale-105">
        <h3 className="text-xl md:text-2xl font-medium text-white leading-tight mb-2">
          Hecho para crecer
        </h3>
        <p className="text-white text-sm">
          Mejoramos tu inglés con herramientas modernas y eficientes
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-6 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        <div className="flex items-center justify-between bg-background rounded-xl p-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">🚀</span>
            <span className="text-foreground font-medium">+16 temas</span>
          </div>
          <span className="text-black text-sm font-medium">+24%</span>
        </div>
        <div className="flex items-center justify-between bg-background rounded-xl p-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="text-foreground font-medium">%80 avance semanal</span>
          </div>
          <span className="text-black text-sm font-medium">+0.2%</span>
        </div>
      </div>
    </motion.article>
  );
}
