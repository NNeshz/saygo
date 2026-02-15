import type { ReactNode } from "react";

/** Identificador de sección para referencias (ej: "solucionen la sección 2.2") */
export type SectionId = {
  part: number;
  subpart?: number;
};

/** Bloque de texto (párrafo o lista) */
export type ParagraphBlock = {
  type: "paragraph";
  section?: SectionId;
  content: ReactNode;
};

/** Bloque de tabla: cabeceras + filas */
export type TableBlock = {
  type: "table";
  section?: SectionId;
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
  section?: SectionId;
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
  section?: SectionId;
  title?: string;
  items: VocabularyItem[];
};

/** Genera el id para ancla (ej: "parte-1", "parte-2-1") */
export function getSectionAnchor(section: SectionId): string {
  return section.subpart != null
    ? `parte-${section.part}-${section.subpart}`
    : `parte-${section.part}`;
}

/** Formato visible de sección (ej: "Parte 1", "Parte 1.1") */
export function getSectionLabel(section: SectionId): string {
  return section.subpart != null
    ? `Parte ${section.part}.${section.subpart}`
    : `Parte ${section.part}`;
}

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
