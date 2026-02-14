"use client";

import { motion } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import {
  IconBook2,
  IconClock,
  IconCode,
  IconLock,
  IconMessage,
  IconBrackets,
  IconVariable,
  IconLink,
  IconArrowsSort,
  IconBook,
  IconMessageCircle,
  IconFileText,
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
  "modulo-1-tiempos": IconClock,
  "modulo-2-condicionales": IconCode,
  "modulo-3-modales": IconLock,
  "modulo-4-voz-pasiva-causativos": IconMessage,
  "modulo-5-relativas-nominales": IconBrackets,
  "modulo-6-infinitivo-gerundio": IconVariable,
  "modulo-7-conectores": IconLink,
  "modulo-8-inversion-enfasis": IconArrowsSort,
  "modulo-9-subjuntivo": IconBook,
  "modulo-10-discurso-reportado": IconMessageCircle,
  "modulo-11-participiales": IconFileText,
  "modulo-12-funciones-b2": IconMicrophone,
};

const sections = [
  {
    id: "modulo-1-tiempos",
    title: "Módulo 1: Tiempos Verbales Compuestos y Matices Temporales",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Precisión temporal avanzada y perspectiva narrativa</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Future in the Past (was going to, would, was about to):</strong> I was going to call you, but...</li>
          <li><strong>Past Perfect Continuous:</strong> had been + -ing (duración antes de otro punto pasado)</li>
          <li><strong>Future Perfect Continuous:</strong> will have been working (duración hasta punto futuro)</li>
          <li><strong>Would + infinitivo (pasado habitual):</strong> He would often visit us</li>
          <li><strong>Used to vs. Would vs. Past Simple:</strong> diferencias de hábitos, estados y acciones</li>
          <li><strong>Be used to / Get used to + -ing:</strong> I'm used to waking up early</li>
          <li><strong>Verbos de percepción en todos los tiempos:</strong> I heard him sing / I heard him singing</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-2-condicionales",
    title: "Módulo 2: Condicionales y Estructuras Hipotéticas Avanzadas",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">El subjuntivo inglés en toda su extensión</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Condicional mixto avanzado:</strong> If I hadn't missed the bus (pasado), I wouldn't be late now (presente)</li>
          <li><strong>Inversión condicional formal:</strong> Had I known..., Were I to win..., Should you need...</li>
          <li><strong>Supposing (that) / Imagine (that) / What if:</strong> Supposing you won the lottery?</li>
          <li><strong>But for / If it weren't for / If it hadn't been for:</strong> But for your help, I'd have failed</li>
          <li><strong>I wish / If only + would (quejas):</strong> I wish you would listen</li>
          <li><strong>It's (high) time + past simple:</strong> It's time we left</li>
          <li><strong>As if / As though + past/subjuntivo:</strong> He acts as if he knew everything</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-3-modales",
    title: "Módulo 3: Modales Avanzados y Perifrasis Modales",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Necesidad, probabilidad y habilidad en todos los registros</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Must have / Can't have / May have / Might have / Could have (deducción pasada):</strong> He must have forgotten</li>
          <li><strong>Should have / Ought to have / Needn't have (crítica retrospectiva):</strong> You should have told me</li>
          <li><strong>Could have (oportunidad perdida) vs. Was able to (logro específico)</strong></li>
          <li><strong>Would rather / Would sooner / Would prefer + pasado (preferencias):</strong> I'd rather you didn't smoke</li>
          <li><strong>Had better (advertencia) vs. Should (consejo) vs. Must (obligación)</strong></li>
          <li><strong>Be supposed to / Be to / Be meant to (expectativas y planes):</strong> We are to meet at 5</li>
          <li><strong>May well / Might well / May as well (probabilidad y sugerencias):</strong> We may as well go home</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-4-voz-pasiva-causativos",
    title: "Módulo 4: Voz Pasiva y Causativos Complejos",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Estrategias de despersonalización y focalización</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Pasiva con verbos de reporting avanzados:</strong> He is rumored to be... / It is believed that...</li>
          <li><strong>Pasiva con dos objetos:</strong> I was given a book / A book was given to me</li>
          <li><strong>Have / Get something done (causativos avanzados):</strong> I had my car stolen (mala suerte)</li>
          <li><strong>Want / Need / Require + -ing (pasiva sustitutiva):</strong> The house needs painting</li>
          <li><strong>Estructuras impersonales:</strong> It is said / People say / They say (One says — formal)</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-5-relativas-nominales",
    title: "Módulo 5: Oraciones Relativas y Estructuras Nominales Complejas",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Precisión referencial y densidad informativa</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Relativas con preposiciones finales:</strong> The man I spoke to / The man to whom I spoke (registros)</li>
          <li><strong>Relativas reducidas (participiales):</strong> The people living next door... / Anyone knowing the truth...</li>
          <li><strong>Which con oraciones completas (comentario):</strong> He failed the exam, which surprised everyone</li>
          <li><strong>What / Whatever / Whoever / Whichever / Whosever (relativos nominales):</strong> Do what you like / Whoever arrives first...</li>
          <li><strong>Nominalización verbal:</strong> The destruction of the city vs. The city was destroyed (estilo académico)</li>
          <li><strong>That vs. Which (restricciones americanas vs. británicas)</strong></li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-6-infinitivo-gerundio",
    title: "Módulo 6: Oraciones de Infinitivo y Gerundio Avanzadas",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Control absoluto de las formas no personales</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Infinitivo perfecto (to have done):</strong> He claims to have seen a UFO</li>
          <li><strong>Infinitivo continuo (to be doing):</strong> He seems to be sleeping</li>
          <li><strong>Infinitivo pasivo (to be done / to have been done):</strong> The problem remains to be solved</li>
          <li><strong>Gerundio perfecto (having done):</strong> Having finished his work, he left</li>
          <li><strong>There is no -ing:</strong> There is no knowing what he'll do</li>
          <li><strong>Verbos complejos:</strong> remember + -ing vs. to, stop + -ing vs. to, try + -ing vs. to, mean + -ing vs. to</li>
          <li><strong>Adjetivos + infinitivo:</strong> easy to please, eager to help, likely to win</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-7-conectores",
    title: "Módulo 7: Conectores y Marcadores Discursivos Sofisticados",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Cohesión textual profesional y académica</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Concesión avanzada:</strong> Much as / Try as I might / However + adjetivo (However hard I try...)</li>
          <li><strong>Condición alternativa:</strong> Whether... or..., Regardless of..., Irrespective of...</li>
          <li><strong>Propósito:</strong> so as to, in order to, lest, for fear (that), in case</li>
          <li><strong>Resultado:</strong> so + adjetivo + that, such + sustantivo + that, thereby, thus</li>
          <li><strong>Adición enfática:</strong> not only... but also (inversión), on top of that, in addition to</li>
          <li><strong>Reformulación:</strong> in other words, to put it another way, that is to say, namely</li>
          <li><strong>Conclusión inferencial:</strong> in which case, otherwise, or else</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-8-inversion-enfasis",
    title: "Módulo 8: Inversión y Énfasis Avanzados",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Estructuras formales, literarias y persuasivas</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Inversión negativa extensa:</strong> Little did I know..., Not until..., Only when..., No sooner... than...</li>
          <li><strong>Inversión con adverbios de lugar:</strong> Here comes the bus / Off we went</li>
          <li><strong>Cleft sentences avanzadas:</strong> What-clauses, All-clauses, The reason why... is because...</li>
          <li><strong>Pseudo-clefts:</strong> What I like is his attitude / A good rest was what I needed</li>
          <li><strong>Énfasis con "do":</strong> I do believe / Do come in (cordialidad formal)</li>
          <li><strong>Fronting por enfoque:</strong> A genius he is not, but hardworking he certainly is</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-9-subjuntivo",
    title: "Módulo 9: Subjuntivo y Formas Arcaicas",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Registros formales, legales y literarios</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Subjuntivo presente:</strong> It is essential that he be informed / I suggest that he go</li>
          <li><strong>Subjuntivo pasado (were en todas las personas):</strong> If I were / If he were (formal)</li>
          <li><strong>Fórmulas fijas subjuntivas:</strong> God save the Queen, Long live..., Come what may, Suffice it to say</li>
          <li><strong>Lest (para que no):</strong> He ran lest he be caught</li>
          <li><strong>Formalidad académica:</strong> Should you require..., We hereby..., herein, thereof</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-10-discurso-reportado",
    title: "Módulo 10: Discurso Reportado Complejo",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Estilo indirecto con transformaciones avanzadas</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Free indirect speech (estilo indirecto libre):</strong> She looked at him. Why was he so late? (flujo de conciencia)</li>
          <li><strong>Reporting verbs con patrones complejos:</strong> convince someone to do, warn someone against doing, accuse someone of doing</li>
          <li><strong>Transformaciones de modalidad:</strong> must → had to (obligación) / must have been (deducción)</li>
          <li><strong>Preguntas indirectas complejas:</strong> I wonder what he meant by that</li>
          <li><strong>Imperativos indirectos con matiz:</strong> He threatened to resign / She volunteered to help</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-11-participiales",
    title: "Módulo 11: Estructuras Participiales y Absolutas",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Condensación informativa estilo periodístico y académico</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Participio presente (adjetival):</strong> The man sitting over there...</li>
          <li><strong>Participio pasado (adjetival):</strong> The book published last year...</li>
          <li><strong>Dangling participles (y cómo evitarlos):</strong> Walking down the street, the building collapsed (incorrecto)</li>
          <li><strong>Nominativo absoluto (participial):</strong> The weather permitting, we'll have a picnic</li>
          <li><strong>With/Without + complemento + participio:</strong> With winter coming, we should prepare</li>
          <li><strong>Perfect participle (having done):</strong> Having been warned, he didn't go</li>
        </ul>
      </div>
    ),
  },
  {
    id: "modulo-12-funciones-b2",
    title: "Módulo 12: Funciones Comunicativas B2 (Integración)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">Dominio de registros y contextos especializados</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li><strong>Argumentación persuasiva:</strong> tesis, argumentos, contra-argumentos, conclusión con conectores sofisticados</li>
          <li><strong>Expresar duda y certeza matizada:</strong> I am under the impression that..., I am convinced that..., I am skeptical about...</li>
          <li><strong>Hipótesis complejas:</strong> suposiciones condicionales encadenadas, especulación científica</li>
          <li><strong>Registro formal (cartas, emails profesionales, quejas formales):</strong> I am writing to express my dissatisfaction with...</li>
          <li><strong>Registro informal (coloquialismos, phrasal verbs densos):</strong> sort out, figure out, chicken out, make out</li>
          <li><strong>Presentaciones académicas/profesionales:</strong> estructurar intervenciones, manejar preguntas difíciles</li>
          <li><strong>Negociación y mediación:</strong> reformular lo dicho por otros, buscar compromisos</li>
        </ul>
      </div>
    ),
  },
];

