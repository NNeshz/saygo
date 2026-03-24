"use client";

import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saygo/ui/src/components/accordion";
import { cn } from "@saygo/ui/src/lib/utils";
import type { ClassLessonMeta, ClassLevelFolder } from "../lib/lessons";

export type ClassLevelPanel = {
  folder: ClassLevelFolder;
  label: string;
  lessons: ClassLessonMeta[];
};

type Props = {
  levels: ClassLevelPanel[];
};

const levelDescriptions: Record<string, string> = {
  zero: "Desde cero absoluto. Alfabeto, presentaciones y vocabulario esencial.",
  a1: "Conversación básica. Pasado simple, rutinas y frases del día a día.",
  a2: "Más fluidez. Present perfect, condicionales y vocabulario intermedio.",
  b1: "Nivel avanzado. Voz pasiva, reported speech y debate estructurado.",
};

export function ClassesLevelAccordion({ levels }: Props) {
  const firstWithLessons = levels.find((l) => l.lessons.length > 0)?.folder;

  return (
    <Accordion
      multiple
      className="w-full space-y-3"
      defaultValue={firstWithLessons ? [firstWithLessons] : []}
    >
      {levels.map(({ folder, label, lessons }) => (
        <AccordionItem key={folder} value={folder} className="border-none">
          <AccordionTrigger
            className="w-full rounded-xl bg-muted px-6 py-5 text-left hover:bg-muted/80 hover:no-underline"
          >
            <span className="flex w-full min-w-0 flex-col gap-1.5 pr-2">
              <span className="flex items-center justify-between gap-4">
                <span className="text-base font-semibold tracking-tight text-foreground">
                  {label}
                </span>
                <span
                  className={cn(
                    "shrink-0 text-xs font-medium tabular-nums",
                    lessons.length > 0
                      ? "text-citrus-zest"
                      : "text-muted-foreground",
                  )}
                >
                  {lessons.length === 0
                    ? "Próximamente"
                    : `${lessons.length} ${lessons.length === 1 ? "clase" : "clases"}`}
                </span>
              </span>
              <span className="text-sm leading-snug text-muted-foreground">
                {levelDescriptions[folder] ?? ""}
              </span>
            </span>
          </AccordionTrigger>

          <AccordionContent className="px-6 pb-2 pt-1">
            {lessons.length === 0 ? (
              <p className="py-3 text-sm leading-relaxed text-muted-foreground">
                Estamos preparando el contenido para este nivel.
              </p>
            ) : (
              <ul className="-mx-3 flex flex-col pt-2">
                {lessons.map((lesson, i) => (
                  <li key={lesson.slug}>
                    <Link
                      href={`/classes/${encodeURIComponent(folder)}/${encodeURIComponent(lesson.slug)}`}
                      className={cn(
                        "group flex items-center justify-between gap-3 rounded-lg px-3 py-3 transition-colors",
                        "hover:bg-muted/60",
                        i !== lessons.length - 1 && "border-b border-border/60",
                      )}
                    >
                      <span className="min-w-0 text-sm font-medium leading-snug text-foreground group-hover:text-citrus-zest">
                        {lesson.title}
                      </span>
                      <IconArrowRight className="size-3.5 shrink-0 text-muted-foreground/50 transition-all group-hover:translate-x-0.5 group-hover:text-citrus-zest" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
