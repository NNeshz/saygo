import type { LessonContent } from "../../content-types";

export const mundoAlrededor: LessonContent = {
  title: "El Mundo a Tu Alrededor (Sustantivos y Artículos)",
  description:
    "Artículos a/an y the, sustantivos contables e incontables, plurales, demostrativos, vocabulario del aula, colores y preposiciones de lugar.",
  blocks: [
    // —— A / AN ——
    {
      type: "paragraph",
      section: { part: 1 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 1. Artículos indefinidos: A y AN
          </h2>
          <p className="mb-2 text-foreground/90">
            <strong>A</strong> y <strong>AN</strong> = un/una. Lo importante es
            el <strong>sonido</strong>, no la letra.
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 1.1. Regla de uso
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>A</strong> antes de sonido consonante: a book, a pen, a
              table, a university (suena “yu”)
            </li>
            <li>
              <strong>AN</strong> antes de sonido vocal: an apple, an egg, an
              umbrella, an hour (la h es muda)
            </li>
          </ul>
          <h3 className="mb-1 mt-3 text-base font-semibold text-foreground">
            Parte 1.2. Casos especiales
          </h3>
          <ul className="list-disc list-inside space-y-0.5 text-sm text-muted-foreground">
            <li>an honest person (h muda)</li>
            <li>a European country (suena "yu")</li>
            <li>a one-way street (one suena "wu")</li>
          </ul>
        </>
      ),
    },
    {
      type: "paragraph",
      section: { part: 1, subpart: 1 },
      content: (
        <>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 1.3. Usos de A/AN
          </h3>
          <ul className="list-disc list-inside space-y-1 text-foreground/90 mb-2">
            <li>
              <strong>Usamos:</strong> primera mención (I have a dog),
              profesiones (I'm a teacher), para decir “uno” (I need a pen)
            </li>
            <li>
              <strong>No usamos con:</strong> plurales (books), incontables
              (water), nombres propios (Maria)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 1, subpart: 2 },
      title: "Parte 1.4. Práctica: A o AN",
      items: [
        { question: "___ apple" },
        { question: "___ book" },
        { question: "___ orange pen" },
        { question: "___ university" },
        { question: "___ honest answer" },
        { question: "___ hour" },
      ],
    },
    // —— THE ——
    {
      type: "paragraph",
      section: { part: 2 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 2. Artículo definido: THE
          </h2>
          <p className="mb-2 text-foreground/90">THE = el / la / los / las.</p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 2.1. Se usa cuando
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              Ya lo mencionamos: I have a dog. <strong>The</strong> dog is
              brown.
            </li>
            <li>Es único o conocido: the sun, the moon, the president</li>
            <li>Algo específico: Close the door. The teacher is here.</li>
            <li>Instrumentos musicales: I play the guitar.</li>
            <li>Superlativos: the best student, the biggest house.</li>
          </ul>
          <h3 className="mb-2 mt-3 text-base font-semibold text-foreground">
            Parte 2.2. No usamos THE con
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
            <li>Nombres de personas (Maria)</li>
            <li>Mayoría de países (Mexico, Spain)</li>
            <li>Conceptos generales (I love music)</li>
            <li>Comidas en general (Breakfast is important)</li>
            <li>Deportes (I play soccer)</li>
          </ul>
          <p className="mt-2 text-sm text-muted-foreground">
            <strong>Excepciones:</strong> The United States, The Netherlands.
          </p>
        </>
      ),
    },
    {
      type: "table",
      section: { part: 2, subpart: 1 },
      caption: "Parte 2.3. Primera mención vs segunda mención",
      headers: ["Primera mención", "Segunda mención"],
      rows: [
        ["I see a cat", "The cat is black"],
        ["There's a pen on the desk", "The pen is blue"],
        ["She has an idea", "The idea is brilliant"],
      ],
    },
    {
      type: "exercise",
      section: { part: 2, subpart: 2 },
      title: "Parte 2.4. Práctica: A, AN, THE o nada (Ø)",
      items: [
        { question: "I have ___ dog. ___ dog is big." },
        {
          question:
            "She's ___ teacher. She teaches at ___ school near my house.",
        },
        { question: "I love ___ music." },
        { question: "___ sun is bright today." },
        { question: "He plays ___ guitar." },
      ],
    },
    // —— Contables e incontables ——
    {
      type: "paragraph",
      section: { part: 3 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 3. Sustantivos contables e incontables
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 3.1. Contables
          </h3>
          <p className="mb-3 text-foreground/90">
            Se cuentan (1, 2, 3…), tienen singular y plural: book/books,
            pen/pens.
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 3.2. Incontables
          </h3>
          <p className="mb-2 text-foreground/90">
            No se cuentan así, una sola forma: water, rice, milk, music,
            information, advice, furniture.
          </p>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 3.3. Cómo medir incontables
          </h3>
          <ul className="list-disc list-inside space-y-1 text-foreground/90">
            <li>
              Con unidad: a glass of water, a cup of coffee, a piece of paper, a
              bottle of milk
            </li>
            <li>Con cantidad: some water, much water, a little water</li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 3, subpart: 1 },
      title: "Parte 3.4. ¿Contable (C) o Incontable (I)?",
      items: [
        { question: "chair" },
        { question: "water" },
        { question: "music" },
        { question: "rice" },
        { question: "advice" },
      ],
    },
    // —— Plurales ——
    {
      type: "paragraph",
      section: { part: 4 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 4. Formación de plurales
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>+ S</strong> (mayoría): book → books, car → cars
            </li>
            <li>
              <strong>+ ES</strong> (terminan en s, sh, ch, x, z): box → boxes,
              watch → watches
            </li>
            <li>
              <strong>Consonante + Y → IES:</strong> city → cities, baby →
              babies. Vocal + Y → solo S: boy → boys
            </li>
            <li>
              <strong>-f/-fe → -ves:</strong> knife → knives, life → lives.
              Excepciones: roof → roofs
            </li>
            <li>
              <strong>Irregulares:</strong> man → men, woman → women, child →
              children, tooth → teeth, foot → feet, mouse → mice
            </li>
            <li>
              <strong>Igual:</strong> sheep → sheep, fish → fish
            </li>
            <li>
              <strong>-o:</strong> mayoría + S (photos); algunas + ES (potato →
              potatoes, tomato → tomatoes)
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 4, subpart: 1 },
      title: "Parte 4.1. Forma el plural",
      items: [
        { question: "chair → ?" },
        { question: "box → ?" },
        { question: "city → ?" },
        { question: "knife → ?" },
        { question: "child → ?" },
        { question: "woman → ?" },
      ],
    },
    // —— Demostrativos ——
    {
      type: "table",
      section: { part: 5 },
      caption: "Parte 5. This, That, These, Those",
      headers: ["", "Singular", "Plural"],
      rows: [
        ["Cerca", "THIS (este/esta)", "THESE (estos/estas)"],
        ["Lejos", "THAT (ese/esa/aquel)", "THOSE (esos/esas/aquellos)"],
      ],
    },
    {
      type: "paragraph",
      section: { part: 5, subpart: 1 },
      content: (
        <p className="text-foreground/90">
          Ejemplos: This is my book. These are my keys. That is my car. Those
          are my books. What is this? → It's a pen. Are those your glasses? →
          No, they aren't.
        </p>
      ),
    },
    {
      type: "exercise",
      section: { part: 5, subpart: 2 },
      title: "Parte 5.2. Completa con this, that, these, those",
      items: [
        { question: "___ is my pen (cerca, singular)." },
        { question: "___ are my books (cerca, plural)." },
        { question: "___ is her car (lejos, singular)." },
        { question: "___ are the students (lejos, plural)." },
      ],
    },
    // —— Vocabulario aula y colores ——
    {
      type: "paragraph",
      section: { part: 6 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 6. Objetos del aula y colores
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 6.1. Regla del color
          </h3>
          <ul className="list-disc list-inside space-y-1 text-foreground/90 mb-2">
            <li>
              El color va <strong>antes</strong> del sustantivo: a red pen ✓ · a
              pen red ✗
            </li>
            <li>The pen is red. What color is your notebook? → It's blue.</li>
          </ul>
        </>
      ),
    },
    {
      type: "vocabulary",
      section: { part: 6, subpart: 1 },
      title: "Parte 6.2. Objetos del aula",
      items: [
        { en: "desk", es: "escritorio" },
        { en: "chair", es: "silla" },
        { en: "table", es: "mesa" },
        { en: "board / whiteboard", es: "pizarrón" },
        { en: "door", es: "puerta" },
        { en: "window", es: "ventana" },
        { en: "shelf / shelves", es: "estante / estantes" },
        { en: "book", es: "libro" },
        { en: "notebook", es: "cuaderno" },
        { en: "pen", es: "bolígrafo" },
        { en: "pencil", es: "lápiz" },
        { en: "eraser", es: "goma / borrador" },
        { en: "ruler", es: "regla" },
        { en: "computer", es: "computadora" },
        { en: "phone", es: "teléfono" },
        { en: "backpack", es: "mochila" },
        { en: "clock", es: "reloj (de pared)" },
        { en: "paper", es: "papel (incontable)" },
      ],
    },
    {
      type: "vocabulary",
      section: { part: 6, subpart: 2 },
      title: "Parte 6.3. Colores",
      items: [
        { en: "red", es: "rojo" },
        { en: "blue", es: "azul" },
        { en: "yellow", es: "amarillo" },
        { en: "green", es: "verde" },
        { en: "orange", es: "naranja" },
        { en: "purple", es: "morado" },
        { en: "pink", es: "rosa" },
        { en: "brown", es: "café / marrón" },
        { en: "black", es: "negro" },
        { en: "white", es: "blanco" },
        { en: "gray", es: "gris" },
        { en: "light blue", es: "azul claro" },
        { en: "dark blue", es: "azul oscuro" },
      ],
    },
    // —— Preposiciones de lugar ——
    {
      type: "paragraph",
      section: { part: 7 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 7. Preposiciones de lugar
          </h2>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              <strong>IN</strong> = dentro de: The book is in the bag. I'm in
              the classroom.
            </li>
            <li>
              <strong>ON</strong> = sobre: The book is on the table. The picture
              is on the wall.
            </li>
            <li>
              <strong>UNDER</strong> = debajo de: The cat is under the table.
            </li>
            <li>
              <strong>NEXT TO</strong> = al lado de: The chair is next to the
              desk.
            </li>
            <li>
              <strong>BEHIND</strong> = detrás de: The trash can is behind the
              door.
            </li>
            <li>
              <strong>IN FRONT OF</strong> = delante de: The teacher is in front
              of the class.
            </li>
          </ul>
          <h3 className="mb-2 mt-3 text-base font-semibold text-foreground">
            Parte 7.1. Notas adicionales
          </h3>
          <ul className="list-disc list-inside space-y-0.5 text-sm text-muted-foreground">
            <li>
              <strong>IN</strong> = espacio (in the box)
            </li>
            <li>
              <strong>ON</strong> = superficie (on the table)
            </li>
            <li>
              <strong>Between</strong> = entre dos
            </li>
            <li>
              <strong>Above / below</strong> = arriba / abajo sin tocar
            </li>
          </ul>
        </>
      ),
    },
    {
      type: "vocabulary",
      section: { part: 7, subpart: 1 },
      title: "Parte 7.2. Preposiciones de lugar",
      items: [
        { en: "in", es: "dentro de / en" },
        { en: "on", es: "sobre / encima de" },
        { en: "under", es: "debajo de" },
        { en: "next to", es: "al lado de" },
        { en: "behind", es: "detrás de" },
        { en: "in front of", es: "delante de / enfrente de" },
        { en: "between", es: "entre (dos)" },
        { en: "above", es: "arriba de (sin tocar)" },
        { en: "below", es: "abajo de (sin tocar)" },
      ],
    },
    {
      type: "exercise",
      section: { part: 7, subpart: 2 },
      title: "Parte 7.3. Completa con la preposición correcta",
      items: [
        { question: "The book is ___ the table (sobre)." },
        { question: "The cat is ___ the chair (debajo)." },
        { question: "I'm sitting ___ Maria (al lado)." },
        { question: "The poster is ___ the wall." },
        { question: "My bag is ___ the door (detrás)." },
      ],
    },
    // —— Oraciones simples ——
    {
      type: "paragraph",
      section: { part: 8 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 8. Construcción de oraciones simples
          </h2>
          <h3 className="mb-2 text-base font-semibold text-foreground">
            Parte 8.1. Patrones útiles
          </h3>
          <ul className="list-disc list-inside space-y-1.5 text-foreground/90">
            <li>
              This/That + is + a/an + sustantivo: This is a book. That is an
              apple.
            </li>
            <li>
              These/Those + are + plural: These are books. Those are chairs.
            </li>
            <li>
              The + sustantivo + is + preposición + lugar: The book is on the
              table.
            </li>
          </ul>
        </>
      ),
    },
    // —— Errores comunes ——
    {
      type: "paragraph",
      section: { part: 9 },
      content: (
        <>
          <h2 className="mb-3 mt-8 text-xl font-semibold text-foreground">
            Parte 9. Errores comunes a evitar
          </h2>
          <div className="space-y-5 text-sm text-foreground/90">
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>a books</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>books</code>
              <br />
              <span className="text-foreground/70">
                No uses <b>a/an</b> con plurales.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>I'm teacher</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>I'm a teacher</code>
              <br />
              <span className="text-foreground/70">
                Usa artículo con profesiones.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>childs, mans</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>children, men</code>
              <br />
              <span className="text-foreground/70">
                Cuidado con los plurales irregulares.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>a apple</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>an apple</code>
              <br />
              <span className="text-foreground/70">
                Usa <b>an</b> antes de sonido vocal.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>a pen blue</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>a blue pen</code>
              <br />
              <span className="text-foreground/70">
                El color va antes del sustantivo.
              </span>
            </div>
            <div>
              <span className="font-semibold text-red-700">Incorrecto:</span>{" "}
              <code>The Maria</code>
              <br />
              <span className="font-semibold text-green-700">
                Correcto:
              </span>{" "}
              <code>Maria</code>
              <br />
              <span className="text-foreground/70">
                No uses <b>the</b> con nombres propios.
              </span>
            </div>
          </div>
        </>
      ),
    },
    {
      type: "exercise",
      section: { part: 9, subpart: 1 },
      title: "Parte 9.1. Corrige el error",
      items: [
        { question: "This is a books." },
        { question: "The pen blue is on table." },
        { question: "I have three childs." },
        { question: "She's teacher." },
        { question: "The book is in the wall." },
        { question: "A apple is red." },
      ],
    },
  ],
};
