import type { LessonContent } from "../../content-types";

export const primerContacto: LessonContent = {
  title: "Primer Contacto (Funciones Sociales)",
  description:
    "Saludos formales e informales, presentaciones, verbo To Be, expresiones de cortesía, países y nacionalidades, pronombres personales.",
  blocks: [
    // —— PARTE 1: Saludos formales e informales ——
    {
      type: "paragraph",
      section: { part: 1 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-citrus-zest">
            Parte 1. Saludos formales e informales
          </h2>
          <h3 className="mb-2 text-base font-semibold text-citrus-zest">
            Parte 1.1. Contexto y uso apropiado
          </h3>
          <h4 className="mb-1 text-sm font-semibold text-foreground">
            Formales
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>Good morning / afternoon / evening</li>
            <li>Hello</li>
            <li>It&apos;s a pleasure to meet you</li>
          </ul>
          <h4 className="mb-1 text-sm font-semibold text-foreground">
            Informales
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>Hi / Hey</li>
            <li>What&apos;s up? / How&apos;s it going?</li>
            <li>See you / See you later</li>
          </ul>
          <h3 className="mb-2 mt-3 text-base font-semibold text-foreground">
            Detalles importantes
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
            <li>&quot;Good evening&quot; se usa después de las 6 PM.</li>
            <li>
              &quot;Goodbye&quot; es más definitivo que &quot;See you&quot;.
            </li>
            <li>
              En contextos profesionales, usa el apellido: &quot;Good morning,
              Mr. Smith&quot;.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 1, subpart: 1 },
      title: "Parte 1.2. Práctica: ¿Qué saludo usarías?",
      items: [
        { question: "Entrevista de trabajo (10 AM) → ?" },
        { question: "Encuentro con amigo en la calle → ?" },
        { question: "Saludar al jefe (9 AM) → ?" },
        { question: "Despedirse de un cliente → ?" },
        { question: "Saludar a un vecino → ?" },
      ],
    },
    // —— Presentaciones y verbo To Be ——
    {
      type: "paragraph",
      section: { part: 2 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-citrus-zest">
            Parte 2. Presentaciones y el verbo &quot;To Be&quot;
          </h2>
          <h3 className="mb-2 text-base font-semibold text-citrus-zest">
            Parte 2.1. Estructuras
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Básico:</strong> I&apos;m Carlos (casual) · My name is
              Carlos Rodríguez (formal)
            </li>
            <li>
              <strong>Intermedio:</strong> I&apos;m Carlos, nice to meet you.
            </li>
            <li>
              <strong>Profesional:</strong> Let me introduce myself, I&apos;m
              Carlos from Marketing.
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-citrus-zest">
            Parte 2.2. Uso de &quot;To Be&quot;
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Contracciones:</strong> I&apos;m (casual) vs I am
              (énfasis/formal).
            </li>
            <li>
              <strong>Usos:</strong> Identidad (I&apos;m Maria), Profesión
              (She&apos;s a doctor), Nacionalidad (He&apos;s Brazilian),
              Ubicación (We&apos;re here), Estado (They&apos;re happy).
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 2, subpart: 1 },
      title: "Parte 2.3. Completa con am, is, are",
      items: [
        { question: "I ___ from Spain" },
        { question: "She ___ my colleague" },
        { question: "They ___ in the meeting room" },
        { question: "It ___ a pleasure to meet you" },
        { question: "We ___ ready" },
      ],
    },
    // —— Expresiones de cortesía ——
    {
      type: "paragraph",
      section: { part: 3 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-citrus-zest">
            Parte 3. Expresiones de cortesía
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Please:</strong> Can you help me, please? (final) · Please
              help me (inicio, urgente).
            </li>
            <li>
              <strong>Thank you:</strong> Thanks (casual) · Thank you very much
              (énfasis).
            </li>
            <li>
              <strong>Excuse me vs Sorry:</strong>
              <ul className="list-[circle] list-inside ml-4 mt-1">
                <li>Excuse me: antes de interrumpir/pasar.</li>
                <li>Sorry: después de un error/disculpa.</li>
              </ul>
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 3, subpart: 1 },
      title: "Parte 3.1. ¿Qué dices en esta situación?",
      items: [
        { question: "Necesitas pasar en un pasillo estrecho." },
        { question: "Llegaste tarde a una reunión." },
        { question: "Quieres preguntar la hora a un extraño." },
        { question: "Te dieron un regalo." },
      ],
    },
    // —— Países y nacionalidades ——
    {
      type: "paragraph",
      section: { part: 4 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-citrus-zest">
            Parte 4. Países y nacionalidades
          </h2>
          <p className="mb-2 text-foreground/90">
            Regla de oro: Las nacionalidades <strong>siempre</strong> van con
            mayúscula (I&apos;m Mexican).
          </p>
        </>
      ),
    },
    {
      type: "table",
      section: { part: 4, subpart: 1 },
      caption: "Parte 4.1. Patrones de nacionalidades",
      headers: ["Terminación", "Ejemplos"],
      rows: [
        ["-an", "Mexican, American, Brazilian, German"],
        ["-ian", "Canadian, Italian, Russian"],
        ["-ish", "Spanish, English, Polish"],
        ["-ese", "Chinese, Japanese, Portuguese"],
        ["Irregulares", "French (France), Greek (Greece), Dutch (Netherlands)"],
      ],
    },
    {
      type: "exercise",
      section: { part: 4, subpart: 2 },
      title: "Parte 4.2. Escribe la nacionalidad",
      items: [
        { question: "France → ?" },
        { question: "Japan → ?" },
        { question: "Argentina → ?" },
        { question: "Poland → ?" },
        { question: "Thailand → ?" },
      ],
    },
    // —— Pronombres personales ——
    {
      type: "paragraph",
      section: { part: 5 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-citrus-zest">
            Parte 5. Pronombres personales
          </h2>
          <p className="mb-2 text-center text-lg font-medium text-foreground">
            I · You · He · She · It · We · They
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>It:</strong> Cosas, animales, clima, tiempo.
            </li>
            <li>
              <strong>They:</strong> Plural de personas/cosas, o singular
              neutral.
            </li>
            <li>
              <strong>We vs You:</strong> We = nosotros (incluye al hablante).
              You = tú/ustedes.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 5, subpart: 1 },
      title: "Parte 5.1. Sustitución por pronombre",
      items: [
        { question: "Maria and Carlos are late → ___ are late" },
        { question: "The meeting is important → ___ is important" },
        { question: "My sister is a teacher → ___ is a teacher" },
        { question: "You and I are colleagues → ___ are colleagues" },
      ],
    },
    // —— Role-play ——
    {
      type: "paragraph",
      section: { part: 6 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-citrus-zest">
            Parte 6. Role-play (Práctica oral)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-foreground/90">
            <li>
              <strong>Escenario 1 (Networking):</strong> Preséntate a un colega
              y pregunta de dónde es.
            </li>
            <li>
              <strong>Escenario 2 (Fiesta):</strong> Conoces a un amigo de un
              amigo. Haz &quot;small talk&quot;.
            </li>
            <li>
              <strong>Escenario 3 (Trabajo):</strong> Primer día. Preséntate a
              tu equipo internacional.
            </li>
          </ul>
        </>
      ),
    },
    // —— Errores comunes ——
    {
      type: "paragraph",
      section: { part: 7 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-citrus-zest">
            Parte 7. Errores comunes a evitar
          </h2>
          <div className="space-y-5 text-sm text-foreground/90">
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I Mexican</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I'm Mexican</code>
              <br />
              <span className="text-foreground/70">
                No omitas el verbo <b>to be</b>.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I'm spanish</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I'm Spanish</code>
              <br />
              <span className="text-foreground/70">
                Nacionalidades siempre con mayúscula.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>Much pleasure</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>Nice to meet you</code>
              <br />
              <span className="text-foreground/70">
                "Much pleasure" no es natural en inglés.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I am Carlos (robótico)</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I'm Carlos</code>
              <br />
              <span className="text-foreground/70">
                Usa contracciones en conversación.
              </span>
            </div>
          </div>
        </>
      ),
    },
  ],
};
