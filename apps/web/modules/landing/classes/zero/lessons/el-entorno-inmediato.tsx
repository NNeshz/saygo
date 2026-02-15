import type { LessonContent } from "../../content-types";

export const elEntornoInmediato: LessonContent = {
  title: "El Entorno Inmediato (Hay/Tener)",
  description:
    "Describir lo que existe en un lugar (there is/are) y lo que poseemos (have got), estructuras esenciales para hablar de nuestro entorno.",
  blocks: [
    // —— PARTE 2: THERE IS / THERE ARE - Concepto básico ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            THERE IS / THERE ARE - Concepto básico
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            ¿Qué significa THERE IS / THERE ARE?
          </h3>
          <p className="mb-2 text-foreground/90">
            <strong>THERE IS / THERE ARE = HAY</strong>
          </p>
          <p className="mb-2 text-foreground/90">Se usa para:</p>
          <ol className="list-decimal list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Indicar la existencia de algo</strong> (que algo existe)
            </li>
            <li>
              <strong>Describir qué hay en un lugar</strong>
            </li>
            <li>
              <strong>Presentar información nueva</strong>
            </li>
          </ol>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Diferencia con el español
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>En español: "HAY" (una sola forma para singular y plural)</li>
            <li>En inglés: "THERE IS" (singular) y "THERE ARE" (plural)</li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Diferencia importante: THERE IS/ARE vs TO BE
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>There is/are</strong> (existencia):{" "}
              <em>There is a book on the table</em> (Hay un libro en la mesa -
              presenta algo nuevo).
            </li>
            <li>
              <strong>To be</strong> (ubicación):{" "}
              <em>The book is on the table</em> (El libro está en la mesa - ya
              sabemos de qué libro hablamos).
            </li>
          </ul>
        </>
      ),
    },
    // —— PARTE 3: THERE IS - Singular (afirmativo) ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            THERE IS - Singular (afirmativo)
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Estructura básica
          </h3>
          <p className="mb-3 text-foreground/90">
            <strong>
              THERE IS + artículo + SUSTANTIVO SINGULAR + lugar (opcional)
            </strong>
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Cuándo usar THERE IS
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Singular:</strong> There is a book, There is one chair.
            </li>
            <li>
              <strong>Incontables:</strong> There is water, There is milk.
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Contracción
          </h3>
          <p className="mb-2 text-foreground/90">
            <strong>THERE IS = THERE'S</strong>
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>There's a bank nearby.</li>
            <li>There's a problem.</li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Completa con THERE IS o THERE'S",
      items: [
        { question: "___ a book on the table" },
        { question: "___ a car in the garage" },
        { question: "___ water in the bottle" },
        { question: "___ milk in the fridge" },
      ],
    },
    // —— PARTE 4: THERE ARE - Plural (afirmativo) ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            THERE ARE - Plural (afirmativo)
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Estructura básica
          </h3>
          <p className="mb-3 text-foreground/90">
            <strong>
              THERE ARE + número/some/many + SUSTANTIVO PLURAL + lugar
              (opcional)
            </strong>
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Cuándo usar THERE ARE
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Plural (2+):</strong> There are two books, There are many
              students.
            </li>
            <li>
              <strong>Con 'some' (algunos):</strong> There are some books on the
              table.
            </li>
            <li>
              <strong>Con 'many' (muchos):</strong> There are many trees in the
              park.
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            <strong>Importante:</strong> No hay contracción común para 'There
            are'. No uses "There're".
          </p>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Completa con THERE IS o THERE ARE",
      items: [
        { question: "___ two chairs in the room" },
        { question: "___ a table in the kitchen" },
        { question: "___ three banks on this street" },
        { question: "___ water in the glass" },
        { question: "___ many students in the class" },
      ],
    },
    // —— PARTE 5: Negativo ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Forma Negativa
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Estructuras
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Singular:</strong> There is not ={" "}
              <strong>There isn't</strong> (o There's not).
              <br />
              <em>There isn't a bank near here.</em>
            </li>
            <li>
              <strong>Plural:</strong> There are not ={" "}
              <strong>There aren't</strong>.
              <br />
              <em>There aren't any banks.</em>
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Uso de ANY
          </h3>
          <p className="mb-2 text-foreground/90">
            En oraciones negativas (y preguntas), usamos <strong>ANY</strong>{" "}
            (ningún/ninguna/algún).
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              There aren't <strong>any</strong> shops.
            </li>
            <li>
              There isn't <strong>any</strong> milk.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Convierte a negativo",
      items: [
        { question: "There is a bank near here → ?" },
        { question: "There are three chairs → ?" },
        { question: "There is water in the bottle → ?" },
        { question: "There are some books → ?" },
      ],
    },
    // —— PARTE 6: Interrogativo ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Forma Interrogativa
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Estructura
          </h3>
          <p className="mb-3 text-foreground/90">
            Invertimos el orden: <strong>IS THERE...?</strong> /{" "}
            <strong>ARE THERE...?</strong>
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Singular:</strong> Is there a bank near here?
            </li>
            <li>
              <strong>Plural:</strong> Are there any banks near here?
            </li>
            <li>
              <strong>How many:</strong> How many students are there?
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Respuestas cortas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Singular</p>
              <ul className="list-disc list-inside text-sm text-foreground/90">
                <li>Yes, there is.</li>
                <li>No, there isn't.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Plural</p>
              <ul className="list-disc list-inside text-sm text-foreground/90">
                <li>Yes, there are.</li>
                <li>No, there aren't.</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Forma la pregunta",
      items: [
        { question: "(un banco - cerca de aquí) → ?" },
        { question: "(alguna tienda - en esta calle) → ?" },
        { question: "(tres sillas - en el cuarto) → ?" },
        { question: "(cuántos estudiantes - en la clase) → ?" },
      ],
    },
    // —— PARTE 7: HAVE GOT - Posesión ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            HAVE GOT - Posesión
          </h2>
          <p className="mb-3 text-foreground/90">
            <strong>HAVE GOT</strong> significa "Tener". Es muy común en inglés
            británico y conversacional. El equivalente americano es simplemente
            "HAVE".
          </p>
          <div className="mb-3 p-3 bg-muted/30 rounded-md text-sm">
            <p>
              <strong>Diferencia:</strong>
            </p>
            <p>
              THERE IS/ARE = Existencia (hay). <br />
              HAVE GOT = Posesión (tener).
            </p>
          </div>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Conjugación Afirmativa
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              I / You / We / They → <strong>have got</strong> ('ve got)
            </li>
            <li>
              He / She / It → <strong>has got</strong> ('s got)
            </li>
          </ul>
          <p className="text-sm text-foreground/90">
            Ejemplos: <em>I've got a car. She's got blue eyes.</em>
          </p>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Completa con HAVE GOT / HAS GOT",
      items: [
        { question: "I ___ a car" },
        { question: "She ___ a bike" },
        { question: "He ___ two brothers" },
        { question: "We ___ a dog" },
        { question: "My mother ___ blue eyes" },
      ],
    },
    // —— PARTE 8 & 9: HAVE GOT - Negativo e Interrogativo ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            HAVE GOT - Negativo e Interrogativo
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Negativo (Haven't got / Hasn't got)
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              I <strong>haven't got</strong> a car.
            </li>
            <li>
              She <strong>hasn't got</strong> any sisters.
            </li>
          </ul>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Interrogativo (Have... got? / Has... got?)
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Have</strong> you <strong>got</strong> a car?
            </li>
            <li>
              <strong>Has</strong> she <strong>got</strong> a bike?
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            Respuestas cortas: <em>Yes, I have. / No, I haven't.</em> (No uses
            "got" en la respuesta corta).
          </p>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Práctica con HAVE GOT",
      items: [
        { question: "I have got a car (Negativo) → ?" },
        { question: "She has got a bike (Pregunta) → ?" },
        { question: "You have got time (Pregunta) → ?" },
        { question: "They have got a dog (Negativo) → ?" },
      ],
    },
    // —— PARTE 10: Preposiciones de lugar avanzadas ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Preposiciones de lugar avanzadas
          </h2>
          <p className="mb-3 text-foreground/90">
            Además de <em>in, on, under, next to, behind, in front of</em>:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>Between:</strong> Entre dos cosas. (The bank is between
              the pharmacy and the shop).
            </li>
            <li>
              <strong>Near:</strong> Cerca de (no necesariamente al lado).
              (There is a park near my house).
            </li>
            <li>
              <strong>Above:</strong> Arriba de (sin tocar). (The picture is
              above the sofa).
            </li>
            <li>
              <strong>Below:</strong> Debajo de (sin tocar). (The apartment is
              below yours).
            </li>
            <li>
              <strong>Opposite:</strong> Enfrente de (cara a cara, al otro lado
              de la calle). (The bank is opposite the park).
            </li>
            <li>
              <strong>Among:</strong> Entre varios (más de dos). (The house is
              among the trees).
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Elige la preposición correcta",
      items: [
        { question: "The bank is ___ the pharmacy and the supermarket." },
        { question: "The picture is ___ the sofa (arriba, sin tocar)." },
        { question: "The cinema is ___ the bank (al otro lado de la calle)." },
      ],
    },
    // —— PARTE 11 & 12: Vocabulario Casa y Ciudad ——
    {
      type: "vocabulary",
      title: "La Casa (The House)",
      items: [
        { en: "living room", es: "sala" },
        { en: "bedroom", es: "recámara / dormitorio" },
        { en: "kitchen", es: "cocina" },
        { en: "bathroom", es: "baño" },
        { en: "garage", es: "cochera" },
        { en: "garden", es: "jardín" },
        { en: "bed", es: "cama" },
        { en: "sofa", es: "sofá" },
        { en: "table", es: "mesa" },
        { en: "window", es: "ventana" },
      ],
    },
    {
      type: "vocabulary",
      title: "La Ciudad (The City)",
      items: [
        { en: "bank", es: "banco" },
        { en: "supermarket", es: "supermercado" },
        { en: "hospital", es: "hospital" },
        { en: "pharmacy", es: "farmacia" },
        { en: "restaurant", es: "restaurante" },
        { en: "park", es: "parque" },
        { en: "street", es: "calle" },
        { en: "bus stop", es: "parada de autobús" },
        { en: "subway station", es: "estación de metro" },
      ],
    },
    // —— PARTE 13: Transporte ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Medios de Transporte
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Cómo nos movemos
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90 mb-3">
            <li>
              <strong>By:</strong> I go to work{" "}
              <strong>by car / by bus / by train</strong>.
            </li>
            <li>
              <strong>On foot:</strong> I go <strong>on foot</strong>{" "}
              (caminando).
            </li>
            <li>
              <strong>Take:</strong> I <strong>take</strong> the bus / the
              train.
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Traduce",
      items: [
        { question: "Voy al trabajo en autobús → ?" },
        { question: "Tengo un carro → ?" },
        { question: "¿Hay una estación de metro cerca? → ?" },
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
              <code>Is the book on the table</code> (para existencia)
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>There is a book on the table</code>
              <br />
              <span className="text-foreground/70">
                Usa <strong>There is/are</strong> para decir que algo existe.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>There is two chairs</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>There are two chairs</code>
              <br />
              <span className="text-foreground/70">
                Usa <strong>are</strong> para plurales.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I have a car</code> (si usas estructura británica)
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I've got a car</code>
              <br />
              <span className="text-foreground/70">
                Si usas <strong>got</strong>, debes usar{" "}
                <strong>have/has</strong>. (Have you got...?)
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>There aren't restaurants</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>There aren't any restaurants</code>
              <br />
              <span className="text-foreground/70">
                En negativo plural, usa <strong>any</strong>.
              </span>
            </div>
          </div>
        </>
      ),
    },
  ],
};
