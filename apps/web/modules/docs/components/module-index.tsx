import Link from "next/link"
import { IconArrowRight, IconClock } from "@tabler/icons-react"
import { LessonStatusBadge } from "./practice/lesson-status"
import type { DocItem, DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  section: DocSection
  moduleItem: DocItem
}

/** Ruta de un módulo dividido en submódulos: objetivos, duración y progreso de cada sesión. */
export function ModuleIndex({ section, moduleItem }: Props) {
  const children = moduleItem.children ?? []

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Clases
          </Link>
          <span>/</span>
          <Link href={section.href} className="hover:text-foreground transition-colors">
            {section.label}
          </Link>
          <span>/</span>
          <span className="text-foreground">{moduleItem.title}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">{moduleItem.title}</h1>
        {moduleItem.description && (
          <p className="text-lg text-muted-foreground leading-relaxed">
            {moduleItem.description}
          </p>
        )}
        <p className="mt-3 text-sm text-muted-foreground">
          {children.length} submódulos
          {moduleItem.hours && <> · {moduleItem.hours} horas</>}
        </p>
      </div>

      <div className="grid gap-3">
        {children.map((child, idx) => (
          <Link
            key={child.href}
            href={child.href}
            className="group flex items-start gap-4 rounded-lg border p-5 hover:border-primary/50 hover:bg-muted/30 transition-all"
          >
            <LessonStatusBadge
              lessonKey={child.slug.join("/")}
              number={child.submodule ?? String(idx + 1)}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                  {child.title}
                </h3>
                <IconArrowRight
                  size={16}
                  className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>
              {child.description && (
                <p className="text-sm text-muted-foreground mt-1">{child.description}</p>
              )}
              {child.objectives && child.objectives.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground list-disc pl-4">
                  {child.objectives.map((objective) => (
                    <li key={objective}>{objective}</li>
                  ))}
                </ul>
              )}
              {child.duration && (
                <p className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <IconClock size={12} />
                  {child.duration}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
