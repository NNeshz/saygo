import type { LessonContent } from "../../content-types";
import { fundamentos } from "./fundamentos";
import { informacionPersonal } from "./informacion-personal";
import { mundoAlrededor } from "./mundo-alrededor";

const lessons: Record<string, LessonContent> = {
  fundamentos,
  "informacion-personal": informacionPersonal,
  "mundo-alrededor": mundoAlrededor,
};

export const zeroLessonSlugs = Object.keys(lessons) as string[];

export function getZeroLesson(slug: string): LessonContent | null {
  return lessons[slug] ?? null;
}

export function getZeroLessonSlugs(): string[] {
  return zeroLessonSlugs;
}
