"use client"

import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react"
import { cn } from "@saygo/ui/lib/utils"
import {
  completedTierCount,
  isLessonComplete,
  isModuleComplete,
  usePracticeProgress,
  type PracticeProgress,
} from "../../lib/practice-progress"

/** Estado de una clase, o de un módulo si se pasan las llaves de sus submódulos. */
function getStatus(
  progress: PracticeProgress,
  lessonKey: string,
  childKeys?: string[]
) {
  if (childKeys) {
    return {
      complete: isModuleComplete(progress, childKeys),
      started: childKeys.some((key) => completedTierCount(progress, key) > 0),
    }
  }
  return {
    complete: isLessonComplete(progress, lessonKey),
    started: completedTierCount(progress, lessonKey) > 0,
  }
}

/** Número de la clase en el índice de nivel; se vuelve check verde al completarla. */
export function LessonStatusBadge({
  lessonKey,
  number,
  childKeys,
}: {
  lessonKey: string
  number: string
  childKeys?: string[]
}) {
  const progress = usePracticeProgress()
  const { complete, started } = getStatus(progress, lessonKey, childKeys)

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
        "relative flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground text-sm font-mono font-semibold group-hover:bg-primary/10 group-hover:text-primary transition-colors",
        number.length > 2 && "text-xs"
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
export function LessonNavCheck({
  lessonKey,
  childKeys,
}: {
  lessonKey: string
  childKeys?: string[]
}) {
  const progress = usePracticeProgress()
  if (!getStatus(progress, lessonKey, childKeys).complete) return null
  return (
    <IconCircleCheckFilled size={14} className="shrink-0 text-green-600" />
  )
}
