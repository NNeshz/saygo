import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@saygo/ui/components/button"

export const metadata: Metadata = {
  title: "SayGo — Escuela de inglés",
  description: "Aprende inglés desde cero, paso a paso. Currículo estructurado de A0 a B2.",
}

function HeroVisual() {
  return (
    <div className="absolute inset-0">
      <svg className="h-full w-full" aria-hidden="true">
        <defs>
          <pattern
            id="hero-dots"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.5" fill="currentColor" className="text-foreground/[0.18]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[18rem] font-bold leading-none select-none text-foreground/[0.035]">
          SG
        </span>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border min-h-[calc(100vh-3.5rem)] lg:min-h-0">
      <div className="flex flex-col justify-center px-8 lg:px-12 py-32 lg:py-44 border-b lg:border-b-0 lg:border-r border-border">
        <h1 className="text-4xl lg:text-5xl xl:text-[3.75rem] font-bold leading-[1.05] tracking-tight mb-8">
          Inglés que
          <br />
          se practica,
          <br />
          <span className="text-muted-foreground">no que se memoriza.</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="lg" className="" asChild>
            <Link href="/docs">Empezar ahora →</Link>
          </Button>
          <Button variant="ghost" size="lg" className="" asChild>
            <Link href="#niveles">Ver niveles</Link>
          </Button>
        </div>
      </div>
      <div className="relative overflow-hidden min-h-[300px] lg:min-h-0">
        <HeroVisual />
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
      <div className="px-8 lg:px-12 py-8 border-b lg:border-b-0 lg:border-r border-border flex items-center">
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
          SayGo ayuda a alumnos a construir inglés real — estructurado por
          niveles y diseñado para que practiques desde el primer módulo.
        </p>
      </div>
      <div className="grid grid-cols-3 divide-x divide-border">
        {[
          { label: "Niveles", value: "A0 – B2" },
          { label: "Módulos", value: "40+" },
          { label: "Costo", value: "Gratis" },
        ].map(({ label, value }) => (
          <div key={label} className="px-6 py-8">
            <p className="text-xs text-muted-foreground mb-2">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      title: "Aprende con contexto →",
      body: "Vocabulario y gramática siempre en situaciones reales: en el mercado, en el trabajo, en conversaciones del día a día.",
    },
    {
      title: "Practica desde el día uno →",
      body: "Ejercicios hablados, escritos y de comprensión en cada módulo. No hay lección sin práctica activa.",
    },
    {
      title: "Sin relleno, sin repetición →",
      body: "Solo el contenido necesario para avanzar al siguiente nivel. Progresión clara y medible de A0 hasta B2.",
    },
  ]

  return (
    <section className="border-b border-border">
      <div className="px-8 lg:px-12 py-12">
        <h2 className="text-3xl lg:text-4xl font-bold max-w-lg leading-tight">
          Diseñado para aprender, no para memorizar
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border divide-y md:divide-y-0 md:divide-x divide-border">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col justify-between gap-20 p-8 bg-card/40"
          >
            <p className="font-semibold text-[0.9375rem]">{f.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function StepsSection() {
  const steps = [
    {
      n: "1",
      title: "Elige tu nivel",
      desc: "Desde A0 (absoluto principiante) hasta B2. Si ya tienes bases, usa la evaluación diagnóstica para ubicarte.",
    },
    {
      n: "2",
      title: "Sigue los módulos",
      desc: "Cada módulo cubre vocabulario, gramática y pronunciación con ejemplos reales y contexto.",
    },
    {
      n: "3",
      title: "Practica los ejercicios",
      desc: "Cada lección termina con actividades de roleplay, escritura y comprensión auditiva.",
    },
    {
      n: "4",
      title: "Avanza de nivel",
      desc: "Al completar un nivel hay una evaluación corta. Al pasarla, desbloqueas el siguiente.",
    },
  ]

  return (
    <section className="border-b border-border" id="niveles">
      <div className="px-8 lg:px-12 py-12">
        <h2 className="text-3xl lg:text-4xl font-bold">Cómo funciona SayGo</h2>
      </div>
      <div className="border-t border-border">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className={`grid grid-cols-[3rem_1fr] lg:grid-cols-[3rem_1fr_1fr] items-start gap-x-6 gap-y-2 px-8 lg:px-12 py-6 ${
              i < steps.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="flex size-10 shrink-0 items-center justify-center border border-border text-sm text-muted-foreground">
              {s.n}
            </div>
            <p className="font-semibold text-[0.9375rem] self-center">{s.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed col-start-2 lg:col-start-3">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="px-8 lg:px-12 py-10 border-t border-border">
        <Button variant="outline" size="lg" className="" asChild>
          <Link href="/docs">Ir al currículo →</Link>
        </Button>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Estudiante A1, CDMX",
      quote:
        "SayGo me ayudó a dejar de memorizar listas y empezar a hablar. En seis semanas ya puedo tener conversaciones básicas.",
    },
    {
      name: "Carlos Ruiz",
      role: "Estudiante A2, Monterrey",
      quote:
        "Nunca pensé que entendería películas sin subtítulos. El método de SayGo se siente muy diferente a otras apps.",
    },
    {
      name: "Sofía López",
      role: "Estudiante B1, Guadalajara",
      quote:
        "Los ejercicios son los más útiles que he encontrado. Todo tiene contexto real, nada se siente artificial.",
    },
  ]

  return (
    <section className="border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-border">
        <div className="px-8 lg:px-12 py-12 border-b lg:border-b-0 lg:border-r border-border">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Alumnos que ya avanzan con SayGo
          </h2>
          <p className="text-muted-foreground text-sm mt-4 max-w-sm leading-relaxed">
            Estudiantes de secundaria, preparatoria y adultos que están
            construyendo inglés real, módulo a módulo.
          </p>
          <div className="mt-8">
            <Button
              variant="outline"
              size="sm"
              className=""
              asChild
            >
              <Link href="/docs">Ver las clases →</Link>
            </Button>
          </div>
        </div>
        <div className="px-8 lg:px-12 py-12 flex items-center">
          <div className="grid grid-cols-3 gap-4 w-full">
            {[
              { icon: "✦", label: "Aula estructurada" },
              { icon: "⬡", label: "Contexto real" },
              { icon: "◈", label: "Ejercicios activos" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="aspect-square flex flex-col items-center justify-center gap-3 bg-card rounded-xl border border-border"
              >
                <span className="text-2xl text-muted-foreground">{icon}</span>
                <span className="text-xs text-muted-foreground text-center px-2 leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="p-8 flex flex-col justify-between gap-10 bg-card/30"
          >
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      q: "¿Necesito saber inglés para empezar?",
      a: "No. El nivel A0 está diseñado para personas sin ninguna base. Comenzamos desde el alfabeto y la fonética básica.",
    },
    {
      q: "¿Cuánto tiempo debo dedicar por día?",
      a: "Con 30–45 minutos diarios puedes avanzar un módulo por semana. El contenido está pensado para sesiones cortas y efectivas.",
    },
    {
      q: "¿Es completamente gratuito?",
      a: "Sí. Todo el contenido está libre y sin registro. No hay paywalls ni subscripciones.",
    },
    {
      q: "¿Qué pasa si ya tengo conocimientos básicos?",
      a: "Puedes empezar directamente en A1 o A2. También tenemos una evaluación diagnóstica para ubicarte en el nivel correcto.",
    },
    {
      q: "¿Hay clases en vivo?",
      a: "El contenido actual es asincrónico. Las clases en vivo y sesiones de conversación están en desarrollo.",
    },
    {
      q: "¿Puedo descargar los materiales?",
      a: "Sí. Cada lección tiene un botón para exportar en PDF, listo para imprimir o guardar en tu dispositivo.",
    },
  ]

  return (
    <section className="border-b border-border">
      <div className="px-8 lg:px-12 pt-12 pb-8">
        <h2 className="text-5xl lg:text-6xl font-bold">FAQs</h2>
      </div>
      <div className="px-8 lg:px-12 pb-4">
        {faqs.map((faq) => (
          <details key={faq.q} className="border-t border-border group">
            <summary className="flex cursor-pointer select-none items-center justify-between py-4 text-[0.9375rem] font-medium [list-style:none] [&::-webkit-details-marker]:hidden hover:text-muted-foreground transition-colors">
              {faq.q}
              <svg
                className="size-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          </details>
        ))}
        <div className="border-t border-border" />
      </div>
      <div className="h-8" />
    </section>
  )
}

function CtaVisual() {
  return (
    <div className="absolute inset-0">
      <svg className="h-full w-full" aria-hidden="true">
        <defs>
          <pattern
            id="cta-dots"
            x="0"
            y="0"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="1.5" fill="currentColor" className="text-foreground/[0.15]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-dots)" />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[12rem] font-bold leading-none select-none text-foreground/[0.035]">
          A0
        </span>
      </div>
    </div>
  )
}

function CtaSection() {
  return (
    <section className="border-b border-border p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 border border-border rounded-xl overflow-hidden">
        <div className="flex flex-col justify-center px-10 lg:px-14 py-16 border-b lg:border-b-0 lg:border-r border-border">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
            Empieza hoy
            <br />
            con A0 —
            <br />
            <span className="text-muted-foreground">sin registro, sin costo.</span>
          </h2>
          <Button
            size="lg"
            className="w-fit "
            asChild
          >
            <Link href="/docs/a0">Ir a A0 →</Link>
          </Button>
        </div>
        <div className="relative min-h-[240px] lg:min-h-0 overflow-hidden">
          <CtaVisual />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="p-6">
      <div className="rounded-xl bg-foreground px-8 lg:px-12 py-12">
        <div className="flex flex-wrap gap-10 justify-between">
          <div className="flex flex-col justify-between gap-8">
            <a
              href="#"
              className="text-sm text-background/50 hover:text-background/80 transition-colors flex items-center gap-1"
            >
              Volver arriba ↑
            </a>
            <div>
              <div className="flex items-center gap-2 font-bold text-background">
                <div className="flex size-5 items-center justify-center bg-background text-foreground text-[10px] font-bold">
                  S
                </div>
                SayGo
              </div>
              <p className="text-xs text-background/40 mt-3">
                © 2026 SayGo. Todos los derechos reservados.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <p className="text-xs text-background/40  mb-4">
                SayGo
              </p>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: "Inicio", href: "/" },
                  { label: "Clases", href: "/docs" },
                  { label: "Niveles", href: "/docs/a0" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-background/40  mb-4">
                Niveles
              </p>
              <ul className="space-y-2.5 text-sm">
                {["A0", "A1", "A2", "B1", "B2"].map((l) => (
                  <li key={l}>
                    <Link
                      href={`/docs/${l.toLowerCase()}`}
                      className="text-background/60 hover:text-background transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-background/40  mb-4">
                Contacto
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="mailto:hola@saygo.mx"
                    className="text-background/60 hover:text-background transition-colors"
                  >
                    hola@saygo.mx
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <Button
              variant="outline"
              className="border-background/25 text-background hover:bg-background/10 "
              asChild
            >
              <Link href="/docs">Ver clases →</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  )
}
