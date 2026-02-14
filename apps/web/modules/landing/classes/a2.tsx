"use client";

import { motion } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import {
  IconBook2,
  IconHistory,
  IconClock,
  IconSparkles,
  IconCode,
  IconLock,
  IconMessage,
  IconMessageCircle,
  IconBrackets,
  IconVariable,
  IconLink,
  IconArrowsSort,
  IconMicrophone,
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
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const sectionIcons: Record<string, React.ElementType> = {
  "pasado-continuo-narrativa": IconHistory,
  "presente-perfecto-continuo": IconClock,
  "pasado-perfecto-simple": IconHistory,
  "futuros-avanzados": IconSparkles,
  "condicionales-completos": IconCode,
  "modales-avanzados": IconLock,
  "voz-pasiva-completa": IconMessage,
  "reported-speech-completo": IconMessageCircle,
  "oraciones-relativas": IconBrackets,
  "gerundio-infinitivo": IconVariable,
  "conectores-avanzados": IconLink,
  "inversion-enfasis": IconArrowsSort,
  "funciones-comunicativas-b1": IconMicrophone,
};

const sections = [
  {
    id: "pasado-continuo-narrativa",
    title: "Pasado Continuo y Narrativa Avanzada",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Acciones en progreso interrumpidas y contexto histórico</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Pasado Continuo (Past Continuous):</strong> was/were + -ing</li>
          <li><strong>Contraste Pasado Simple vs. Continuo:</strong> I was walking (fondo) when I saw (acción) him</li>
          <li><strong>Acciones paralelas en el pasado:</strong> While I was cooking, he was watching TV</li>
          <li><strong>Pasado Continuo para contexto:</strong> It was raining, the birds were singing...</li>
          <li><strong>Narrativa rica:</strong> combinación de ambos tiempos para historias detalladas</li>
          <li><strong>Vocabulario:</strong> Adverbios narrativos (suddenly, immediately, meanwhile, eventually)</li>
        </ul>
      </div>
    ),
  },
  {
    id: "presente-perfecto-continuo",
    title: "Presente Perfecto Continuo",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Acciones temporales con resultado presente visible</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Formación:</strong> have/has been + -ing</li>
          <li><strong>Diferencia con Presente Perfecto Simple:</strong> I've painted the room (terminado) vs. I've been painting (sigue sucio, proceso)</li>
          <li><strong>How long have you been...?</strong> para acciones en curso</li>
          <li><strong>Recently / Lately con continuo:</strong> I've been feeling tired lately</li>
          <li><strong>Verbos de duración vs. instantáneos:</strong> live, work, study (sí) vs. start, finish, die (no)</li>
        </ul>
      </div>
    ),
  },
  {
    id: "pasado-perfecto-simple",
    title: "Pasado Perfecto Simple",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">El "antes del antes" — secuencia temporal compleja</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Formación:</strong> had + participio pasado</li>
          <li><strong>Uso principal:</strong> Acción anterior a otra acción pasada (When I arrived, he had left)</li>
          <li><strong>Already / Yet / Just / Never / Ever</strong> en pasado perfecto</li>
          <li><strong>No sooner... than / Hardly... when:</strong> inversiones básicas (No sooner had I arrived than...)</li>
          <li><strong>Wish + Past Perfect (arrepentimientos):</strong> I wish I had studied more</li>
          <li><strong>Third Conditional básico (introducción):</strong> If I had known, I would have...</li>
        </ul>
      </div>
    ),
  },
  {
    id: "futuros-avanzados",
    title: "Futuros Avanzados y Gradación de Certeza",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">No todo es "will" — matices de probabilidad</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Future Continuous (will be + -ing):</strong> This time tomorrow I'll be flying to Paris</li>
          <li><strong>Future Perfect (will have + participle):</strong> By 2025 I'll have graduated</li>
          <li><strong>Be about to / Be on the verge of:</strong> inminencia inmediata</li>
          <li><strong>Be bound to / Be likely to / Be due to:</strong> probabilidad y expectativas</li>
          <li><strong>May well / Might well:</strong> probabilidad alta (He may well be right)</li>
          <li><strong>Shall (ofertas formales y sugerencias):</strong> Shall I open the window?</li>
        </ul>
      </div>
    ),
  },
  {
    id: "condicionales-completos",
    title: "Condicionales Completos (Cero, Uno, Dos, Tres)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">El sistema condicional integral</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Cero:</strong> If you mix red and blue, you get purple (universal)</li>
          <li><strong>Primero:</strong> If I win, I'll buy a car (probable futuro)</li>
          <li><strong>Segundo:</strong> If I won, I'd buy a car (hipotético presente) — nuevo en B1</li>
          <li><strong>Tercero:</strong> If I had won, I'd have bought (irreal pasado) — consolidación</li>
          <li><strong>Mixed Conditionals:</strong> If I had studied (pasado), I would be rich now (presente)</li>
          <li><strong>Unless / Provided that / As long as / Suppose / Imagine</strong></li>
          <li><strong>Wish / If only</strong> en todos los tiempos</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modales-avanzados",
    title: "Modales Avanzados y Semimodales",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Capacidad, probabilidad y necesidad en todos los tiempos</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Can / Could / Be able to (todos los tiempos):</strong> I'll be able to, I've been able to</li>
          <li><strong>May / Might / Could (presente y pasado):</strong> He may have left, She could have been delayed</li>
          <li><strong>Must / Can't (deducción lógica):</strong> He must be tired (seguro ahora), He must have been tired (seguro ayer)</li>
          <li><strong>Should / Ought to / Had better (consejos y expectativas):</strong> You'd better go</li>
          <li><strong>Need / Needn't / Don't need to / Didn't need to (necesidad):</strong> You needn't have worried (lo hiciste innecesariamente)</li>
          <li><strong>Would (pasado de will, hábitos pasados, preferencias):</strong> He would always sing, I'd rather stay</li>
        </ul>
      </div>
    ),
  },
  {
    id: "voz-pasiva-completa",
    title: "Voz Pasiva Completa",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Todas las formas pasivas y usos avanzados</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Pasiva en todos los tiempos:</strong> is being built, has been done, will have been finished</li>
          <li><strong>Pasiva modal:</strong> can be done, should have been told</li>
          <li><strong>Get + participio (pasiva informal):</strong> get married, get dressed, get lost</li>
          <li><strong>Verbos de reporting en pasiva:</strong> It is said that..., He is believed to be...</li>
          <li><strong>Have / Get something done (causativos):</strong> I had my hair cut, I need to get this fixed</li>
          <li><strong>Agente con "by" (uso selectivo):</strong> solo cuando el agente es relevante o inesperado</li>
        </ul>
      </div>
    ),
  },
  {
    id: "reported-speech-completo",
    title: "Reported Speech Completo",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">El "estilo indirecto" en todas sus formas</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Backshift completo de tiempos:</strong> presente → pasado, pasado → pasado perfecto</li>
          <li><strong>Pronombres, adjetivos posesivos, expresiones de tiempo y lugar:</strong> now → then, here → there, this → that</li>
          <li><strong>Preguntas indirectas:</strong> He asked if I was coming / He asked where I lived</li>
          <li><strong>Imperativos indirectos:</strong> He told me to sit down / He warned me not to go</li>
          <li><strong>Sugerencias, ofertas, órdenes indirectas:</strong> He suggested going / He offered to help</li>
          <li><strong>Verbos de reporting avanzados:</strong> admit, deny, promise, refuse, agree, suggest, recommend</li>
        </ul>
      </div>
    ),
  },
  {
    id: "oraciones-relativas",
    title: "Oraciones Relativas (Adjetivales)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Combinar oraciones con precisión descriptiva</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Defining Relative Clauses (esenciales):</strong> The man who lives there is my uncle</li>
          <li><strong>Non-defining (non-restrictive):</strong> My brother, who lives in Paris, is visiting (coma + información extra)</li>
          <li><strong>Pronombres relativos:</strong> who, which, that, whose, whom (uso formal)</li>
          <li><strong>Omission of relative pronouns:</strong> The book (that) I bought (objeto, se puede omitir)</li>
          <li><strong>Preposiciones en relativas:</strong> The man I spoke to / The man to whom I spoke (formal)</li>
          <li><strong>Which con oraciones completas:</strong> He arrived late, which annoyed me</li>
        </ul>
      </div>
    ),
  },
  {
    id: "gerundio-infinitivo",
    title: "Oraciones de Gerundio e Infinitivo",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Cuándo usar -ing vs. to + infinitivo</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Verbos seguidos de gerundio:</strong> enjoy, avoid, finish, mind, suggest, consider, imagine, practice</li>
          <li><strong>Verbos seguidos de infinitivo:</strong> want, need, decide, promise, hope, plan, afford, refuse, manage</li>
          <li><strong>Verbos con cambio de significado:</strong> remember/forget/regret/stop/try + -ing vs. to</li>
          <li><strong>Verbos con objeto + infinitivo:</strong> want me to go, told him to wait</li>
          <li><strong>Estructuras pasivas:</strong> need doing (= need to be done), be worth doing</li>
          <li><strong>To + infinitivo de propósito:</strong> I came here to study</li>
        </ul>
      </div>
    ),
  },
  {
    id: "conectores-avanzados",
    title: "Conectores Avanzados y Cohesión Textual",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Escribir y hablar con fluidez estructural</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Contraste:</strong> however, nevertheless, although, even though, despite, in spite of (+ noun/-ing)</li>
          <li><strong>Causa y efecto:</strong> because, since, as, because of, due to, owing to, therefore, consequently, as a result</li>
          <li><strong>Adición:</strong> furthermore, moreover, in addition, besides, what's more</li>
          <li><strong>Ejemplificación:</strong> for example, for instance, such as, like, particularly, especially</li>
          <li><strong>Conclusión:</strong> in conclusion, to sum up, in short, all in all</li>
          <li><strong>Secuencia:</strong> subsequently, eventually, previously, meanwhile</li>
        </ul>
      </div>
    ),
  },
  {
    id: "inversion-enfasis",
    title: "Inversión y Énfasis",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Estructuras formales y expresividad</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Inversión negativa:</strong> Never have I seen..., Rarely do we..., Not only did he... but also...</li>
          <li><strong>Inversión condicional:</strong> Had I known (= If I had known), Were I you (= If I were you)</li>
          <li><strong>Cleft sentences (oraciones hendidas):</strong> It was John who broke the window / What I need is a vacation</li>
          <li><strong>Emphatic "do":</strong> I do like it! / Do sit down</li>
          <li><strong>Fronting (adelantamiento):</strong> Fast though he ran, he couldn't catch it</li>
        </ul>
      </div>
    ),
  },
  {
    id: "funciones-comunicativas-b1",
    title: "Funciones Comunicativas B1 (Integración)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Dominio situacional completo</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Expresar y justificar opiniones complejas:</strong> While I see your point, I believe that... due to...</li>
          <li><strong>Hipótesis y especulaciones:</strong> Supposing that..., Imagine if..., What if...</li>
          <li><strong>Describir cambios y tendencias:</strong> The graph shows..., There has been a rise in...</li>
          <li><strong>Relatar experiencias indirectas:</strong> He told me that she had said that...</li>
          <li><strong>Manejar situaciones inesperadas:</strong> I was supposed to..., but then...</li>
          <li><strong>Discusión y debate básico:</strong> I see what you mean, but on the other hand...</li>
          <li><strong>Narrativa emotiva:</strong> historias con suspense, descripciones sensoriales, diálogo indirecto</li>
        </ul>
      </div>
    ),
  },
];

