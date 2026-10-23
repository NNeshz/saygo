# Cambios

## Estructura de módulos y submódulos

- Un módulo puede dividirse en submódulos: carpeta `apps/web/content/{nivel}/NN-slug/` con `_meta.json` (`title`, `description`, `order`, `hours`) y un `.md` + `.exercises.json` por submódulo.
- Frontmatter de cada submódulo: `title`, `description`, `order`, `submodule`, `duration`, `objectives`.
- Página del módulo (`/docs/{nivel}/NN-slug`) con la lista de submódulos, objetivos, duración y progreso.
- Menú lateral con los submódulos como sublista desplegable.
- Anterior / siguiente recorre los submódulos en orden.
- El progreso de un módulo se completa al terminar todos sus submódulos.
- `apps/web/scripts/validate-exercises.ts` valida también los ejercicios dentro de las carpetas de módulo.

Archivos: `apps/web/modules/docs/lib/content.ts`, `apps/web/modules/docs/types/docs.types.ts`, `apps/web/modules/docs/components/module-index.tsx`, `apps/web/modules/docs/components/docs-nav.tsx`, `apps/web/modules/docs/components/level-index.tsx`, `apps/web/modules/docs/components/practice/lesson-status.tsx`, `apps/web/modules/docs/lib/practice-progress.ts`, `apps/web/app/(public)/docs/[...slug]/page.tsx`.

## Módulo 15 — Futuros: going to y will

`apps/web/content/zero/15-futuros/`, 7 submódulos de 90 min:

| # | Submódulo |
|---|---|
| 15.1 | Be going to: mis planes |
| 15.2 | Planes con fecha y lugar |
| 15.3 | Will y el futuro de BE |
| 15.4 | Going to vs Will: planes e invitaciones |
| 15.5 | Palabras puente: to, for, very |
| 15.6 | Conectores para hablar más |
| 15.7 | Consolidación oral: mis planes |

## Correcciones de contenido (Zero → A1)

| Módulo | Corrección |
|---|---|
| 1 | Ejercicio de acento *record* (verbo vs sustantivo); "Los dos puntos" |
| 2 | Uso de *Good morning* |
| 3 | *in its place*; fila de *What color is…?* |
| 4 | Regla de comparativos con -y; respuesta a *How far…?*; Ejercicio 2 #1 y #5 |
| 5 | Pronunciación de *teeth*; *'s* vs *of*; Ejercicio 2 #3 y #4; "de la colonia" |
| 6 | *have got* en preguntas; *relatives*; *for* + duración en presente; ejemplos sin present perfect |
| 7 | "las siete y cuarto" |
| 8 | *Not very often*; "demasiado cara" |
| 9 | *like + to / -ing*; *play the guitar* / deportes sin *the*; pronunciación de *speak* |
| 10 | Regla de doble consonante (*opening*); "Llámame" |
| 11 | "denles"; *Me too*; etiquetas de respuestas cortas; texto modelo |
| 12 | Posición del adverbio; *arrived late at* |
| 13 | Ejercicio de precios en el tianguis; fila *It's rainy / It's raining*; "autobús" |
| 14 | Agrupación de irregulares; ejemplo de *did* |
| 16 | Fecha *Tuesday, April 28th, 2026*; tabla completa de ordinales 1st–31st |

## Documentos

- `docs/zero/plan-de-contenido.md` — plan completo Zero → A1: módulo → submódulo → temas, vocabulario del entorno, palabras puente y tarea oral de cada sesión.
- `ZeroToA1.md` — Módulo 15 con sus submódulos; fecha del Módulo 16.
- `ClassPrompt.md` — plantilla de submódulo.
