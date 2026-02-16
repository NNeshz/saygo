"use client";

import { motion } from "framer-motion";
import { Button } from "@saygo/ui/src/components/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saygo/ui/src/components/accordion";

const fadeIn = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function FAQ() {
  return (
    <section className="w-full py-32 px-6">
      <div className="mx-auto max-w-2xl flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center space-y-2 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
          custom={0}
        >
          <p className="text-sm font-medium text-muted-foreground">
            Preguntas Frecuentes
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Todo lo que necesitas saber
          </h2>
          <p className="text-base text-muted-foreground max-w-md">
            ¿No encuentras la respuesta? ¡Escríbenos!
          </p>
          <div className="flex items-center pt-2">
            <Button>Contactar</Button>
          </div>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={1}
        >
          <Accordion defaultValue={["age"]} className="w-full space-y-3">
            <AccordionItem value="age" className="border-none">
              <AccordionTrigger className="w-full rounded-xl bg-muted px-6 py-4 text-left hover:no-underline hover:bg-muted/80">
                ¿Qué edad tienen los estudiantes?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                Los estudiantes tienen desde 10 años hasta adultos. Los cursos están diseñados para diferentes niveles de habilidad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="level" className="border-none">
              <AccordionTrigger className="w-full rounded-xl bg-muted px-6 py-4 text-left hover:no-underline hover:bg-muted/80">
                ¿Qué niveles de habilidad tienen los estudiantes?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                Los cursos están diseñados para niveles desde cero hasta un nivel B1.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="support" className="border-none">
              <AccordionTrigger className="w-full rounded-xl bg-muted px-6 py-4 text-left hover:no-underline hover:bg-muted/80">
                ¿Cómo puedo contactar soporte?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                Escríbenos por email, chat o teléfono. Respondemos en 24 horas en días hábiles.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
