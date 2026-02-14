# Lecciones Zero to A1

Cada lección es un archivo que exporta un `LessonContent` con:

- **title** – Título de la clase
- **description** – (opcional) Subtítulo o resumen
- **blocks** – Lista de bloques: `paragraph`, `table` o `exercise`

## Cómo añadir una nueva lección

1. Crea `[slug].tsx` en esta carpeta (ej. `primer-contacto.tsx`). El **slug** debe coincidir con el `id` de la sección en el accordion de `zero.tsx`.
2. Exporta un objeto con la forma de `LessonContent` (ver `content-types.ts` y `fundamentos.tsx`).
3. En `index.ts`:
   - Importa la lección: `import { primerContacto } from "./primer-contacto";`
   - Añádela al objeto: `const lessons = { fundamentos, primerContacto };`

En el overview de Zero aparecerá automáticamente el enlace "Ver clase" en la sección cuyo `id` coincida con el slug.

## Tipos de bloques

- **paragraph**: `{ type: "paragraph", content: <p>...</p> }` — texto/JSX libre.
- **table**: `{ type: "table", caption?: string, headers: string[], rows: string[][] }`.
- **exercise**: `{ type: "exercise", title?: string, items: [{ instruction?, question, answer? }] }` — respuestas en `<details>` "Ver respuesta".
