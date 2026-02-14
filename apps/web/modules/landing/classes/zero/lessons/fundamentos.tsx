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
          <p className="mb-4">
            En esta clase trabajamos los <strong>sonidos</strong> del inglés, no los nombres de las letras.
            Estos símbolos (/æ/, /ɪ/, etc.) son del Alfabeto Fonético Internacional (IPA) y representan cómo se pronuncia cada sonido.
          </p>
          <h3 className="mt-6 mb-2 font-semibold text-foreground">Sonidos que veremos</h3>
          <ul className="list-disc list-inside space-y-1 text-foreground/90">
            <li>/æ/ como en cat, bat</li>
            <li>/ɪ/ como en ship, bit</li>
            <li>/ʌ/ como en cup, love</li>
            <li>/θ/ y /ð/ como en think, this</li>
            <li>/ʃ/ y /ʒ/ como en ship, vision</li>
            <li>/ŋ/ como en sing, ring</li>
          </ul>
        </>
      ),
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
        <p>
          La ortografía básica incluye mayúsculas al inicio de oración y nombres propios, minúsculas en el resto, y puntuación: punto, coma, signos de interrogación y exclamación.
        </p>
      ),
    },
    {
      type: "exercise",
      title: "Practica",
      items: [
        {
          instruction: "Indica si el sonido es corto o largo:",
          question: "beat — ¿/ɪ/ o /iː/?",
          answer: "Largo: /iː/ (beat). Corto sería bit con /ɪ/.",
        },
        {
          instruction: "Parejas mínimas:",
          question: "¿Cuál es la diferencia entre ship y sheep?",
          answer: "Ship = /ʃɪp/ (sonido corto /ɪ/). Sheep = /ʃiːp/ (sonido largo /iː/).",
        },
        {
          question: "Escribe en mayúsculas/minúsculas y puntuación: \"hello my name is ana\"",
          answer: "Hello. My name is Ana.",
        },
      ],
    },
  ],
};
