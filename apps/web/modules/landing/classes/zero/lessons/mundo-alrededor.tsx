import type { LessonContent } from "../../content-types";

export const mundoAlrededor: LessonContent = {
  title: "El Mundo a Tu Alrededor (Sustantivos y Artículos)",
  description:
    "Artículos a/an y the, sustantivos contables e incontables, plurales, demostrativos, vocabulario del aula, colores y preposiciones de lugar.",
  blocks: [
    // —— PARTE 1: A / AN ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Artículos indefinidos: A y AN
          </h2>
          <p className="mb-2">
            <strong>A</strong> y <strong>AN</strong> = un/una. Lo importante es
            el <strong>sonido</strong>, no la letra.
          </p>
          <ul className="list-disc list-inside space-y-1 text-foreground/90">
            <li>
              <strong>A</strong> antes de sonido consonante: a book, a pen, a
              table, a university (suena “yu”)
            </li>
            <li>
              <strong>AN</strong> antes de sonido vocal: an apple, an egg, an
              umbrella, an hour (la h es muda)
            </li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Casos especiales: an honest person · a European country · a one-way
            street
          </p>
        </>
      ),
    },
    {
      type: "paragraph",
      content: (
        <p className="text-foreground/90">
          Usamos A/AN en primera mención, profesiones (I'm a teacher) y para
          decir “uno” (I need a pen). No usamos A/AN con plurales (books),
          incontables (water) ni nombres propios (Maria).
        </p>
      ),
    },
    {
      type: "exercise",
      title: "Práctica: A o AN",
      items: [
        { question: "___ apple" },
        { question: "___ book" },
        { question: "___ orange pen" },
        { question: "___ university" },
        { question: "___ honest answer" },
        { question: "___ hour" },
      ],
    },
    // —— PARTE 2: THE ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Artículo definido: THE
          </h2>
          <p className="mb-2">THE = el / la / los / las. Se usa cuando:</p>
          <ul className="list-disc list-inside space-y-1 text-foreground/90">
            <li>
              Ya lo mencionamos: I have a dog. <strong>The</strong> dog is
              brown.
            </li>
            <li>Es único o conocido: the sun, the moon, the president</li>
            <li>Algo específico: Close the door. The teacher is here.</li>
            <li>Instrumentos musicales: I play the guitar.</li>
            <li>Superlativos: the best student, the biggest house.</li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            No usamos THE con nombres de personas (Maria), la mayoría de países
            (Mexico, Spain), conceptos generales (I love music), comidas en
            general (Breakfast is important) ni deportes (I play soccer).
            Excepciones: The United States, The Netherlands.
          </p>
        </>
      ),
    },
    {
      type: "table",
      caption: "Primera mención vs segunda mención",
      headers: ["Primera mención", "Segunda mención"],
      rows: [
        ["I see a cat", "The cat is black"],
        ["There's a pen on the desk", "The pen is blue"],
        ["She has an idea", "The idea is brilliant"],
      ],
    },
    {
      type: "exercise",
      title: "Práctica: A, AN, THE o nada (Ø)",
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
    // —— PARTE 3: Contables e incontables ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Sustantivos contables e incontables
          </h2>
          <p className="mb-2">
            <strong>Contables:</strong> se cuentan (1, 2, 3…), tienen singular y
            plural: book/books, pen/pens.
          </p>
          <p className="mb-2">
            <strong>Incontables:</strong> no se cuentan así, una sola forma:
            water, rice, milk, music, information, advice, furniture.
          </p>
          <p className="text-sm text-foreground/90">
            Para “medir” incontables: a glass of water, a cup of coffee, a piece
            of paper, a bottle of milk. Con cantidad: some water, much water, a
            little water.
          </p>
        </>
      ),
    },
    {
      type: "exercise",
      title: "¿Contable (C) o Incontable (I)?",
      items: [
        { question: "chair" },
        { question: "water" },
        { question: "music" },
        { question: "rice" },
        { question: "advice" },
      ],
    },
    // —— PARTE 4: Plurales ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Formación de plurales
          </h2>
          <ul className="list-disc list-inside space-y-1 text-foreground/90">
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
      title: "Forma el plural",
      items: [
        { question: "chair → ?" },
        { question: "box → ?" },
        { question: "city → ?" },
        { question: "knife → ?" },
        { question: "child → ?" },
        { question: "woman → ?" },
      ],
    },
    // —— PARTE 5: Demostrativos ——
    {
      type: "table",
      caption: "This, That, These, Those",
      headers: ["", "Singular", "Plural"],
      rows: [
        ["Cerca", "THIS (este/esta)", "THESE (estos/estas)"],
        ["Lejos", "THAT (ese/esa/aquel)", "THOSE (esos/esas/aquellos)"],
      ],
    },
    {
      type: "paragraph",
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
      title: "Completa con this, that, these, those",
      items: [
        { question: "___ is my pen (cerca, singular)." },
        { question: "___ are my books (cerca, plural)." },
        { question: "___ is her car (lejos, singular)." },
        { question: "___ are the students (lejos, plural)." },
      ],
    },
    // —— PARTE 6: Vocabulario aula y colores ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Objetos del aula y colores
          </h2>
          <p className="mb-2 text-foreground/90">
            Regla: el color va <strong>antes</strong> del sustantivo: a red pen ✓ · a pen red ✗. The pen is red. What color is your notebook? → It's blue.
          </p>
        </>
      ),
    },
    {
      type: "vocabulary",
      title: "Objetos del aula",
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
      title: "Colores",
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
    // —— PARTE 7: Preposiciones de lugar ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Preposiciones de lugar
          </h2>
          <ul className="list-disc list-inside space-y-1 text-foreground/90">
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
          <p className="mt-2 text-sm text-muted-foreground">
            IN = espacio (in the box). ON = superficie (on the table). Between = entre dos. Above / below = arriba / abajo sin tocar.
          </p>
        </>
      ),
    },
    {
      type: "vocabulary",
      title: "Preposiciones de lugar",
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
      title: "Completa con la preposición correcta",
      items: [
        { question: "The book is ___ the table (sobre)."},
        { question: "The cat is ___ the chair (debajo)." },
        { question: "I'm sitting ___ Maria (al lado)." },
        { question: "The poster is ___ the wall." },
        { question: "My bag is ___ the door (detrás)." },
      ],
    },
    // —— PARTE 8: Oraciones simples ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Construcción de oraciones simples
          </h2>
          <p className="mb-2">Patrones útiles:</p>
          <ul className="list-disc list-inside space-y-1 text-foreground/90">
            <li>
              This/That + is + a/an + sustantivo: This is a book. That is an
              apple.
            </li>
            <li>
              These/Those + are + plural: These are books. Those are chairs.
            </li>
            <li>
              The + sustantivo + is + preposición + lugar: The book is on the
              table. The pen is in the bag.
            </li>
            <li>
              Con color: This is a blue pen. These red books are on the shelf.
            </li>
            <li>
              There is / There are: There is a book on the table. There are
              three chairs.
            </li>
          </ul>
        </>
      ),
    },
    // —— PARTE 9: Errores comunes ——
    {
      type: "paragraph",
      content: (
        <>
          <h2 className="mb-3 mt-8 text-lg font-semibold text-foreground">
            Errores comunes a evitar
          </h2>
          <ul className="list-disc list-inside space-y-1 text-sm text-foreground/90">
            <li>a books → books (no a/an con plural)</li>
            <li>I'm teacher → I'm a teacher (profesión con a/an)</li>
            <li>childs, mans, womans → children, men, women</li>
            <li>a apple, a hour → an apple, an hour (sonido vocal)</li>
            <li>
              furnitures, informations → furniture, information (incontables sin
              -s)
            </li>
            <li>a pen blue → a blue pen (color antes del sustantivo)</li>
            <li>This are my books → These are my books</li>
            <li>The Maria → Maria (sin the en nombres propios)</li>
            <li>The book is in the table → on the table (superficie)</li>
            <li>I love the music → I love music (general)</li>
          </ul>
        </>
      ),
    },
    {
      type: "exercise",
      title: "Corrige el error",
      items: [
        { question: "This is a books." },
        {
          question: "The pen blue is on table.",
        },
        { question: "I have three childs." },
        { question: "She's teacher." },
        {
          question: "The book is in the wall.",
        },
        { question: "A apple is red." },
      ],
    },
    // —— Práctica integrada ——
    {
      type: "exercise",
      title: "Práctica integrada (Traduce a inglés)",
      items: [
        {
          question: "Este es mi cuaderno azul.",
        },
        {
          question: "Esas son mis llaves rojas.",
        },
        {
          question: "El libro está sobre la mesa.",
        },
        {
          question: "Mi bolsa está debajo del escritorio.",
        },
      ],
    },
  ],
};
