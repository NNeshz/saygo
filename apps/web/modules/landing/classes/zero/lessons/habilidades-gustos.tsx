import type { LessonContent } from "../../content-types";

export const habilidadesGustos: LessonContent = {
  title: "Habilidades y Gustos (Can / Like)",
  description:
    "Expresar habilidades con CAN, gustos con LIKE, jerarquía de preferencias y vocabulario de deportes/hobbies.",
  blocks: [
    // —— CAN (Habilidad) ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            El verbo modal CAN (Poder/Saber)
          </h2>
          <p className="mb-3 text-foreground/90">
            Usamos <strong>CAN</strong> para expresar habilidad física o mental.
            Es muy fácil porque <strong>nunca cambia</strong>, es igual para
            todas las personas.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>I can swim (Sé nadar).</li>
            <li>She can speak English (Ella sabe hablar inglés).</li>
          </ul>
        </>
      ),
    },
    {
      type: "table",
      caption: "Estructura de CAN",
      headers: ["Afirmativo", "Negativo", "Interrogativo"],
      rows: [
        ["I can swim", "I can't swim", "Can I swim?"],
        ["You can swim", "You can't swim", "Can you swim?"],
        ["He/She can swim", "He/She can't swim", "Can he/she swim?"],
        ["We/They can swim", "We/They can't swim", "Can we/they swim?"],
      ],
    },
    {
      type: "paragraph",
      content: (
        <>
          <h3 className="mb-2 mt-4 text-base font-semibold text-foreground">
            Reglas importantes
          </h3>
          <ol className="list-decimal list-inside space-y-1.5 text-foreground/90">
            <li>
              El verbo siguiente va en <strong>infinitivo sin 'to'</strong>.
              <br />
              Correcto: <em>I can play</em>. Incorrecto: <em>I can to play</em>.
            </li>
            <li>
              En negativo usamos <strong>can't</strong> (cannot).
            </li>
            <li>
              En preguntas, <strong>CAN va al principio</strong>. No usamos
              Do/Does.
            </li>
          </ol>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Completa con CAN o CAN'T",
      items: [
        { question: "___ you swim? (¿Sabes nadar?)" },
        { question: "No, I ___ swim." },
        { question: "She ___ speak 3 languages. (Afirmativo)" },
        { question: "We ___ come to the party. (Negativo)" },
      ],
    },
    // —— LIKE (Gustos) ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Expresar gustos: LIKE
          </h2>
          <p className="mb-3 text-foreground/90">
            En inglés, el sujeto es la persona a quien le gusta algo:{" "}
            <em>
              <strong>I</strong> like pizza
            </em>{" "}
            (A mí me gusta la pizza).
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Estructuras
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Like + Sustantivo:</strong> I like <em>music</em>.
            </li>
            <li>
              <strong>Like + Verbo (to):</strong> I like <em>to read</em>.
            </li>
            <li>
              <strong>Like + Verbo (ing):</strong> I like <em>reading</em>.
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Nota: Para principiantes, "like to read" y "like reading" son
            intercambiables.
          </p>
        </>
      ),
    },
    {
      type: "table",
      caption: "Escala de preferencias",
      headers: ["Expresión", "Significado", "Símbolo"],
      rows: [
        ["I love", "Me encanta / Amo", "❤️❤️❤️"],
        ["I like", "Me gusta", "❤️❤️"],
        ["I don't like", "No me gusta", "💔"],
        ["I hate", "Odio / Detesto", "💔💔💔"],
      ],
    },
    {
      type: "exercise",
      title: "Transforma las oraciones",
      items: [
        { question: "I (love) pizza" },
        { question: "She (hate) spiders" },
        { question: "We (don't like) waiting" },
        { question: "He (like) to cook" },
      ],
    },
    // —— Vocabulario ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Vocabulario: Deportes y Actividades
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Verbos para deportes: Play, Go, Do
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Play</strong> + Deportes de pelota/equipo (soccer,
              basketball, tennis).
            </li>
            <li>
              <strong>Go</strong> + Actividades terminadas en -ing (swimming,
              running).
            </li>
            <li>
              <strong>Do</strong> + Artes marciales/ejercicio individual (yoga,
              karate).
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "vocabulary",
      title: "Deportes y Hobbies",
      items: [
        { en: "soccer", es: "fútbol" },
        { en: "swimming", es: "natación" },
        { en: "running", es: "correr" },
        { en: "reading", es: "lectura/leer" },
        { en: "cooking", es: "cocinar" },
        { en: "traveling", es: "viajar" },
        { en: "painting", es: "pintar" },
        { en: "listening to music", es: "escuchar música" },
      ],
    },
    {
      type: "exercise",
      title: "Elige el verbo correcto: Play, Go, Do",
      items: [
        { question: "I ___ soccer." },
        { question: "She ___ yoga." },
        { question: "We ___ swimming." },
        { question: "They ___ tennis." },
      ],
    },
    // —— Errores comunes ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Errores comunes a evitar
          </h2>
          <div className="space-y-5 text-sm text-foreground/90">
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I can to play</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I can play</code>
              <br />
              <span className="text-foreground/70">
                Nunca uses <b>to</b> después de <b>can</b>.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>She cans swim</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>She can swim</code>
              <br />
              <span className="text-foreground/70">
                <b>Can</b> nunca lleva <b>-s</b>.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>Do you can swim?</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>Can you swim?</code>
              <br />
              <span className="text-foreground/70">
                No uses <b>do/does</b> para preguntar con can.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>Me like pizza</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I like pizza</code>
              <br />
              <span className="text-foreground/70">
                El sujeto debe ser <b>I</b>, no Me.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I like cook</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I like to cook / I like cooking</code>
              <br />
              <span className="text-foreground/70">
                Usa <b>to</b> o <b>-ing</b> después de like si sigue un verbo.
              </span>
            </div>
          </div>
        </>
      ),
    },
  ],
};
