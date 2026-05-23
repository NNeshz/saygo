import Link from "next/link"
import { IconBook, IconArrowRight } from "@tabler/icons-react"
import type { DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  section: DocSection
}

export function LevelIndex({ section }: Props) {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-3">
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Clases
          </Link>
          <span>/</span>
          <span className="text-foreground">{section.label}</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          {section.label}
        </h1>
        {section.description && (
          <p className="text-lg text-muted-foreground leading-relaxed">
            {section.description}
          </p>
        )}
      </div>

      {section.items.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <IconBook size={32} className="mx-auto mb-3 opacity-40" />
          <p>No hay clases en este nivel todavía.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {section.items.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-4 rounded-lg border p-5 hover:border-primary/50 hover:bg-muted/30 transition-all"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground text-sm font-mono font-semibold group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <IconArrowRight
                    size={16}
                    className="shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
