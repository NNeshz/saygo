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

export type LessonBlock = ParagraphBlock | TableBlock | ExerciseBlock;

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
