import type { LessonContent } from "../../content-types";
import { fundamentos } from "./fundamentos";

const lessons: Record<string, LessonContent> = {
  fundamentos,
};

export const zeroLessonSlugs = Object.keys(lessons) as string[];

export function getZeroLesson(slug: string): LessonContent | null {
  return lessons[slug] ?? null;
}

export function getZeroLessonSlugs(): string[] {
  return zeroLessonSlugs;
}
