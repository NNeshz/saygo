import type { LessonContent } from "../../content-types";

export const fundamentos: LessonContent = {
  title: "Fundamentos (Fonética y Escritura)",
  description:
    "Sonidos del alfabeto fonético, diferencias corto/largo y ortografía básica. Sin gramática todavía — solo reconocimiento auditivo y producción fonética.",
  blocks: [
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Sonidos del alfabeto fonético
          </h2>
          <p className="mb-4 text-foreground/90">
            En esta clase trabajamos los <strong>sonidos</strong> del inglés, no
            los nombres de las letras. Estos símbolos (/æ/, /ɪ/, etc.) son del
            Alfabeto Fonético Internacional (IPA) y representan cómo se
            pronuncia cada sonido.
          </p>
        </>
      ),
    },
    {
      type: "vocabulary",
      title: "Sonidos IPA (ejemplos)",
      items: [
        { en: "/æ/", es: "cat, bat" },
        { en: "/ɪ/", es: "ship, bit" },
        { en: "/ʌ/", es: "cup, love" },
        { en: "/θ/", es: "think" },
        { en: "/ð/", es: "this" },
        { en: "/ʃ/", es: "ship" },
        { en: "/ʒ/", es: "vision" },
        { en: "/ŋ/", es: "sing, ring" },
      ],
    },
    {
      type: "table",
      caption: "Sonidos cortos vs. largos (ejemplos)",
      headers: ["Corto", "Palabra", "Largo", "Palabra"],
      rows: [
        ["/ɪ/", "ship", "/iː/", "sheep"],
        ["/ɪ/", "bit", "/iː/", "beat"],
        ["/ʊ/", "full", "/uː/", "fool"],
        ["/ɒ/", "cot", "/ɔː/", "caught"],
      ],
    },
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Ortografía básica
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Reglas principales
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>Mayúsculas</strong> al inicio de oración y en nombres
              propios
            </li>
            <li>
              <strong>Minúsculas</strong> en el resto del texto
            </li>
            <li>
              <strong>Puntuación:</strong> punto, coma, signos de interrogación
              y exclamación
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Practica (Indica si el sonido es corto o largo)",
      items: [
        {
          question: "beat — ¿/ɪ/ o /iː/?",
          answer: "",
        },
        {
          instruction: "Parejas mínimas:",
          question: "¿Cuál es la diferencia entre ship y sheep?",
          answer: "",
        },
        {
          question:
            'Escribe en mayúsculas/minúsculas y puntuación: "hello my name is ana"',
          answer: "",
        },
      ],
    },
  ],
};
