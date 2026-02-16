"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "...Tenía conocimientos básicos de inglés y quería mejorar mi nivel y mis bases. Ahora estoy segura de poder hablar.",
    author: "Andrea Pineda",
    role: "Estudiante",
    company: "Agustín Melgar",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    quote:
      "La plataforma ha sido intuitiva y fácil de usar. Me ha ayudado a mejorar mi nivel de inglés de forma significativa.",
    author: "Amado González",
    role: "Conductor",
    company: "90 minutes",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    quote:
      "Realmente noté un cambio, tenía algunas dudas con las bases del idioma, pero ya se han despejado.",
    author: "Bastian Reverendo",
    role: "Estudiante",
    company: "Agustín Melgar",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    quote:
      "Me encanta la plataforma, me ha ayudado a mejorar mi nivel de inglés de forma significativa.",
    author: "David Pineda",
    role: "Estudiante",
    company: "Primaria",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
          La confianza de nuestros estudiantes
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Avatars */}
          <div className="flex items-center gap-6 justify-center lg:justify-start">
            {testimonials.map((t, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className="relative group focus:outline-none"
                  aria-label={`Select testimonial by ${t.author}`}
                >
                  <div
                    className={`relative w-16 h-16 rounded-full overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "scale-110 opacity-100"
                        : "scale-100 opacity-50 hover:opacity-100 grayscale"
                    }`}
                  >
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {isActive && (
                    <div className="absolute -inset-2">
                      <svg className="w-20 h-20 -rotate-90">
                        <circle
                          className="text-white/10"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="transparent"
                          r="38"
                          cx="40"
                          cy="40"
                        />
                        <motion.circle
                          className="text-citrus-zest"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="transparent"
                          r="38"
                          cx="40"
                          cy="40"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 8,
                            ease: "linear",
                            repeat: 0,
                          }}
                        />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Quote */}
          <div className="relative min-h-[200px]">
            <AnimatePresence mode="wait">
              {testimonial && (
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <blockquote className="text-xl leading-relaxed lg:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <span>{testimonial.author},</span>
                    <span className="text-neutral-500">
                      {testimonial.role} @ {testimonial.company}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
