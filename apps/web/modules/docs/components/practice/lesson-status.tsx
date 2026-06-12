"use client"

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react"
import { cn } from "@saygo/ui/lib/utils"
import {
  completedTierCount,
  isLessonComplete,
  usePracticeProgress,
} from "../../lib/practice-progress"

/** Número de la clase en el índice de nivel; se vuelve check verde al completarla. */
export function LessonStatusBadge({
  lessonKey,
  number,
}: {
  lessonKey: string
  number: string
}) {
  const progress = usePracticeProgress()
  const complete = isLessonComplete(progress, lessonKey)
  const started = completedTierCount(progress, lessonKey) > 0

  if (complete) {
    return (
      <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-green-500/10 text-green-600">
        <IconCheck size={18} />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground text-sm font-mono font-semibold group-hover:bg-primary/10 group-hover:text-primary transition-colors"
      )}
    >
      {number}
      {started && (
        <span className="absolute -top-1 -right-1 size-2.5 rounded-full bg-amber-500 border-2 border-background" />
      )}
    </div>
  )
}

/** Check pequeño junto al título de la clase en el sidebar. */
export function LessonNavCheck({ lessonKey }: { lessonKey: string }) {
  const progress = usePracticeProgress()
  if (!isLessonComplete(progress, lessonKey)) return null
  return (
    <IconCircleCheckFilled size={14} className="shrink-0 text-green-600" />
  )
}
