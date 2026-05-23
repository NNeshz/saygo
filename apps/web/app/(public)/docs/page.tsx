import type { Metadata } from "next"
import Link from "next/link"
import { IconBook, IconVocabulary, IconArrowRight } from "@tabler/icons-react"

export const metadata: Metadata = {
  title: "Docs | SayGo",
}

const sections = [
  {
    icon: IconBook,
    title: "Clases",
    description:
      "Gramática, conversación y pronunciación organizados por nivel. Empezá desde cero o elegí el nivel que necesitás.",
    href: "/docs/zero",
    label: "Ver clases",
    available: true,
  },
  {
    icon: IconVocabulary,
    title: "Vocabulario",
    description:
      "Listas temáticas de vocabulario con ejemplos y contexto para ampliar tu léxico.",
    href: "/docs/vocabulario",
    label: "Próximamente",
    available: false,
  },
]

export default function DocsPage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Documentación</h1>
        <p className="text-muted-foreground">
          Elegí una sección para empezar.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <Link
              key={s.href}
              href={s.available ? s.href : "#"}
              aria-disabled={!s.available}
              className={`group flex flex-col gap-4 rounded-lg border p-6 transition-all ${
                s.available
                  ? "hover:border-primary/50 hover:bg-muted/30 cursor-pointer"
                  : "opacity-50 cursor-default pointer-events-none"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <Icon size={20} />
                </div>
                {s.available && (
                  <IconArrowRight
                    size={16}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1"
                  />
                )}
              </div>
              <div>
                <h2 className="font-semibold mb-1">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>
              <span className="text-xs font-medium text-primary">
                {s.label} {s.available && "→"}
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