const competenciesParagraph =
  "Al terminar este nivel deberías poder participar en discusiones técnicas de tu campo con fluidez y precisión; entender conferencias y presentaciones complejas siguiendo argumentos sofisticados; leer artículos académicos, literatura contemporánea y reportajes periodísticos extensos; escribir ensayos, informes y cartas formales con estructura lógica y registro apropiado; explicar y defender tu punto de vista en debates con argumentación sólida; reconocer y usar diferentes registros (coloquial, neutral, formal, académico); entender películas sin subtítulos, series con jerga especializada y programas de radio; y reconstruir información de múltiples fuentes orales y escritas.";

const differencesB1vsB2 = [
  { aspect: "Complejidad gramatical", b1: "Estructuras estándar correctas", b2: "Matices, excepciones y registros formales" },
  { aspect: "Vocabulario", b1: "2,500-3,000 palabras", b2: "4,000-5,000 palabras + colocaciones" },
  { aspect: "Registro", b1: "Básico-neutral", b2: "Consciente y adaptable (formal/coloquial)" },
  { aspect: "Argumentación", b1: "Opinión + 2-3 razones", b2: "Tesis desarrollada con contra-argumentos" },
  { aspect: "Cohesión", b1: "Conectores básicos", b2: "Marcadores discursivos sofisticados" },
  { aspect: "Autonomía", b1: "Situaciones familiares", b2: "Contextos desconocidos y abstractos" },
  { aspect: "Metalingüístico", b1: "Pocos errores graves", b2: "Control consciente del estilo" },
];