const competenciesParagraph =
  "Al terminar este nivel deberías poder mantener conversaciones espontáneas sobre temas personales, profesionales y de actualidad sin preparación previa; entender los puntos principales de textos complejos sobre temas concretos (artículos de opinión, instrucciones técnicas); escribir textos claros y detallados (ensayos, cartas formales, informes) sobre una amplia gama de temas; explicar un punto de vista dando ventajas y desventajas de varias opciones; narrar una historia o la trama de un libro o película y describir tus reacciones; manejar situaciones inesperadas mientras viajas (problemas, cambios de planes, quejas formales); entender series de TV y películas en inglés estándar sin subtítulos (con esfuerzo); y leer correspondencia comercial y entender la intención del remitente.";

const differencesA2vsB1 = [
  { aspect: "Complejidad temporal", a2: "Presente, pasado simple, futuro básico", b1: "Todos los tiempos compuestos y continuos" },
  { aspect: "Condicionales", a2: "Solo 0 y 1", b1: "Sistema completo (0, 1, 2, 3, mixtos)" },
  { aspect: "Opiniones", a2: '"I think...", "I like..."', b1: "Argumentación con conectores y matices" },
  { aspect: "Narrativa", a2: "Secuencia lineal (primero, después)", b1: "Contextualización rica, flashbacks básicos" },
  { aspect: "Textos", a2: "Postales, emails simples", b1: "Ensayos, cartas formales, informes breves" },
  { aspect: "Autonomía", a2: "Situaciones predecibles", b1: "Imprevistos y temas abstractos básicos" },
];

