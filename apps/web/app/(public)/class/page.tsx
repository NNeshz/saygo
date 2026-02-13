import React from "react";
import { LessonLayout } from "../../../modules/classes/components/lesson-layout";
import { LessonSection } from "../../../modules/classes/components/lesson-section";
import { VocabularyList } from "../../../modules/classes/components/vocabulary-card";
import { GrammarTable } from "../../../modules/classes/components/grammar-table";
import { ExerciseCard } from "../../../modules/classes/components/exercise-card";
import {
  DemoBox,
  VisualAid,
} from "../../../modules/classes/components/visual-aid";

export default function ElMundoATuAlrededorPage() {
  return (
    <LessonLayout
      title="El Mundo a Tu Alrededor (Sustantivos y Artículos)"
      duration="2 horas"
      level="Básico"
    >
      {/* PART 1: Warm-up */}
      <LessonSection title="🔥 PARTE 1: Calentamiento y diagnóstico">
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
          <h3 className="font-bold text-lg mb-2">Quick Warm-up:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Look around you. What do you see?</li>
            <li>Can you name 3 objects in English?</li>
            <li>What color is your shirt/blouse?</li>
          </ol>
        </div>
        <p className="text-gray-600 italic mt-4">
          Basándome en las respuestas, ajustaré la profundidad de la clase. Nos
          enfocaremos en construir oraciones simples, usar artículos
          correctamente y describir el mundo que nos rodea.
        </p>
      </LessonSection>

      {/* PART 2: Articles A/AN */}
      <LessonSection title="📖 PARTE 2: Artículos indefinidos - A / AN">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">
          Reglas de uso
        </h3>
        <p className="font-medium text-indigo-700 my-2">
          A y AN = UN / UNA (pero NO siempre traducen directamente)
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">Uso de "A":</h4>
            <p className="text-sm mb-2">
              Antes de palabras que empiezan con **sonido consonante**
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>a book, a pen, a table</li>
              <li>
                a car, a university (¡ojo! "university" suena como
                "yuniversity")
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">Uso de "AN":</h4>
            <p className="text-sm mb-2">
              Antes de palabras que empiezan con **sonido vocal**
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>an apple, an egg</li>
              <li>an orange, an umbrella</li>
              <li>an hour (¡ojo! "hour" suena como "our")</li>
            </ul>
          </div>
        </div>

        <p className="bg-yellow-100 p-2 rounded text-center font-bold text-yellow-800">
          Regla de oro: Lo importante es el SONIDO, no la letra
        </p>

        <GrammarTable
          title="Ejemplos especiales"
          headers={["Tipo", "Ejemplos", "Explicación"]}
          rows={[
            [
              "Parecen consonantes, suenan vocal",
              "an hour, an honest person",
              "La 'h' es muda",
            ],
            [
              "Parecen vocales, suenan consonante",
              "a university, a European country, a one-way street",
              "Suena 'yu' o 'wuan'",
            ],
          ]}
        />

        <div className="space-y-4 my-6">
          <h4 className="font-bold text-gray-700">Cuándo usar A/AN:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>
              <strong>Primera mención de algo:</strong> I have a dog, There's a
              book
            </li>
            <li>
              <strong>Profesiones:</strong> I'm a teacher, She's an engineer
            </li>
            <li>
              <strong>Para decir 'uno':</strong> I need a pen
            </li>
          </ul>

          <h4 className="font-bold text-red-600">Cuándo NO usar A/AN:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>❌ Con plurales: a books → books</li>
            <li>❌ Con sustantivos incontables: a water → water</li>
            <li>❌ Con nombres propios: a Maria → Maria</li>
          </ul>
        </div>

        <ExerciseCard
          title="Práctica rápida"
          instructions="Completa con A o AN:"
          items={[
            { question: "___ apple" },
            { question: "___ book" },
            { question: "___ orange pen" },
            { question: "___ university" },
            { question: "___ honest answer" },
            { question: "___ car" },
            { question: "___ elephant" },
            { question: "___ hour" },
          ]}
        />
      </LessonSection>

      {/* PART 3: Article THE */}
      <LessonSection title="🎯 PARTE 3: Artículo definido - THE">
        <p className="font-medium text-indigo-700 mb-4">
          THE = EL / LA / LOS / LAS
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Se usa cuando:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
              <li>
                <strong>Ya mencionamos algo antes:</strong> I have a dog.{" "}
                <strong>The</strong> dog is brown.
              </li>
              <li>
                <strong>Es único:</strong> The sun, The moon.
              </li>
              <li>
                <strong>Cosas específicas:</strong> Close the door (de este
                cuarto).
              </li>
              <li>
                <strong>Instrumentos musicales:</strong> I play the guitar.
              </li>
              <li>
                <strong>Superlativos:</strong> The best student.
              </li>
            </ol>
          </div>
          <div>
            <h4 className="font-bold text-red-600 mb-2">NO se usa con:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
              <li>
                <strong>Nombres propios:</strong> ❌ The Maria
              </li>
              <li>
                <strong>Mayoría de países:</strong> ❌ The Mexico (Excepciones:
                The USA)
              </li>
              <li>
                <strong>Ideas generales:</strong> I love music, Dogs are
                animals.
              </li>
              <li>
                <strong>Comidas en general:</strong> I like pizza.
              </li>
              <li>
                <strong>Deportes:</strong> I play soccer.
              </li>
            </ol>
          </div>
        </div>

        <GrammarTable
          title="Comparación A/AN vs THE"
          headers={["Primera mención", "Segunda mención"]}
          rows={[
            ["I see **a** cat", "**The** cat is black"],
            ["There's **a** pen on the desk", "**The** pen is blue"],
            ["She has **an** idea", "**The** idea is brilliant"],
          ]}
        />

        <ExerciseCard
          title="Práctica"
          instructions="Completa con A, AN, THE o deja en blanco (Ø):"
          items={[
            { question: "I have ___ dog. ___ dog is big." },
            {
              question:
                "She's ___ teacher. She teaches at ___ school near my house.",
            },
            { question: "I love ___ music." },
            { question: "___ sun is bright today." },
            { question: "I need ___ pen. Do you have ___ pen?" },
            { question: "___ Mexico is a beautiful country." },
            { question: "He plays ___ guitar." },
          ]}
        />
      </LessonSection>

      {/* PART 4: Countable/Uncountable */}
      <LessonSection title="📊 PARTE 4: Sustantivos contables e incontables">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-green-700">Contables (Countable)</h4>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Se pueden contar (1, 2, 3...)</li>
              <li>Tienen singular y plural</li>
              <li>Usan A/AN en singular</li>
            </ul>
            <p className="text-sm italic mt-2">
              Ex: one book, two books, an apple
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold text-red-700">
              Incontables (Uncountable)
            </h4>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>NO se pueden contar individualmente</li>
              <li>Solo tienen una forma (singular)</li>
              <li>NO usan A/AN</li>
            </ul>
            <p className="text-sm italic mt-2">
              Ex: water, rice, music, information
            </p>
          </div>
        </div>

        <VocabularyList
          title="Categorías comunes de incontables"
          columns={2}
          items={[
            {
              english: "Liquids",
              spanish: "water, milk, coffee, tea, juice, oil",
            },
            {
              english: "Materials",
              spanish: "wood, plastic, metal, glass, paper",
            },
            {
              english: "Abstract",
              spanish: "information, advice, news, music, homework",
            },
            {
              english: "Mass Food",
              spanish: "rice, bread, cheese, butter, sugar, salt",
            },
            {
              english: "Others",
              spanish: "money, furniture, luggage, equipment",
            },
          ]}
        />

        <div className="bg-gray-50 p-4 rounded-lg my-6">
          <h4 className="font-bold">Cómo usar incontables:</h4>
          <div className="grid md:grid-cols-2 gap-4 mt-2 text-sm">
            <div>
              <p className="font-semibold">Para 'contar':</p>
              <ul className="list-disc list-inside">
                <li>a glass of water</li>
                <li>a cup of coffee</li>
                <li>a piece of paper</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Con adjetivos:</p>
              <ul className="list-disc list-inside">
                <li>some water (algo)</li>
                <li>a little water (un poco)</li>
              </ul>
            </div>
          </div>
        </div>

        <ExerciseCard
          title="Práctica: Contable (C) o Incontable (I)?"
          instructions="Identifica:"
          items={[
            { question: "chair" },
            { question: "water" },
            { question: "pen" },
            { question: "music" },
            { question: "apple" },
            { question: "rice" },
            { question: "book" },
            { question: "advice" },
          ]}
        />
        <ExerciseCard
          title="Completa"
          instructions="Completa las oraciones:"
          items={[
            { question: "I need ___ glass of water" },
            { question: "There are three ___ on the table (book)" },
            { question: "She has ___ information" },
            { question: "I bought ___ apple" },
            { question: "We need ___ furniture for the office" },
          ]}
        />
      </LessonSection>

      {/* PART 5: Plurals */}
      <LessonSection title="🔢 PARTE 5: Formación de plurales">
        <GrammarTable
          title="Reglas de pluralización"
          headers={["Regla", "Explicación", "Ejemplos"]}
          rows={[
            ["+ S (La mayoría)", "Singular + s", "book → books, car → cars"],
            ["+ ES", "Termina en: s, sh, ch, x, z", "bus → buses, box → boxes"],
            [
              "Consonante + Y",
              "Cambiar Y por IES",
              "city → cities, baby → babies",
            ],
            ["Vocal + Y", "Solo agregar S", "boy → boys, key → keys"],
            [
              "-F o -FE",
              "Cambiar a -VES (mayoría)",
              "knife → knives, life → lives",
            ],
          ]}
        />

        <VocabularyList
          title="Plurales Irregulares (Memorizar)"
          columns={3}
          items={[
            { english: "man / men", spanish: "hombre / hombres" },
            { english: "woman / women", spanish: "mujer / mujeres" },
            { english: "child / children", spanish: "niño / niños" },
            { english: "tooth / teeth", spanish: "diente / dientes" },
            { english: "foot / feet", spanish: "pie / pies" },
            { english: "mouse / mice", spanish: "ratón / ratones" },
            { english: "sheep / sheep", spanish: "oveja / ovejas" },
            { english: "fish / fish", spanish: "pez / peces" },
            { english: "person / people", spanish: "persona / gente" },
          ]}
        />

        <ExerciseCard
          title="Práctica Completa"
          instructions="Forma el plural:"
          items={[
            { question: "chair →" },
            { question: "box →" },
            { question: "city →" },
            { question: "knife →" },
            { question: "child →" },
            { question: "watch →" },
            { question: "boy →" },
            { question: "woman →" },
            { question: "dish →" },
            { question: "leaf →" },
          ]}
        />
        <ExerciseCard
          title="Corrige los errores"
          instructions="Encuentra y corrige el error en cada oración:"
          items={[
            { question: "I have three childs" },
            { question: "There are two boxs" },
            { question: "The citys are beautiful" },
            { question: "Five womans are here" },
            { question: "I need two knifes" },
          ]}
        />
      </LessonSection>

      {/* PART 6: Demonstratives */}
      <LessonSection title="👉 PARTE 6: Demostrativos - THIS, THAT, THESE, THOSE">
        <GrammarTable
          headers={["", "Singular", "Plural"]}
          rows={[
            ["Cerca (Near)", "THIS (este/esta)", "THESE (estos/estas)"],
            [
              "Lejos (Far)",
              "THAT (ese/esa/aquel)",
              "THOSE (esos/esas/aquellos)",
            ],
          ]}
        />

        <div className="flex flex-wrap justify-center gap-8 my-8">
          <div className="flex flex-col items-center gap-4">
            <DemoBox label="This" distance="near" count="singular" />
            <DemoBox label="These" distance="near" count="plural" />
          </div>
          <div className="flex flex-col items-center gap-4">
            <DemoBox label="That" distance="far" count="singular" />
            <DemoBox label="Those" distance="far" count="plural" />
          </div>
        </div>

        <VocabularyList
          title="Estructuras Comunes"
          items={[
            {
              english: "Identifying",
              spanish: "This is a pen / That is a table",
            },
            {
              english: "Describing",
              spanish: "This book is interesting / That car is fast",
            },
            {
              english: "Questions",
              spanish: "What is this? / Are those your keys?",
            },
          ]}
        />

        <ExerciseCard
          title="Práctica Visual"
          instructions="Completa:"
          items={[
            { question: "___ is my pen (en tu mano)" },
            { question: "___ are my books (en tu mesa)" },
            { question: "___ is a chair (otro lado del cuarto)" },
            { question: "___ are pictures (en la pared del fondo)" },
          ]}
        />
        <ExerciseCard
          title="Completa con this, that, these, those"
          instructions="Elige la opción correcta:"
          items={[
            { question: "___ books here are mine (cerca, plural)" },
            { question: "___ car over there is expensive (lejos, singular)" },
            { question: "___ is my phone (cerca, singular)" },
            {
              question:
                "___ people in the distance are waiting (lejos, plural)",
            },
            { question: "Is ___ your pen? (cerca, singular)" },
            { question: "Are ___ your glasses? (lejos, plural)" },
          ]}
        />
      </LessonSection>

      {/* PART 7: Vocabulary - Classroom Objects */}
      <LessonSection title="📚 PARTE 7: Vocabulario - Objetos del aula">
        <VocabularyList
          title="Mobiliario"
          items={[
            { english: "desk", spanish: "escritorio" },
            { english: "chair", spanish: "silla" },
            { english: "table", spanish: "mesa" },
            { english: "board", spanish: "pizarra" },
            { english: "door", spanish: "puerta" },
            { english: "window", spanish: "ventana" },
            { english: "shelf", spanish: "estante" },
          ]}
        />
        <VocabularyList
          title="Útiles escolares"
          items={[
            { english: "book", spanish: "libro" },
            { english: "notebook", spanish: "cuaderno" },
            { english: "pen", spanish: "bolígrafo" },
            { english: "pencil", spanish: "lápiz" },
            { english: "eraser", spanish: "borrador" },
            { english: "scissors", spanish: "tijeras" },
            { english: "paper", spanish: "papel" },
          ]}
        />
        <VocabularyList
          title="Tecnología y Otros"
          items={[
            { english: "computer", spanish: "computadora" },
            { english: "laptop", spanish: "portátil" },
            { english: "screen", spanish: "pantalla" },
            { english: "backpack", spanish: "mochila" },
            { english: "clock", spanish: "reloj" },
            { english: "trash can", spanish: "bote de basura" },
          ]}
        />
        <ExerciseCard
          title="Describe tu espacio"
          instructions="Mira a tu alrededor y completa:"
          items={[
            { question: "I can see ___ (nombre un objeto cerca)" },
            { question: "There's a ___ on my desk" },
            { question: "There are ___ in my room (plural)" },
            { question: "This is my ___" },
            { question: "Those are ___" },
          ]}
        />
      </LessonSection>

      {/* PART 8: Colors */}
      <LessonSection title="🎨 PARTE 8: Colores básicos">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Color Swatches */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-red-500"></div>
            <span>Red</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
            <span>Blue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-yellow-400"></div>
            <span>Yellow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-500"></div>
            <span>Green</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-500"></div>
            <span>Orange</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
            <span>Purple</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-pink-400"></div>
            <span>Pink</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-amber-800"></div>
            <span>Brown</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-black"></div>
            <span>Black</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white border"></div>
            <span>White</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-500"></div>
            <span>Gray</span>
          </div>
        </div>

        <div className="bg-red-50 p-4 border-l-4 border-red-400 mb-6">
          <h4 className="font-bold text-red-800">Regla importante:</h4>
          <p>
            Los colores van <strong>ANTES</strong> del sustantivo.
          </p>
          <p className="mt-1">
            ✓ a red pen <br /> ❌ a pen red
          </p>
        </div>

        <ExerciseCard
          title="Práctica de Colores"
          instructions="Describe estos objetos con color (ej: My pen is blue / I have a blue pen):"
          items={[
            { question: "Your pen →" },
            { question: "Your shirt/blouse →" },
            { question: "Your phone →" },
            { question: "Your bag →" },
            { question: "Your notebook →" },
          ]}
        />
        <ExerciseCard
          title="Completa"
          instructions="Completa las frases:"
          items={[
            { question: "I have ___ blue ___ (un cuaderno azul)" },
            { question: "The ___ is ___ (La puerta es blanca)" },
            { question: "Those are ___ ___ (esas son sillas negras)" },
            { question: "This ___ ___ is mine (este bolígrafo rojo)" },
          ]}
        />
      </LessonSection>

      {/* PART 9: Prepositions */}
      <LessonSection title="📍 PARTE 9: Preposiciones de lugar">
        <VocabularyList
          title="Las 6 preposiciones esenciales"
          columns={2}
          items={[
            {
              english: "IN",
              spanish: "dentro de / en",
              context: "The book is in the bag",
            },
            {
              english: "ON",
              spanish: "sobre / encima de",
              context: "The book is on the table",
            },
            {
              english: "UNDER",
              spanish: "debajo de",
              context: "The cat is under the table",
            },
            {
              english: "NEXT TO",
              spanish: "junto a / al lado de",
              context: "The chair is next to the desk",
            },
            {
              english: "BEHIND",
              spanish: "detrás de",
              context: "The trash can is behind the door",
            },
            {
              english: "IN FRONT OF",
              spanish: "enfrente de / delante de",
              context: "The teacher is in front of the class",
            },
          ]}
        />

        <div className="bg-gray-100 p-4 rounded-lg my-6 text-sm">
          <p>
            <strong>Diferencias:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>IN vs ON:</strong> IN (dentro, 3D) vs ON (sobre
              superficie)
            </li>
            <li>
              <strong>NEXT TO vs BESIDE:</strong> Sinónimos
            </li>
            <li>
              <strong>IN FRONT OF vs OPPOSITE:</strong> Delante (misma
              dirección) vs Cara a cara
            </li>
          </ul>
        </div>

        <ExerciseCard
          title="Práctica Visual"
          instructions="Describe la posición (ej: My phone is on the table):"
          items={[
            { question: "Where is your phone right now?" },
            { question: "Where is the door in relation to you?" },
            { question: "Where are your feet?" },
            { question: "Where is the ceiling?" },
            { question: "Where is your chair?" },
          ]}
        />
        <ExerciseCard
          title="Completa con la preposición correcta"
          instructions="Escribe la preposición adecuada:"
          items={[
            { question: "The book is ___ the table (sobre la mesa)" },
            { question: "The cat is ___ the chair (debajo de la silla)" },
            { question: "I'm sitting ___ Maria (al lado de María)" },
            { question: "The poster is ___ the wall (en la pared)" },
            { question: "The school is ___ the park (enfrente del parque)" },
            { question: "My bag is ___ the door (detrás de la puerta)" },
          ]}
        />
      </LessonSection>

      {/* PART 10: Sentence Construction */}
      <LessonSection title="🏗️ PARTE 10: Construcción de oraciones simples">
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 pl-4">
            <h4 className="font-bold text-gray-800">Patrón Fundamental:</h4>
            <p className="font-mono text-indigo-600 bg-gray-50 p-2 rounded mt-1">
              THIS/THAT + IS + A/AN + sustantivo
            </p>
            <p className="text-sm text-gray-500 mt-1">Ex: This is a book.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-3 rounded">
              <h5 className="font-bold text-sm">Agregando colores</h5>
              <p className="text-xs mt-1">
                This is a <strong>blue</strong> pen.
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h5 className="font-bold text-sm">Agregando ubicación</h5>
              <p className="text-xs mt-1">
                These books are <strong>on the shelf</strong>.
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <h5 className="font-bold text-sm">Agregando cantidad</h5>
              <p className="text-xs mt-1">
                There are <strong>three</strong> books.
              </p>
            </div>
          </div>
        </div>

        <ExerciseCard
          title="Práctica de construcción"
          instructions="Expande estas oraciones agregando color y ubicación (ej: This is a blue pen. It's on my desk):"
          items={[
            { question: "This is a book →" },
            { question: "Those are chairs →" },
            { question: "The computer →" },
            { question: "These are my keys →" },
          ]}
        />
        <ExerciseCard
          title="Describe tu entorno"
          instructions="Escribe 5 oraciones completas sobre objetos a tu alrededor (Identifica, Color, Ubicación):"
          items={[
            { question: "1." },
            { question: "2." },
            { question: "3." },
            { question: "4." },
            { question: "5." },
          ]}
        />
      </LessonSection>

      {/* PART 11: Common Mistakes */}
      <LessonSection title="⚠️ PARTE 11: Errores comunes y cómo evitarlos">
        <VocabularyList
          title="Top 12 Errores (Correct vs Incorrect)"
          columns={1}
          items={[
            {
              english: "books / some books",
              spanish: "❌ a books (Usar a/an con plurales)",
            },
            {
              english: "I'm a teacher",
              spanish: "❌ I'm teacher (Olvidar a/an en profesiones)",
            },
            {
              english: "children, men",
              spanish: "❌ childs, mans (Plurales mal formados)",
            },
            {
              english: "an apple",
              spanish: "❌ a apple (Usar a antes de vocal)",
            },
            {
              english: "sugar, information",
              spanish: "❌ sugars, informations (Pluralizar incontables)",
            },
            {
              english: "a blue pen",
              spanish: "❌ a pen blue (Orden incorrecto)",
            },
            {
              english: "These are my books",
              spanish: "❌ This are my books (Confundir This/These)",
            },
          ]}
        />
        <ExerciseCard
          title="Ejercicio de corrección"
          instructions="Corrige estos errores:"
          items={[
            { question: "This is a books" },
            { question: "The pen blue is on table" },
            { question: "I have three childs" },
            { question: "She's teacher" },
            { question: "I need a informations" },
            { question: "The book is in the wall" },
            { question: "Those is my keys" },
            { question: "I love the dogs" },
            { question: "There are two mans" },
            { question: "A apple is red" },
          ]}
        />
      </LessonSection>

      {/* PART 12: Integrated Practice */}
      <LessonSection title="🎯 PARTE 12: Práctica integrada">
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-800">
              Ejercicio 1: Describe el aula
            </h4>
            <p className="text-gray-600 mb-2">
              Usa este modelo para describir tu espacio (min 8 oraciones):
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm italic border-l-2 border-gray-300">
              "This is my classroom. There are twenty chairs... The teacher's
              desk is in front of..."
            </div>
          </div>

          <GrammarTable
            title="Ejercicio 2: Diferencias entre imágenes"
            headers={["Classroom A", "Classroom B"]}
            rows={[
              ["The book is on the table", "The book is under the table"],
              ["There are three red chairs", "There are three blue chairs"],
              [
                "The computer is next to the window",
                "The computer is behind the door",
              ],
            ]}
          />

          <ExerciseCard
            title="Tu turno"
            instructions="Crea 5 pares de oraciones describiendo diferencias en dos espacios."
            items={[{ question: "Pairs 1-5" }]}
          />

          <ExerciseCard
            title="Ejercicio 3: Identificación rápida"
            instructions="Usa demostrativos:"
            items={[
              { question: "Cerca: This is ___, These are ___" },
              { question: "Lejos: That is ___, Those are ___" },
            ]}
          />

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-bold text-indigo-900">
              Ejercicio 4: Cadena descriptiva
            </h4>
            <p className="text-sm mb-2">
              Selecciona un objeto y descríbelo completamente (5 frases).
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>This is my pen</li>
              <li>It's blue</li>
              <li>It's on my desk</li>
              <li>It's next to my notebook</li>
              <li>It's a new pen</li>
            </ul>
          </div>
        </div>
      </LessonSection>

      {/* PART 13: Role-Plays */}
      <LessonSection title="🎭 PARTE 13: Role-plays">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-bold text-purple-700 mb-2">En la papelería</h4>
            <p className="text-xs text-gray-600 mb-2">
              Person A: Dependiente / Person B: Cliente
            </p>
            <p className="text-sm italic">
              "I need a notebook... What color?... This red one..."
            </p>
          </div>
          <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-bold text-purple-700 mb-2">Nuevo compañero</h4>
            <p className="text-xs text-gray-600 mb-2">
              Explica dónde están las cosas
            </p>
            <p className="text-sm italic">
              "Where is the bathroom? Where are the books?"
            </p>
          </div>
          <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
            <h4 className="font-bold text-purple-700 mb-2">Objeto perdido</h4>
            <p className="text-xs text-gray-600 mb-2">Ayuda a buscar algo</p>
            <p className="text-sm italic">
              "What color is it? Is this your pen?"
            </p>
          </div>
        </div>
      </LessonSection>

      {/* PART 14: Final Evaluation */}
      <LessonSection title="📝 PARTE 14: Evaluación final">
        <ExerciseCard
          title="Test de conocimiento"
          instructions="Completa las siguientes secciones:"
          items={[
            { question: "Sección A - Artículos: I have ___ dog..." },
            { question: "Sección B - Plurales: child → ?, box → ?" },
            { question: "Sección C - Demostrativos: ___ is my pen (cerca)" },
            {
              question: "Sección D - Preposiciones: The book is ___ the table",
            },
            { question: "Sección E - Traducción: Este es mi cuaderno azul" },
            { question: "Sección F - Corrección: This are my books" },
          ]}
        />
      </LessonSection>

      {/* PART 15: Final Activity */}
      <LessonSection title="🏆 PARTE 15: Actividad final - Tour virtual">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-indigo-900 mb-4">
            Proyecto Final
          </h3>
          <p className="mb-4">
            Crea un tour virtual de tu espacio (2-3 min hablado o 200-250
            palabras). Describe cada área usando{" "}
            <strong>sustantivos, colores, preposiciones y demostrativos</strong>
            .
          </p>
          <div className="bg-white p-4 rounded-lg shadow-sm text-sm">
            <p className="font-bold text-gray-600 mb-2">Ejemplo Modelo:</p>
            <p className="italic text-gray-600">
              "Welcome to my home office! This is my workspace. In front of me,
              there's a large wooden desk. On the desk, there are several
              items..."
            </p>
          </div>
        </div>
      </LessonSection>

      <div className="text-center py-8 text-gray-500 text-sm">
        <p>¡Felicidades! Has completado el módulo.</p>
      </div>
    </LessonLayout>
  );
}