const notInB2 = [
  "Complejidad sintáctica extrema (oraciones de párrafo completo)",
  "Idioms arcaicos y dialectales muy marcados",
  "Juegos de palabras complejos y humor basado en fonética sutil",
  "Variaciones dialectales profundas (Scots, AAVE, Indian English formal)",
  "Registros extremadamente coloquiales o técnicos sin contexto",
];

export function B1() {
  return (
    <section id="b1-to-b2" className="relative w-full bg-background py-16 md:py-24 scroll-mt-20">
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
            B1 to B2
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Tiempos compuestos avanzados, condicionales e hipótesis, modales y perifrasis, pasiva y causativos, relativas y nominales, infinitivo y gerundio avanzados, conectores sofisticados, subjuntivo y funciones comunicativas B2.
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

        {/* Competencias B2 - párrafo */}
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
            Competencias B2
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {competenciesParagraph}
          </p>
        </motion.div>

        {/* Diferencias B1 vs. B2 - minimalista */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-sm font-medium text-citrus-zest">
            Diferencias clave B1 vs. B2
          </h3>
          <div className="text-sm text-muted-foreground space-y-2">
            {differencesB1vsB2.map((row, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:gap-4 gap-0.5 border-b border-border/50 pb-2 last:border-0 last:pb-0">
                <span className="font-medium text-foreground shrink-0 sm:w-40">{row.aspect}</span>
                <span className="sm:flex-1"><span className="text-foreground/80">B1:</span> {row.b1}</span>
                <span className="sm:flex-1"><span className="text-foreground/80">B2:</span> {row.b2}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lo que NO está en B2 - minimalista */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeIn}
          custom={0}
        >
          <h3 className="text-sm font-medium text-citrus-zest">
            Lo que no está en B2 (viene en C1)
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {notInB2.join(" · ")}
          </p>
        </motion.div>
      </MaxWidth>
    </section>
  );
}