const notInB1 = [
  "Subjuntivo en frases condicionales complejas (If I were to...)",
  "Inversión extensiva en condicionales (Should you need...)",
  "Oraciones participiales avanzadas (Having finished..., Seen from...)",
  "Discurso indirecto libre (estilo literario)",
  "Modales arcaicos (thou, might en pasado remoto)",
  "Complejidad idiomática extrema",
];

export function A2() {
  return (
    <section id="a2-to-b1" className="relative w-full bg-background py-16 md:py-24 scroll-mt-20">
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
            A2 to B1
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Pasado continuo, perfectos, futuros avanzados, condicionales completos, modales avanzados, voz pasiva, reported speech, relativas, gerundio e infinitivo, y funciones comunicativas B1.
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

        {/* Competencias B1 - párrafo */}
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
            Competencias B1
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {competenciesParagraph}
          </p>
        </motion.div>

        {/* Diferencias A2 vs. B1 - minimalista */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-sm font-medium text-citrus-zest">
            Diferencias clave A2 vs. B1
          </h3>
          <div className="text-sm text-muted-foreground space-y-2">
            {differencesA2vsB1.map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-4 gap-0.5 border-b border-border/50 pb-2 last:border-0 last:pb-0">
                <span className="font-medium text-foreground shrink-0 sm:w-36">{row.aspect}</span>
                <span className="sm:flex-1"><span className="text-foreground/80">A2:</span> {row.a2}</span>
                <span className="sm:flex-1"><span className="text-foreground/80">B1:</span> {row.b1}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lo que NO está en B1 - minimalista */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-sm font-medium text-citrus-zest">
            Lo que no está en B1 (viene en B2)
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {notInB1.join(" · ")}
          </p>
        </motion.div>
      </MaxWidth>
    </section>
  );
}
