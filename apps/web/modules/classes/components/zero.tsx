"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MaxWidth } from "@saygo/web/modules/global/components/max-widht";
import {
  IconBook2,
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
import { buttonVariants } from "@saygo/ui/src/components/button";
import { cn } from "@saygo/ui/src/lib/utils";
import { ZERO_SECTION_LESSON_SLUG } from "@saygo/web/modules/classes/lib/zero-lesson-slugs";

const CLASSES_LEVEL_ZERO = "zero" as const;

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

/** Intro bajo el título del acordeón: siempre en cursiva para consistencia visual */
const sub = "text-sm italic text-muted-foreground leading-relaxed";

const sectionIcons: Record<string, React.ElementType> = {
  fundamentos: IconSpeakerphone,
  "primer-contacto": IconUsers,
  "informacion-personal": IconMoodSmile,
  "descripcion-fisica": IconMoodSmile,
  "mundo-alrededor": IconWorld,
  "entorno-existencia": IconHome,
  "posesion-familia": IconHeart,
  "rutina-diaria": IconCalendar,
  "habitos-preguntas": IconMessageCircle,
  "habilidades-gustos": IconHeart,
  "pronombres-objeto": IconMoodSmile,
  "interaccion-social": IconMessageCircle,
  "tiempo-planificacion": IconClock,
  "pasado-simple": IconHistory,
  integracion: IconMapPin,
  evaluacion: IconClipboardCheck,
};

type ZeroSection = {
  id: string;
  title: string;
  /** Slug en `/classes/zero/[slug]` si existe `.md` en `md/zero/` */
  lessonSlug?: string;
  content: ReactNode;
};

const sections: ZeroSection[] = [
  {
    id: "fundamentos",
    title: "El Alfabeto Sonoro",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Primero oyes y pronuncias bien; la gramática detallada viene después.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Vocales que marcan diferencia:</strong> entrena pares como
            cat/cup, sit/sheep, book/food y las vocales largas en car, door,
            bird; incorpora la schwa (la vocal &quot;débil&quot; de sobre,
            banana, teacher).
          </li>
          <li>
            <strong>Consonantes que suelen trabarse:</strong> think/this (th
            sorda y sonora), shop, television, sing (ng), west/vest (w vs v).
          </li>
          <li>
            <strong>Ritmo y finales:</strong> nota la diferencia entre sonidos
            cortos y largos; en palabras de dos sílabas, aprende a acentuar la
            sílaba fuerte; al final de palabra, la -s puede sonar de tres
            maneras según el caso (cats, dogs, buses).
          </li>
          <li>
            <strong>Deletrear:</strong> memoriza las letras para responder a
            &quot;How do you spell…?&quot; en clase o en la calle.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "primer-contacto",
    title: "Primer Contacto",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Tu primera estructura: quién eres y cómo saludas con el verbo to be en
          afirmativo.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Quién hace la acción (sujeto):</strong> I, you, he, she, it,
            we, they — memorízalos hasta que salgan solos.
          </li>
          <li>
            <strong>To be en afirmativo:</strong> I am, you are, he/she/it is,
            we are, they are; practica también las formas cortas (I&apos;m,
            you&apos;re…) frente a la forma completa en escritura formal.
          </li>
          <li>
            <strong>Saludos y despedidas:</strong> de Hello y Good morning a
            Good night, Bye, See you later, Nice to meet you.
          </li>
          <li>
            <strong>Presentarte y decir de dónde eres:</strong> My name is… /
            I&apos;m… / I am from… / I am + nacionalidad.
          </li>
          <li>
            <strong>Cortesía básica:</strong> please, thank you, sorry, excuse me.
          </li>
          <li>
            <strong>Números del 0 al 20</strong> para edades y cantidades
            sencillas.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "informacion-personal",
    title: "Información Personal",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Cierras el verbo to be: negación, preguntas, posesivos y primeras
          preguntas con palabras wh-.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Decir que algo no es así:</strong> I&apos;m not, you
            aren&apos;t, he/she/it isn&apos;t, we aren&apos;t, they aren&apos;t.
          </li>
          <li>
            <strong>Preguntas de sí o no con to be</strong> y respuestas cortas
            claras: Am I…? Are you…? Is he…? — Yes, I am / No, I&apos;m not;
            Yes, he is / No, he isn&apos;t.
          </li>
          <li>
            <strong>Lo &quot;mío&quot; y lo &quot;suyo&quot;:</strong> my, your,
            his, her, its, our, their — enlazados a nombre, libro, coche, etc.
          </li>
          <li>
            <strong>Números del 20 al 100</strong> para hablar de edades y
            cantidades un poco mayores.
          </li>
          <li>
            <strong>Preguntas con to be:</strong> qué es esto, de dónde eres,
            quién es alguien, cómo estás, cuántos años tienes o tienen, qué color
            prefieres entre dos opciones.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "descripcion-fisica",
    title: "Descripción Física y Espacial",
    lessonSlug: ZERO_SECTION_LESSON_SLUG["descripcion-fisica"],
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Describes personas y objetos: cómo son, de qué color, dónde están y
          cómo preguntarlo con how + adjetivo.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Empezar con &quot;tener&quot;:</strong> have/has para
            atributos (por ejemplo, ojos, pelo) además de lo que ya sabes con
            to be.
          </li>
          <li>
            <strong>Talla y edad aparente:</strong> alto/bajo, delgado/grueso,
            joven/mayor y vocabulario de peso y complexión.
          </li>
          <li>
            <strong>Cuerpo:</strong> de la cabeza a los pies (hair, eyes, nose,
            arms, legs, etc.).
          </li>
          <li>
            <strong>Colores:</strong> paleta básica para describir ropa, objetos
            y detalles físicos.
          </li>
          <li>
            <strong>Esto aquí, eso allí:</strong> this/that (una cosa) y
            these/those (varias), cerca o lejos del hablante.
          </li>
          <li>
            <strong>Dónde está cada cosa:</strong> in, on, under, next to,
            behind, in front of, between.
          </li>
          <li>
            <strong>Preguntas con how + adjetivo:</strong> cuán alto es alguien,
            cuán grande es tu casa, cuántos años tiene tu hermano (repaso).
          </li>
          <li>
            <strong>Mucho vs demasiado:</strong> very refuerza sin problema; too
            implica &quot;demasiado para lo que quieres&quot; (demasiado caro,
            demasiado calor).
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "mundo-alrededor",
    title: "El Entorno y Existencia",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Pasas de una cosa a varias y eliges bien a / an / the; vocabulario
          del aula y del hogar.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>De singular a plural:</strong> aprende las reglas para
            formar el plural (y memoriza las formas que no siguen regla
            fija — men, women, children, people, feet, teeth…).
          </li>
          <li>
            <strong>Una cosa nueva o una cosa conocida:</strong> a y an según el
            sonido inicial; the cuando hablas de algo ya identificado o único.
          </li>
          <li>
            <strong>Contables e incontables:</strong> primera idea de qué puedes
            contar uno a uno y qué se dice como masa (water, time).
          </li>
          <li>
            <strong>Objetos y espacios cotidianos:</strong> libro, bolígrafo,
            mesa, silla, puerta, ventana, móvil, ordenador, escritorio,
            habitación…
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "entorno-existencia",
    title: "Existencia",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Dices si hay o no hay algo en un sitio, y de quién es algo con la
          forma en &apos;s.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Hay / no hay:</strong> there is y there are en frases
            afirmativas, negativas y preguntas; respuestas cortas naturales.
          </li>
          <li>
            <strong>Cuando &quot;no hay ninguno&quot; o preguntas abiertas:</strong>
            uso de any en negativas y preguntas (Are there any…?).
          </li>
          <li>
            <strong>De quién es:</strong> John&apos;s car, my mother&apos;s
            sister — comparado con his car / her sister usando posesivos.
          </li>
          <li>
            <strong>Situar en el espacio</strong> (repaso): between, next to, in
            front of.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "posesion-familia",
    title: "Posesión y Familia",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Hablas de lo que tienes o no tienes (familia y cosas) con have got,
          sin confundirlo con to be.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Tengo / tienes:</strong> I&apos;ve got, you&apos;ve got, he/she
            has got, we&apos;ve got, they&apos;ve got.
          </li>
          <li>
            <strong>No tengo y preguntas de sí o no:</strong> I haven&apos;t
            got; Have you got…? Has he got…? — Yes, I have / No, he hasn&apos;t.
          </li>
          <li>
            <strong>Dos formas de describir:</strong> I am tall (cómo eres) frente
            a I have got blue eyes (qué tienes).
          </li>
          <li>
            <strong>Árbol familiar:</strong> padres, hermanos, abuelos, hijos,
            pareja, bebé.
          </li>
          <li>
            <strong>Frases modelo:</strong> hablar de hermanos que sí o no
            tienes y de lo que tiene la familia.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "rutina-diaria",
    title: "Rutinas Diarias",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Segundo pilar gramatical: lo que haces cada día, con el presente
          simple solo en afirmativo.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Tu día tipo:</strong> levantarte, desayunar, comer, trabajar,
            estudiar, ver la tele, ir a la cama, caminar, correr…
          </li>
          <li>
            <strong>Forma del presente:</strong> yo/tú/nosotros/ellos con el
            verbo en base; he/she/it con -s / -es / -ies según la palabra.
          </li>
          <li>
            <strong>Con qué frecuencia:</strong> always, usually, often,
            sometimes, never — colocados antes del verbo principal (y después de
            to be si la frase lleva to be).
          </li>
          <li>
            <strong>Momentos del día y la semana:</strong> mañana, tarde, noche,
            cada día, los lunes…; decir la hora (en punto, y media, cuarto).
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "habitos-preguntas",
    title: "Hábitos y Preguntas",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Completas el presente simple: negación, preguntas con do/does y
          respuestas con palabras wh-.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Decir que no haces algo:</strong> don&apos;t y doesn&apos;t
            seguidos del infinitivo del verbo.
          </li>
          <li>
            <strong>Preguntas de sí o no con acciones:</strong> Do you…? Does
            he…? — Yes, I do / No, he doesn&apos;t.
          </li>
          <li>
            <strong>Preguntas de información:</strong> a qué te dedicas, dónde
            trabaja alguien, a qué hora te levantas, por qué estudias inglés y
            respuestas con because.
          </li>
          <li>
            <strong>Cómo te desplazas y cuántos:</strong> How do you go…? (by
            bus, on foot); How many + sustantivo plural.
          </li>
          <li>
            <strong>Cada cuánto:</strong> How often…? with answers like once a
            week, twice a month, every day, never.
          </li>
          <li>
            <strong>Ocio:</strong> deportes, música, videojuegos, nadar,
            bailar, cantar.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "habilidades-gustos",
    title: "Capacidades y Preferencias",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Expresas lo que sabes hacer y lo que te gusta o apetece en el momento.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Habilidad:</strong> can / can&apos;t en afirmación, negación
            y pregunta, con respuestas cortas.
          </li>
          <li>
            <strong>Gustos:</strong> sustantivo o verbo en -ing (I like swimming);
            escala de love, like, don&apos;t like, hate.
          </li>
          <li>
            <strong>Quiero ahora vs me gusta en general:</strong> I&apos;d like a
            coffee frente a I like coffee.
          </li>
          <li>
            <strong>Temas útiles:</strong> deportes, instrumentos (play the
            guitar), idiomas (speak English).
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "pronombres-objeto",
    title: "Pronombres Objeto",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Sustituyes a la persona por me, him, her… tras verbos y
          preposiciones; y respondes de acuerdo con me too / me neither.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Quién recibe la acción:</strong> I → me, he → him, she → her,
            we → us, they → them (you e it se repiten en forma objeto).
          </li>
          <li>
            <strong>Tras verbos y preposiciones:</strong> I like him; with me;
            next to them.
          </li>
          <li>
            <strong>Intercambiar papeles:</strong> He loves her / She loves him
            para fijar sujeto vs objeto.
          </li>
          <li>
            <strong>Estoy de acuerdo:</strong> me too / I do too (afirmación);
            me neither / I don&apos;t either (negación).
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "interaccion-social",
    title: "Interacción Social Completa",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Mezclas preguntas más finas con have got, can y el resto de lo que ya
          dominas.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Cantidad y precio:</strong> how much; who frente a whom en
            registro formal; which cuando eliges entre opciones concretas.
          </li>
          <li>
            <strong>Con tener y poder:</strong> cuántos hermanos tienes; qué
            sabes hacer.
          </li>
          <li>
            <strong>Combinar estructuras:</strong> qué le gusta a alguien; dónde
            puedes comprar esto.
          </li>
          <li>
            <strong>Propuestas:</strong> Let&apos;s… / Let&apos;s not… para
            sugerir planes sin complicar la frase.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "tiempo-planificacion",
    title: "Tiempo y Planificación",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Hablas de planes: lo que ya está cerrado, lo que piensas hacer y lo
          que decides en el momento.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Cita ya fijada:</strong> presente continuo con tiempo futuro
            (I&apos;m meeting… tomorrow).
          </li>
          <li>
            <strong>Intención y lo que ves venir:</strong> going to para planes y
            predicciones con pistas.
          </li>
          <li>
            <strong>Decisión al instante o promesa:</strong> will (I&apos;ll
            get it, I&apos;ll help you).
          </li>
          <li>
            <strong>Qué usar cada vez:</strong> idea previa (going to) frente a
            hora acordada (presente continuo) frente a reacción ahora (will).
          </li>
          <li>
            <strong>Expresiones de tiempo:</strong> mañana, esta noche, la próxima
            semana, dentro de dos días, pasado mañana…
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "pasado-simple",
    title: "Pasado Simple",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Primer pasado con el verbo que ya dominas: was / were para situaciones
          y descripciones.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Formas:</strong> was y were en afirmación, negación,
            pregunta y respuestas cortas.
          </li>
          <li>
            <strong>Cuándo pasó:</strong> yesterday, last week, ago, when I was
            five, in 2020…
          </li>
          <li>
            <strong>Ahora y antes:</strong> contrastar I am happy con I was sad;
            describir un hotel o el tiempo en pasado.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "integracion",
    title: "Consolidación y Funciones Comunicativas",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Ensayas situaciones reales sin añadir gramática nueva: calle, tienda,
          teléfono, urgencias.
        </p>
        <ul className="space-y-1.5 list-disc list-inside">
          <li>
            <strong>Orientarte:</strong> seguir recto, girar, a la izquierda o
            derecha, enfrente, en el semáforo.
          </li>
          <li>
            <strong>Comprar y comer fuera:</strong> precio, pedir con I&apos;d
            like / Can I have…, pedir la cuenta.
          </li>
          <li>
            <strong>Llamada telefónica:</strong> decir quién eres, pedir a
            alguien, volver a llamar.
          </li>
          <li>
            <strong>Tu barrio y tu gente:</strong> describir el entorno, presentar
            a un amigo; repasar deletreo, números, fechas y frases de emergencia.
          </li>
          <li>
            <strong>Mandar y prohibir con cortesía:</strong> abre el libro,
            escucha, no toques, please sit down — en clase y en situaciones
            urgentes.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "evaluacion",
    title: "Evaluación y Consolidación A1",
    content: (
      <div className="space-y-3 text-foreground/90">
        <p className={sub}>
          Compruebas lo que ya puedes hacer al cerrar el nivel, en las cuatro
          destrezas.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <strong>Repaso global</strong> de las estructuras del temario.
          </li>
          <li>
            <strong>Listening:</strong> seguir instrucciones sencillas y diálogos
            a ritmo pausado.
          </li>
          <li>
            <strong>Speaking:</strong> monólogo corto de presentación personal
            (unos 2–3 minutos).
          </li>
          <li>
            <strong>Reading:</strong> textos breves (50–80 palabras): cartas,
            correos, anuncios.
          </li>
          <li>
            <strong>Writing:</strong> postal o correo muy simple (alrededor de 50
            palabras).
          </li>
        </ul>
      </div>
    ),
  },
];

export function ClassesLevelZero() {
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
                      <div className="text-sm sm:text-base leading-relaxed">
                        {section.content}
                      </div>
                      {section.lessonSlug ? (
                        <Link
                          href={`/classes/${CLASSES_LEVEL_ZERO}/${section.lessonSlug}`}
                          className={cn(
                            buttonVariants({
                              size: "lg",
                            }),
                            "flex w-full justify-center no-underline",
                          )}
                        >
                          Ver clase
                        </Link>
                      ) : null}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </MaxWidth>
    </section>
  );
}