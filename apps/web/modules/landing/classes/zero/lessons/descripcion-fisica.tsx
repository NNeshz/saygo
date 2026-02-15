import type { LessonContent } from "../../content-types";

export const descripcionFisica: LessonContent = {
  title: "Descripción Física y Características",
  description:
    "Describir apariencia física y personalidad, partes del cuerpo y ropa. Uso de verbos BE y HAVE para descripciones.",
  blocks: [
    // —— Apariencia Física ——
    {
      type: "paragraph",
      section: { part: 1 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 1. Apariencia Física
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 1.1. Adjetivos comunes
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Altura:</strong> Tall (alto) / Short (bajo).
            </li>
            <li>
              <strong>Constitución:</strong> Thin (delgado) / Heavy (pesado) /
              Athletic (atlético).
            </li>
            <li>
              <strong>Edad:</strong> Young (joven) / Old (mayor).
            </li>
            <li>
              <strong>Cabello:</strong> Long/Short, Straight/Curly,
              Black/Blonde/Brown.
            </li>
            <li>
              <strong>Ojos:</strong> Blue, Green, Brown, Big, Small.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "table",
      section: { part: 1, subpart: 1 },
      caption: "Parte 1.2. Verbos para describir",
      headers: ["Verbo", "Uso", "Ejemplo"],
      rows: [
        [
          "TO BE (is/are)",
          "Adjetivos generales",
          "He <strong>is</strong> tall.",
        ],
        [
          "HAVE (has/have)",
          "Partes del cuerpo específicas",
          "He <strong>has</strong> blue eyes.",
        ],
      ],
    },
    {
      type: "exercise",
      section: { part: 1, subpart: 2 },
      title: "Parte 1.3. Completa con IS o HAS",
      items: [
        { question: "She ___ tall." },
        { question: "He ___ brown eyes." },
        { question: "They ___ young." },
        { question: "My mother ___ long hair." },
      ],
    },
    // —— Personalidad ——
    {
      type: "paragraph",
      section: { part: 2 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 2. Personalidad y Carácter
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Positivos:</strong> Happy (feliz), Nice (amable), Friendly
              (amigable), Intelligent (inteligente), Funny (divertido/gracioso).
            </li>
            <li>
              <strong>Negativos/Neutros:</strong> Sad (triste), Serious (serio),
              Shy (tímido), Angry (enojado).
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 2, subpart: 1 },
      title: "Parte 2.1. Describe a estas personas",
      items: [
        { question: "My best friend is ___." },
        { question: "My teacher is ___." },
        { question: "I am ___ and ___." },
      ],
    },
    // —— Posición del adjetivo ——
    {
      type: "paragraph",
      section: { part: 3 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 3. Regla de oro: Posición del adjetivo
          </h2>
          <p className="mb-3 text-foreground/90">
            En inglés, el adjetivo va <strong>ANTES</strong> del sustantivo.
          </p>
          <div className="rounded-md border p-3 bg-muted/30">
            <p className="text-center font-medium">
              A <strong>big</strong> house ✅ <br />
              <span className="text-muted-foreground line-through decoration-red-500">
                A house big
              </span>{" "}
              ❌
            </p>
          </div>
          <h3 className="mb-2 mt-4 text-base font-semibold text-foreground">
            Parte 3.1. Orden de múltiples adjetivos
          </h3>
          <p className="text-sm text-foreground/90 mb-2">
            Opinión → Tamaño → Edad → Color
          </p>
          <ul className="list-disc list-inside text-sm text-foreground/90">
            <li>
              A <strong>beautiful big</strong> house.
            </li>
            <li>
              A <strong>small black</strong> cat.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 3, subpart: 1 },
      title: "Parte 3.2. Ordena las palabras",
      items: [
        { question: "car / red / a / fast" },
        { question: "eyes / blue / beautiful" },
        { question: "man / tall / young / a" },
      ],
    },
    // —— Vocabulario Ropa ——
    {
      type: "vocabulary",
      section: { part: 4 },
      title: "Parte 4. Ropa (Clothes)",
      items: [
        { en: "shirt", es: "camisa" },
        { en: "t-shirt", es: "camiseta / playera" },
        { en: "pants", es: "pantalones" },
        { en: "jeans", es: "vaqueros / mezclilla" },
        { en: "dress", es: "vestido" },
        { en: "shoes", es: "zapatos" },
        { en: "sneakers", es: "tenis / zapatillas" },
        { en: "jacket", es: "chamarra / chaqueta" },
        { en: "glasses", es: "lentes / gafas" },
      ],
    },
    {
      type: "paragraph",
      section: { part: 4, subpart: 1 },
      content: (
        <>
          <h3 className="mb-2 mt-4 text-base font-semibold text-foreground">
            Parte 4.1. Verbo WEAR (llevar puesto)
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>General:</strong> I wear jeans every day.
            </li>
            <li>
              <strong>Ahora mismo:</strong> I am wearing a blue shirt.
            </li>
          </ul>
        </>
      ),
    },
    // —— Errores comunes ——
    {
      type: "paragraph",
      section: { part: 5 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 5. Errores comunes a evitar
          </h2>
          <div className="space-y-5 text-sm text-foreground/90">
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>A car red</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>A red car</code>
              <br />
              <span className="text-foreground/70">
                El adjetivo siempre va antes del sustantivo.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I have brown hairs</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I have brown hair</code>
              <br />
              <span className="text-foreground/70">
                <b>Hair</b> es incontable en este contexto.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>She has eyes blue</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>She has blue eyes</code>
              <br />
              <span className="text-foreground/70">
                Orden: Adjetivo + Sustantivo.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>He is fat</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>He is heavy / overweight</code>
              <br />
              <span className="text-foreground/70">
                "Fat" puede sonar ofensivo; "heavy" es más neutral.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I use jeans</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I wear jeans</code>
              <br />
              <span className="text-foreground/70">
                Para ropa usamos <b>wear</b>, no use.
              </span>
            </div>
          </div>
        </>
      ),
    },
  ],
};
