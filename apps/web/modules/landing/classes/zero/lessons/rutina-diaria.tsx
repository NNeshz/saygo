import type { LessonContent } from "../../content-types";

export const rutinaDiaria: LessonContent = {
  title: "Rutinas Diarias (Presente Simple)",
  description:
    "Uso del Presente Simple para rutinas y hábitos, conjugación, adverbios de frecuencia, la hora y las partes del día.",
  blocks: [
    // —— Presente Simple ——
    {
      type: "paragraph",
      section: { part: 1 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 1. Presente Simple
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 1.1. ¿Para qué se usa?
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Rutinas y hábitos:</strong> I wake up at 7 AM every day.
            </li>
            <li>
              <strong>Verdades generales:</strong> The sun rises in the east.
            </li>
            <li>
              <strong>Horarios fijos:</strong> The class starts at 9 AM.
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 1.2. Diferencia con Presente Continuo
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>Presente Simple:</strong> Hábitos (always, usually, every
              day).
              <br />
              Example: <em>I work every day.</em>
            </li>
            <li>
              <strong>Presente Continuo:</strong> Acciones ahora mismo (now, at
              this moment).
              <br />
              Example: <em>I'm working right now.</em>
            </li>
          </ul>
        </>
      ),
    },
    // —— Vocabulario: Verbos de rutina ——
    {
      type: "vocabulary",
      section: { part: 1, subpart: 1 },
      title: "Parte 1.3. Verbos de rutina diaria",
      items: [
        { en: "wake up", es: "despertarse (abrir los ojos)" },
        { en: "get up", es: "levantarse (de la cama)" },
        { en: "take a shower", es: "bañarse / ducharse" },
        { en: "brush teeth", es: "cepillarse los dientes" },
        { en: "get dressed", es: "vestirse" },
        { en: "have breakfast", es: "desayunar" },
        { en: "go to work/school", es: "ir al trabajo/escuela" },
        { en: "have lunch", es: "comer / almorzar" },
        { en: "have dinner", es: "cenar" },
        { en: "watch TV", es: "ver televisión" },
        { en: "go to bed", es: "irse a la cama" },
        { en: "sleep", es: "dormir" },
      ],
    },
    {
      type: "exercise",
      section: { part: 1, subpart: 2 },
      title: "Parte 1.4. Traduce estas acciones",
      items: [
        { question: "Despertarse → ?" },
        { question: "Ir al trabajo → ?" },
        { question: "Cenar → ?" },
        { question: "Ver televisión → ?" },
      ],
    },
    // —— Conjugación Afirmativa ——
    {
      type: "paragraph",
      section: { part: 2 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 2. Conjugación Afirmativa
          </h2>
          <p className="mb-3 text-foreground/90">
            La regla de oro: Para <strong>He, She, It</strong> agregamos{" "}
            <strong>-s</strong> (o -es) al verbo.
          </p>
        </>
      ),
    },
    {
      type: "table",
      section: { part: 2, subpart: 1 },
      caption: "Parte 2.1. Conjugación del verbo WORK",
      headers: ["Sujeto", "Verbo", "Ejemplo"],
      rows: [
        ["I", "work", "I work every day"],
        ["You", "work", "You work at home"],
        ["He", "works", "He works in an office"],
        ["She", "works", "She works on Mondays"],
        ["It", "works", "It works well"],
        ["We", "work", "We work together"],
        ["They", "work", "They work hard"],
      ],
    },
    {
      type: "paragraph",
      content: (
        <>
          <h3 className="mb-2 mt-4 text-base font-semibold text-foreground">
            Parte 2.2. Reglas de ortografía para He/She/It
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              Mayoría de verbos (+s): <em>work → works, eat → eats</em>.
            </li>
            <li>
              Terminados en -s, -sh, -ch, -x, -o (+es):{" "}
              <em>watch → watches, go → goes</em>.
            </li>
            <li>
              Consonante + y (y → ies): <em>study → studies</em>.
            </li>
            <li>
              Irregulares: <em>have → has</em>.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 2, subpart: 3 },
      title: "Parte 2.3. Escribe la forma correcta del verbo",
      items: [
        { question: "She (watch) TV" },
        { question: "He (study) English" },
        { question: "It (go) fast" },
        { question: "My brother (have) a car" },
        { question: "We (play) soccer" },
      ],
    },
    // —— Adverbios de frecuencia ——
    {
      type: "paragraph",
      section: { part: 3 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 3. Adverbios de Frecuencia
          </h2>
          <div className="mb-4 grid grid-cols-2 gap-2 text-sm text-foreground/90 sm:grid-cols-3">
            <div>Always (100%)</div>
            <div>Usually (90%)</div>
            <div>Often (70%)</div>
            <div>Sometimes (50%)</div>
            <div>Rarely (10%)</div>
            <div>Never (0%)</div>
          </div>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 3.1. Posición en la oración
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>Antes del verbo principal:</strong> I <em>always</em> wake
              up at 6.
            </li>
            <li>
              <strong>Después del verbo To Be:</strong> She <em>is always</em>{" "}
              happy.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 3, subpart: 1 },
      title: "Parte 3.2. Ordena la oración",
      items: [
        { question: "I / tennis / play / never" },
        { question: "She / late / usually / is" },
        { question: "We / dinner / often / cook" },
      ],
    },
    // —— La hora y tiempo ——
    {
      type: "paragraph",
      section: { part: 4 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 4. La hora y expresiones de tiempo
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 4.1. Preguntar la hora
          </h3>
          <p className="mb-3 text-foreground/90">
            <em>What time is it?</em> — It's...
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 4.2. Decir la hora
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>En punto:</strong> It's 7 o'clock.
            </li>
            <li>
              <strong>Y media:</strong> It's 7:30 (seven thirty).
            </li>
            <li>
              <strong>Y cuarto:</strong> It's 7:15 (seven fifteen).
            </li>
            <li>
              <strong>Menos cuarto:</strong> It's 7:45 (seven forty-five).
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 4.3. Preposiciones de tiempo (AT, ON, IN)
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>AT</strong> + Horas exactas (at 7 AM, at night).
            </li>
            <li>
              <strong>ON</strong> + Días (on Monday, on weekends).
            </li>
            <li>
              <strong>IN</strong> + Partes del día (in the morning, afternoon,
              evening).
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 4, subpart: 1 },
      title: "Parte 4.4. Completa con IN, ON, AT",
      items: [
        { question: "I wake up ___ 7 AM." },
        { question: "She works ___ Mondays." },
        { question: "We watch TV ___ the evening." },
        { question: "He sleeps ___ night." },
      ],
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
              <code>She work every day</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>She works every day</code>
              <br />
              <span className="text-foreground/70">
                No olvides la <b>-s</b> en tercera persona.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I goes to work</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I go to work</code>
              <br />
              <span className="text-foreground/70">
                Solo agrega -s/-es para <b>he, she, it</b>.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I am wake up at 7</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I wake up at 7</code>
              <br />
              <span className="text-foreground/70">
                No mezcles <b>to be</b> con verbos de acción en presente simple.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I always am happy</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I am always happy</code>
              <br />
              <span className="text-foreground/70">
                Con <b>to be</b>, el adverbio va después.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I wake up on 7 AM</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I wake up at 7 AM</code>
              <br />
              <span className="text-foreground/70">
                Usa <b>at</b> para horas.
              </span>
            </div>
          </div>
        </>
      ),
    },
  ],
};
