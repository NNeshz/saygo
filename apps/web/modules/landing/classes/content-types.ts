import type { ReactNode } from "react";

/** Bloque de texto (párrafo o lista) */
export type ParagraphBlock = {
  type: "paragraph";
  content: ReactNode;
};

/** Bloque de tabla: cabeceras + filas */
export type TableBlock = {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
};

/** Ejercicio estático: pregunta y opcionalmente respuesta (para mostrar/ocultar) */
export type ExerciseItem = {
  instruction?: string;
  question: string;
  answer?: string;
};

export type ExerciseBlock = {
  type: "exercise";
  title?: string;
  items: ExerciseItem[];
};

/** Bloque de vocabulario: palabra en inglés y traducción */
export type VocabularyItem = {
  en: string;
  es: string;
};

export type VocabularyBlock = {
  type: "vocabulary";
  title?: string;
  items: VocabularyItem[];
};

export type LessonBlock = ParagraphBlock | TableBlock | ExerciseBlock | VocabularyBlock;

export type LessonContent = {
  title: string;
  description?: string;
  blocks: LessonBlock[];
};

export function isParagraph(b: LessonBlock): b is ParagraphBlock {
  return b.type === "paragraph";
}
export function isTable(b: LessonBlock): b is TableBlock {
  return b.type === "table";
}
export function isExercise(b: LessonBlock): b is ExerciseBlock {
  return b.type === "exercise";
}
export function isVocabulary(b: LessonBlock): b is VocabularyBlock {
  return b.type === "vocabulary";
}
