import { slugifyMarkdownFilename } from "./slug";

/**
 * Sección (`id` en zero.tsx) → slug de URL `/classes/zero/[slug]`.
 * Añade una entrada por cada `.md` en `md/zero/` (nombre del archivo sin ruta).
 */
export const ZERO_SECTION_LESSON_SLUG: Partial<Record<string, string>> = {
  "descripcion-fisica": slugifyMarkdownFilename(
    "Descripción Física y Espacial.md",
  ),
};
