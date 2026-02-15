"use client";

import { motion } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import {
  IconExternalLink,
  IconBook2,
  IconHistory,
  IconList,
  IconVideo,
  IconClock,
  IconStar,
  IconScale,
  IconLock,
  IconLink,
  IconUser,
  IconStack2,
  IconCode,
  IconMessage,
  IconMessageCircle,
  IconClipboardCheck,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@saygo/ui/src/components/accordion";
import { Badge } from "@saygo/ui/src/components/badge";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const sectionIcons: Record<string, React.ElementType> = {
  "pasado-simple-regular": IconHistory,
  "pasado-simple-irregular": IconList,
  "presente-continuo": IconVideo,
  "futuros-predicciones": IconClock,
  "present-perfect": IconStar,
  "comparativos-superlativos": IconScale,
  modales: IconLock,
  "conectores-oraciones-complejas": IconLink,
  "pronombres-objeto-reflexivos": IconUser,
  "cantidades-determinantes": IconStack2,
  "condicionales-basicos": IconCode,
  "voz-pasiva-reported-speech": IconMessage,
  "funciones-comunicativas-a2": IconMessageCircle,
};

const sections = [
  {
    id: "pasado-simple-regular",
    title: "Pasado Simple Regular (Consolidación desde A1)",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          El pilar fundamental del A2 — acciones terminadas en el pasado
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Formación del pasado regular:</strong> -ed (pronunciación
            /t/, /d/, /id/)
          </li>
          <li>
            <strong>Time markers del pasado:</strong> yesterday, last
            week/month/year, ago, in 2020, when I was young
          </li>
          <li>
            <strong>Verbos regulares esenciales:</strong> work, play, watch,
            listen, walk, talk, study, stop, travel
          </li>
          <li>
            <strong>Pasado Simple negativo:</strong> didn't + infinitivo (I
            didn't work)
          </li>
          <li>
            <strong>Pasado Simple interrogativo:</strong> Did + sujeto +
            infinitivo? (Did you work?)
          </li>
          <li>
            <strong>Respuestas cortas:</strong> Yes, I did / No, I didn't
          </li>
          <li>
            <strong>Contraste básico Presente/Pasado:</strong> I work vs. I
            worked
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "pasado-simple-irregular",
    title: "Pasado Simple Irregular",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Los verbos más frecuentes (no memorizar listas infinitas, solo los
          útiles)
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Verbos irregulares esenciales por grupos fonéticos:</strong>{" "}
            Go-went, do-did, have-had, say-said, get-got, make-made, know-knew,
            think-thought; Come-came, become-became, run-ran, eat-ate,
            drink-drank, see-saw, buy-bought
          </li>
          <li>
            <strong>Estructuras en pasado:</strong> Wh- questions (Where did you
            go? What did you buy?)
          </li>
          <li>
            <strong>Secuencia narrativa básica:</strong> First, then, after
            that, finally (para contar historias simples)
          </li>
          <li>
            <strong>Vocabulario:</strong> Vacaciones pasadas, fin de semana,
            experiencias recientes
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "presente-continuo",
    title: "Presente Continuo (Acciones en Progreso)",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          El contraste con el Presente Simple
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Formación:</strong> to be + -ing (spelling rules: running,
            making, lying)
          </li>
          <li>
            <strong>Usos:</strong> Acciones que suceden ahora, cambios
            temporales, planes futuros confirmados
          </li>
          <li>
            <strong>Contraste Presente Simple vs. Continuo:</strong> I work
            (hábito) vs. I'm working (ahora)
          </li>
          <li>
            <strong>Verbos de estado no usados en continuo:</strong> know, like,
            want, have (posesión), need, love, hate
          </li>
          <li>
            <strong>Vocabulario:</strong> Describir fotos (In this picture, they
            are...), situaciones actuales
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "futuros-predicciones",
    title: "Futuros y Predicciones",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Distinción clara entre intenciones y predicciones
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Be going to (planes/intenciones):</strong> I'm going to
            study medicine
          </li>
          <li>
            <strong>Will (decisiones espontáneas y predicciones):</strong> I'll
            get it (teléfono) / I think it will rain
          </li>
          <li>
            <strong>Presente Continuo para futuro (arreglos fijos):</strong> I'm
            meeting her at 5 (ya acordado)
          </li>
          <li>
            <strong>Presente Simple para horarios futuros:</strong> The train
            leaves at 6 PM
          </li>
          <li>
            <strong>Futuro en oraciones temporales:</strong> When I arrive, I'll
            call you (no "will" después de when)
          </li>
          <li>
            <strong>Vocabulario:</strong> Planes de futuro, predicciones,
            promesas (I promise I'll...)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "present-perfect",
    title: "Present Perfect Simple (Experiencias de Vida)",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          El pasado que conecta con el presente
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Formación:</strong> have/has + participio pasado (regular
            -ed, irregulares comunes: been, seen, done, gone, eaten)
          </li>
          <li>
            <strong>Uso principal:</strong> Experiencias sin tiempo específico
            (Have you ever been to Paris?)
          </li>
          <li>
            <strong>Ever / Never / Just / Already / Yet</strong>
          </li>
          <li>
            <strong>Contraste con Pasado Simple:</strong> I went to Rome (cuándo
            específico) vs. I've been to Rome (experiencia)
          </li>
          <li>
            <strong>For vs. Since:</strong> I have lived here for 2 years /
            since 2020
          </li>
          <li>
            <strong>Vocabulario:</strong> Experiencias vitales, viajes, logros
            personales
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "comparativos-superlativos",
    title: "Comparativos y Superlativos",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Describir diferencias y extremos
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Adjetivos cortos:</strong> tall → taller → the tallest (big
            → bigger, hot → hotter)
          </li>
          <li>
            <strong>Adjetivos largos:</strong> beautiful → more beautiful → the
            most beautiful
          </li>
          <li>
            <strong>Irregulares:</strong> good-better-best, bad-worse-worst,
            far-further-furthest
          </li>
          <li>
            <strong>Igualdad:</strong> as...as (I'm as tall as you) / not
            as...as
          </li>
          <li>
            <strong>Comparación de sustantivos:</strong> more/fewer/less +
            sustantivo (more money, less time)
          </li>
          <li>
            <strong>Vocabulario:</strong> Compras (cheaper, more expensive),
            descripciones de ciudades, comidas
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "modales",
    title: "Modales de Habilidad, Permiso y Obligación",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Expresar necesidades y posibilidades
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Can (habilidad presente):</strong> I can swim
          </li>
          <li>
            <strong>Could (habilidad pasada):</strong> I could swim when I was 5
          </li>
          <li>
            <strong>May / Might (posibilidad débil):</strong> It may rain / It
            might be late
          </li>
          <li>
            <strong>Must (obligación fuerte, deducción):</strong> I must study /
            He must be tired (deducción)
          </li>
          <li>
            <strong>Have to (obligación externa):</strong> I have to work (my
            boss says)
          </li>
          <li>
            <strong>
              Mustn't (prohibición) vs. Don't have to (no es necesario):
            </strong>{" "}
            You mustn't smoke / You don't have to come
          </li>
          <li>
            <strong>Should (consejo):</strong> You should see a doctor
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "conectores-oraciones-complejas",
    title: "Conectores y Oraciones Complejas",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Unir ideas, no hablar en "frases cortas"
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Conjunciones básicas:</strong> and, but, or, so, because
            (oración subordinada sustantiva)
          </li>
          <li>
            <strong>Conectores de tiempo:</strong> when, while, before, after,
            until, as soon as
          </li>
          <li>
            <strong>Conectores de secuencia:</strong> first, then, next, after
            that, finally
          </li>
          <li>
            <strong>Although / Though (concesión básica):</strong> Although it
            was raining, we went out
          </li>
          <li>
            <strong>Puntuación básica:</strong> uso de comas en oraciones largas
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "pronombres-objeto-reflexivos",
    title: "Pronombres Objetos, Reflexivos y Posesivos",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">Precisión referencial</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Pronombres objeto:</strong> me, you, him, her, it, us, them
            (I saw him)
          </li>
          <li>
            <strong>Pronombres posesivos:</strong> mine, yours, his, hers, ours,
            theirs (This is mine)
          </li>
          <li>
            <strong>Pronombres reflexivos:</strong> myself, yourself... (I cut
            myself, Enjoy yourself, by myself)
          </li>
          <li>
            <strong>Cada uno (each other):</strong> We love each other
          </li>
          <li>
            <strong>Double genitive (colloquial):</strong> a friend of mine,
            that car of yours
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "cantidades-determinantes",
    title: "Cantidades, Determinantes y Cuantificadores",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Hablar de "cuánto" con precisión
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Some vs. Any:</strong> afirmativo vs. negativo/interrogativo
            (Would you like some...? excepción)
          </li>
          <li>
            <strong>Much / Many / A lot of / Lots of:</strong> contables vs.
            incontables
          </li>
          <li>
            <strong>A few / Few vs. A little / Little:</strong> cantidad
            positiva vs. escasez
          </li>
          <li>
            <strong>All, most, some, none + of:</strong> All of us, Most of the
            people
          </li>
          <li>
            <strong>Every / Each:</strong> Every day vs. Each student
          </li>
          <li>
            <strong>Both / Either / Neither:</strong> Both are good, Neither do
            I (inversión básica)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "condicionales-basicos",
    title: "Condicionales Básicos y Oraciones Temporales",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          El primer "si" (Cero y Uno)
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Condicional Cero (verdades universales):</strong> If you
            heat water, it boils
          </li>
          <li>
            <strong>Condicional Uno (futuro probable):</strong> If it rains, I
            will stay home / I'll stay home if it rains
          </li>
          <li>
            <strong>Unless (= if not):</strong> I won't go unless you come (a
            menos que)
          </li>
          <li>
            <strong>Oraciones temporales con when, as soon as, until:</strong>{" "}
            When I see him, I'll tell him
          </li>
          <li>
            <strong>Wish + Past Simple (deseos presentes):</strong> I wish I had
            more money
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "voz-pasiva-reported-speech",
    title: "Voz Pasiva Básica y Reported Speech Simple",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Introducción a estructuras más formales
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Pasiva Presente Simple:</strong> is/are + past participle
            (The car is made in Japan)
          </li>
          <li>
            <strong>Pasiva Pasado Simple:</strong> was/were + past participle
            (The window was broken)
          </li>
          <li>
            <strong>Verbos de reporte básicos:</strong> say, tell, ask
          </li>
          <li>
            <strong>
              Reported Speech con backshift simple (presente → pasado):
            </strong>{" "}
            "I am tired" → He said he was tired
          </li>
          <li>
            <strong>Reported questions:</strong> He asked if I was tired / He
            asked where I lived
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "funciones-comunicativas-a2",
    title: "Funciones Comunicativas Complejas (Integración A2)",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Usar todo junto en contextos reales
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Pedir y dar opiniones:</strong> I think that..., In my
            opinion..., Do you think...?
          </li>
          <li>
            <strong>Expresar acuerdo y desacuerdo:</strong> I agree, I don't
            think so, You're right, Perhaps, but...
          </li>
          <li>
            <strong>Hacer sugerencias:</strong> Why don't we...? How about...?
            You could...
          </li>
          <li>
            <strong>Describir problemas y dar consejos:</strong> You should...,
            If I were you, I'd... (segundo condicional muy básico)
          </li>
          <li>
            <strong>Relatar experiencias de viaje:</strong> narrative tenses
            básicas
          </li>
          <li>
            <strong>Describir películas/libros</strong> (spoilers permitidos en
            presente/pasado)
          </li>
          <li>
            <strong>Citas médicas básicas:</strong> describir síntomas (I've got
            a headache, It hurts when I...)
          </li>
        </ul>
      </div>
    ),
  },
];

const competenciesParagraph =
  "Al terminar este nivel deberías poder contar una historia del pasado con secuencia lógica (qué hiciste el fin de semana), comparar opciones (ciudades, productos, personas) usando comparativos, hablar de experiencias vitales sin especificar cuándo (Have you ever...?), hacer planes futuros distinguiendo entre intenciones y arreglos fijos, dar instrucciones y consejos (You should..., You have to...), expresar posibilidades (It might..., Maybe I'll...), describir problemas de salud básicos y entender instrucciones médicas simples, y mantener una conversación sobre temas cotidianos sin preparación previa (2-3 minutos).";

const sequenceNote = {
  title: "Nota importante sobre la secuencia",
  questions: [
    {
      q: "¿Por qué Present Perfect antes que todos los modales?",
      a: 'Porque en A2 necesitas hablar de "tu experiencia vital" antes que dar consejos filosóficos. Es más urgente poder decir "I\'ve never eaten sushi" que "You should try it".',
    },
    {
      q: "¿Por qué el Condicional 1 está al final?",
      a: 'Porque requiere dominar el Presente Simple (A1) + Futuro con Will (A2 Módulo 4) + conectores temporales (A2 Módulo 8). Sin esos cimientos, el "if" se convierte en fórmula memorizada sin sentido.',
    },
  ],
};

export function A1() {
  return (
    <section
      id="a1-to-a2"
      className="relative w-full bg-background py-16 md:py-24 scroll-mt-20"
    >
      <MaxWidth className="max-w-3xl space-y-16">
        {/* Header */}
        <motion.header
          className="space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
          custom={0}
        >
          <Badge className="inline-flex items-center gap-2">
            <IconBook2 className="size-4" />
            Temario completo
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A1 to A2
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Consolidación del pasado simple, presente continuo, futuros, present
            perfect, comparativos, modales y estructuras complejas para
            comunicarte con fluidez en situaciones cotidianas.
          </p>
        </motion.header>

        {/* Curriculum sections - Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={0}
        >
          <Accordion className="w-full" multiple={false}>
            {sections.map((section) => {
              const Icon = sectionIcons[section.id] ?? IconBook2;
              return (
                <AccordionItem key={section.id} id={section.id}>
                  <AccordionTrigger className="py-3 text-base font-medium text-foreground hover:no-underline">
                    <span className="flex items-center gap-3 text-left">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-citrus-zest/10 text-citrus-zest">
                        <Icon className="size-4" />
                      </span>
                      {section.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90">
                    <div className="space-y-4 pb-1">
                      <div className="text-sm sm:text-base leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>

        {/* Competencias A2 - párrafo */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={0}
        >
          <h3 className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <IconClipboardCheck className="size-5 text-citrus-zest shrink-0" />
            Competencias A2
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {competenciesParagraph}
          </p>
        </motion.div>

        {/* Nota sobre la secuencia */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-sm font-medium text-citrus-zest uppercase">
            {sequenceNote.title}
          </h3>
          <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
            {sequenceNote.questions.map((item, i) => (
              <p key={i}>
                <span className="text-foreground">{item.q}</span> {item.a}
              </p>
            ))}
          </div>
        </motion.div>
      </MaxWidth>
    </section>
  );
}
