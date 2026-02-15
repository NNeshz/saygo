"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import {
  IconExternalLink,
  IconBook2,
  IconBook,
  IconSpeakerphone,
  IconUsers,
  IconWorld,
  IconMoodSmile,
  IconCalendar,
  IconHeart,
  IconHome,
  IconMessageCircle,
  IconClock,
  IconHistory,
  IconMapPin,
  IconClipboardCheck,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@saygo/ui/src/components/accordion";
import { Badge } from "@saygo/ui/src/components/badge";
import { getZeroLessonSlugs } from "@saygo/web/modules/landing/classes/zero/lessons";

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
  fundamentos: IconSpeakerphone,
  "primer-contacto": IconUsers,
  "informacion-personal": IconMoodSmile,
  "mundo-alrededor": IconWorld,
  "descripcion-fisica": IconMoodSmile,
  "rutinas-diarias": IconCalendar,
  "habilidades-gustos": IconHeart,
  "entorno-inmediato": IconHome,
  "interaccion-social": IconMessageCircle,
  "tiempo-planificacion": IconClock,
  "pasado-simple": IconHistory,
  integracion: IconMapPin,
  evaluacion: IconClipboardCheck,
};

const sections = [
  {
    id: "fundamentos",
    title: "Fundamentos (Fonética y Escritura)",
    notionUrl: null,
    content: (
      <ul className="space-y-2 text-foreground/90">
        <li>
          El alfabeto fonético (sonidos, no nombres de letras): /æ/, /ɪ/, /ʌ/,
          /θ/, /ð/, /ʃ/, /ʒ/, /ŋ/
        </li>
        <li>
          Diferencia entre sonidos cortos y largos: ship vs. sheep, bit vs. beat
        </li>
        <li>Ortografía básica: mayúsculas/minúsculas, puntuación básica</li>
        <li className="font-medium text-foreground">
          No gramática todavía — solo reconocimiento auditivo y producción
          fonética
        </li>
      </ul>
    ),
  },
  {
    id: "primer-contacto",
    title: "Primer Contacto (Funciones Sociales)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Vocabulario: 50 palabras base
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Saludos formales e informales:</strong> Hello, Hi, Good
            morning/afternoon/evening, Goodbye, See you
          </li>
          <li>
            <strong>Presentaciones básicas:</strong> My name is... / I'm... /
            Nice to meet you
          </li>
          <li>
            <strong>Expresiones de cortesía:</strong> Please, Thank you, Sorry,
            Excuse me
          </li>
          <li>
            <strong>El verbo "To Be" (presente):</strong> I am, You are,
            He/She/It is (solo afirmativo por ahora)
          </li>
          <li>
            <strong>Pronombres personales sujeto:</strong> I, you, he, she, it,
            we, they
          </li>
          <li>
            <strong>Países y nacionalidades básicas</strong>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "informacion-personal",
    title: "Información Personal (Ser/Estar)",
    notionUrl:
      "https://www.notion.so/Informaci-n-Personal-2fd6ebd5e916808a9101c3aa3c5505fa?pvs=21",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Dominio completo del verbo to be
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>To Be negativo:</strong> I'm not, You aren't, He isn't
          </li>
          <li>
            <strong>To Be interrogativo:</strong> Am I...? Are you...? Is he...?
          </li>
          <li>
            <strong>Respuestas cortas:</strong> Yes, I am / No, I'm not
          </li>
          <li>
            <strong>Vocabulario:</strong> Números 0-100, edades, profesiones
            básicas, familia cercana (mother, father, sister, brother)
          </li>
          <li>
            <strong>Estructura:</strong> "I am +
            nombre/edad/profesión/nacionalidad"
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "mundo-alrededor",
    title: "El Mundo a Tu Alrededor (Sustantivos y Artículos)",
    notionUrl:
      "https://www.notion.so/El-Mundo-a-tu-alrededor-2fd6ebd5e91680479920ca50d37e4922?pvs=21",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="italic text-foreground/80">
          Construcción de oraciones simples
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Artículos definidos e indefinidos:</strong> a, an, the
            (reglas básicas de uso)
          </li>
          <li>
            <strong>Sustantivos contables e incontables</strong> (concepto
            introductorio)
          </li>
          <li>
            <strong>Pluralización:</strong> -s, -es, -ies (reglas básicas)
          </li>
          <li>
            <strong>Demostrativos básicos:</strong> this, that, these, those
          </li>
          <li>
            <strong>Vocabulario temático:</strong> Objetos del aula (book, pen,
            table, chair), colores básicos, preposiciones de lugar: in, on,
            under, next to, behind, in front of
          </li>
          <li>
            <strong>Estructura:</strong> "This is a..." / "The book is on the
            table"
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "descripcion-fisica",
    title: "Descripción Física y Características",
    notionUrl:
      "https://www.notion.so/Descripci-n-F-sica-y-Caracter-sticas-2fd6ebd5e91680c5b4a6f93d20c1edf8?pvs=21",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Adjetivos y concordancias básicas
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Adjetivos de apariencia:</strong> tall, short, fat, thin,
            young, old, long, short (hair)
          </li>
          <li>
            <strong>Adjetivos de personalidad básicos:</strong> nice, good, bad,
            happy, sad, tired
          </li>
          <li>
            <strong>Posición del adjetivo:</strong> antes del sustantivo (a big
            house)
          </li>
          <li>
            <strong>Preguntas con "To Be":</strong> Is he tall? Are they happy?
          </li>
          <li>
            <strong>Vocabulario:</strong> Partes del cuerpo básico (head, eyes,
            hands, legs), ropa básica (shirt, pants, shoes, dress)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "rutina-diaria",
    title: "Rutinas Diarias (Presente Simple)",
    notionUrl:
      "https://www.notion.so/Rutinas-Diarias-Presente-Simple-3036ebd5e91680088bebc7f3d4052213?pvs=21",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          El segundo pilar gramatical
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Verbos de acción básicos:</strong> get up, eat, drink, go,
            work, study, sleep, watch, read, write
          </li>
          <li>
            <strong>Presente Simple afirmativo:</strong> I/You/We/They vs.
            He/She/It — I work / He works
          </li>
          <li>
            <strong>Marcadores de frecuencia:</strong> always, usually, often,
            sometimes, never
          </li>
          <li>
            <strong>Expresiones de tiempo básicas:</strong> in the morning, at
            night, on Monday, every day
          </li>
          <li>
            <strong>Vocabulario:</strong> Horas (o'clock, half past), días de la
            semana, actividades diarias, comidas (breakfast, lunch, dinner)
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "habilidades-gustos",
    title: "Habilidades y Gustos (Can / Like)",
    notionUrl:
      "https://www.notion.so/Habilidades-y-Gustos-Can-Like-3036ebd5e9168093ba86ddac75a5d147?pvs=21",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Expresiones de capacidades y preferencias
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Modal "Can" (habilidad):</strong> I can swim / Can you...?
            Yes, I can / No, I can't
          </li>
          <li>
            <strong>Verbo "Like" + sustantivo/infinitivo:</strong> I like pizza
            / I like to swim
          </li>
          <li>
            <strong>Preferencias básicas:</strong> I love, I like, I don't like,
            I hate
          </li>
          <li>
            <strong>Vocabulario:</strong> Deportes, hobbies, actividades de
            ocio, verbos de acción adicionales
          </li>
          <li>
            <strong>Preguntas:</strong> What do you like? Can you play the
            guitar?
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "entorno-inmediato",
    title: "El Entorno Inmediato (Hay/Tener)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">Existencia y posesión</p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>There is / There are:</strong> afirmativo, negativo e
            interrogativo
          </li>
          <li>
            <strong>Verbo "Have got" (posesión):</strong> I have got / Have you
            got...?
          </li>
          <li>
            <strong>Preposiciones de lugar avanzadas:</strong> between, near,
            above, below
          </li>
          <li>
            <strong>Vocabulario:</strong> La casa (rooms, furniture), la ciudad
            (street, shop, bank, hospital, restaurant), medios de transporte
            básicos
          </li>
          <li>
            <strong>Estructura:</strong> "There is a book on the table" / "I
            have got two sisters"
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "interaccion-social",
    title: "Interacción Social Básica (Preguntas WH-)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Comunicación interrogativa completa
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Preguntas WH- básicas:</strong> What, Where, When, Who, Why,
            How
          </li>
          <li>
            <strong>Estructura:</strong> Wh- + auxiliar (do/does) + sujeto +
            verbo
          </li>
          <li>
            <strong>How much / How many:</strong> cantidades básicas
          </li>
          <li>
            <strong>How + adjetivo:</strong> How old, How tall, How big
          </li>
          <li>
            <strong>Vocabulario:</strong> Bebidas, comidas básicas, compras
            simples (How much is it?), números hasta 1000
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "tiempo-planificacion",
    title: "Tiempo y Planificación",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Futuro próximo y presente con valor futuro
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Presente Continuo para futuro:</strong> I'm meeting John
            tomorrow (planes fijos)
          </li>
          <li>
            <strong>"Going to" futuro:</strong> I'm going to visit...
            (intenciones)
          </li>
          <li>
            <strong>"Will" básico para ofrecimientos:</strong> I'll help you
          </li>
          <li>
            <strong>Vocabulario:</strong> Meses, estaciones, expresiones de
            tiempo futuro (tomorrow, next week, tonight), clima básico (sunny,
            rainy, cold, hot)
          </li>
          <li>
            <strong>Estructura:</strong> "What are you going to do?"
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "pasado-simple",
    title: "Pasado Simple (To Be)",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Introducción al tiempo pasado (solo To Be)
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Was / Were:</strong> I was, You were, He was
          </li>
          <li>
            <strong>Pasado de To Be negativo e interrogativo</strong>
          </li>
          <li>
            <strong>Contraste básico presente/pasado:</strong> I am happy today
            / I was sad yesterday
          </li>
          <li>
            <strong>Time markers del pasado:</strong> yesterday, last week, last
            year, ago
          </li>
          <li>
            <strong>Vocabulario:</strong> Adjetivos de estado emocional en
            contexto pasado
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "integracion",
    title: "Integración y Funciones Comunicativas",
    notionUrl: null,
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className="font-medium text-foreground">
          Poner todo en práctica, sin nuevas gramáticas complejas
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Pedir y dar direcciones básicas:</strong> Go straight, Turn
            left/right, It's on the...
          </li>
          <li>
            <strong>Compras y restaurante:</strong> Can I have...? / I'd like...
            / How much is it?
          </li>
          <li>
            <strong>Teléfono básico:</strong> Can I speak to...? / This is...
            speaking / Wrong number
          </li>
          <li>Describir tu ciudad/barrio</li>
          <li>Presentar a otras personas</li>
          <li>Hablar de tu familia (árbol genealógico básico)</li>
        </ul>
      </div>
    ),
  },
  {
    id: "evaluacion",
    title: "Evaluación y Consolidación A1",
    notionUrl: null,
    content: (
      <ul className="space-y-2 text-foreground/90">
        <li>Repaso integrado de todas las estructuras</li>
        <li>
          <strong>Listening:</strong> Comprensión de instrucciones simples y
          diálogos lentos
        </li>
        <li>
          <strong>Speaking:</strong> Presentación personal de 2-3 minutos
        </li>
        <li>
          <strong>Reading:</strong> Textos de 50-80 palabras (cartas, emails,
          anuncios simples)
        </li>
        <li>
          <strong>Writing:</strong> Escribir una postal o email simple (50
          palabras)
        </li>
      </ul>
    ),
  },
];

const competenciesParagraph =
  "Al terminar este temario deberías poder presentarte y presentar a otros (nombre, edad, nacionalidad, profesión), describir tu ciudad y tu casa, hablar de tu rutina diaria y la de otros, pedir comida en un restaurante y comprar en una tienda, dar y pedir direcciones básicas, hablar del clima y de planes inmediatos, y hacer preguntas básicas sobre información personal.";

export function Zero() {
  return (
    <section
      id="zero-to-a1"
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
            Zero to A1
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Aquí conocerás los fundamentos del inglés para alcanzar el nivel A1:
            fonética, funciones sociales, gramática esencial y las competencias
            para comunicarte en situaciones cotidianas.
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
                      {getZeroLessonSlugs().includes(section.id) && (
                        <Link
                          href={`/classes/zero/${section.id}`}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-citrus-zest hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <IconBook className="size-4" />
                          Ver clase
                        </Link>
                      )}
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

        {/* Competencias A1 - párrafo */}
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
            Competencias A1
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {competenciesParagraph}
          </p>
        </motion.div>
      </MaxWidth>
    </section>
  );
}
