import Link from "next/link"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import type { DocItem } from "@/modules/docs/types/docs.types"

type Props = {
  prev: DocItem | null
  next: DocItem | null
}

export function DocsPrevNext({ prev, next }: Props) {
  if (!prev && !next) return null

  return (
    <div className="mt-12 flex items-center justify-between gap-4 border-t pt-8">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-col gap-1 text-sm hover:text-primary transition-colors max-w-[45%]"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <IconArrowLeft size={12} />
            Anterior
          </span>
          <span className="font-medium group-hover:text-primary transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex flex-col items-end gap-1 text-sm hover:text-primary transition-colors max-w-[45%] text-right"
        >
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            Siguiente
            <IconArrowRight size={12} />
          </span>
          <span className="font-medium group-hover:text-primary transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
