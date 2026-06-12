"use client"

import { useState } from "react"
import {
  IconChevronDown,
  IconCircleCheckFilled,
  IconMessages,
  IconPlant,
  IconRefresh,
  IconTrophy,
} from "@tabler/icons-react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@saygo/ui/components/collapsible"
import { Button } from "@saygo/ui/components/button"
import { cn } from "@saygo/ui/lib/utils"
import type {
  PracticeData,
  PracticeExercise,
  PracticeTier,
  PracticeTierId,
} from "../../types/practice.types"
import {
  completeTier,
  completedTierCount,
  getTier,
  isLessonComplete,
  usePracticeProgress,
} from "../../lib/practice-progress"
import { ExerciseChoice } from "./exercise-choice"
import { ExerciseFill } from "./exercise-fill"
import { ExerciseOrder } from "./exercise-order"

const TIER_ICONS: Record<PracticeTierId, typeof IconPlant> = {
  basico: IconPlant,
  medio: IconMessages,
  avanzado: IconTrophy,
}

function Exercise({
  exercise,
  onResult,
}: {
  exercise: PracticeExercise
  onResult: (correct: boolean) => void
}) {
  switch (exercise.type) {
    case "choice":
      return <ExerciseChoice exercise={exercise} onResult={onResult} />
    case "fill":
      return <ExerciseFill exercise={exercise} onResult={onResult} />
    case "order":
      return <ExerciseOrder exercise={exercise} onResult={onResult} />
  }
}

function TierExercises({
  lessonKey,
  tier,
}: {
  lessonKey: string
  tier: PracticeTier
}) {
  const total = tier.exercises.length
  const [attempt, setAttempt] = useState(0)
  const [results, setResults] = useState<(boolean | null)[]>(() =>
    Array(total).fill(null)
  )

  const done = results.every((r) => r !== null)
  const score = results.filter((r) => r === true).length

  function handleResult(idx: number, correct: boolean) {
    if (results[idx] !== null) return
    const next = [...results]
    next[idx] = correct
    setResults(next)
    if (next.every((r) => r !== null)) {
      completeTier(
        lessonKey,
        tier.id,
        next.filter((r) => r === true).length,
        total
      )
    }
  }

  function retry() {
    setResults(Array(total).fill(null))
    setAttempt((a) => a + 1)
  }

  return (
    <div className="space-y-6">
      {tier.exercises.map((exercise, idx) => (
        <div key={`${attempt}-${idx}`} className="flex gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-mono font-semibold text-muted-foreground mt-px">
            {idx + 1}
          </div>
          <div className="flex-1 min-w-0">
            <Exercise
              exercise={exercise}
              onResult={(correct) => handleResult(idx, correct)}
            />
          </div>
        </div>
      ))}

      {done && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-md border bg-muted/30 px-4 py-3">
          <p className="text-sm">
            Resultado:{" "}
            <span
              className={cn(
                "font-semibold",
                score === total ? "text-green-600" : "text-foreground"
              )}
            >
              {score}/{total}
            </span>{" "}
            — nivel completado.
          </p>
          <Button size="sm" variant="ghost" onClick={retry}>
            <IconRefresh size={14} />
            Reintentar
          </Button>
        </div>
      )}
    </div>
  )
}

function TierCard({
  lessonKey,
  tier,
}: {
  lessonKey: string
  tier: PracticeTier
}) {
  const progress = usePracticeProgress()
  const saved = getTier(progress, lessonKey, tier.id)
  const [open, setOpen] = useState(false)
  const Icon = TIER_ICONS[tier.id] ?? IconPlant

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="rounded-lg border"
    >
      <CollapsibleTrigger className="flex w-full items-center gap-3 p-4 text-left">
        <div
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-md transition-colors",
            saved
              ? "bg-green-500/10 text-green-600"
              : "bg-muted text-muted-foreground"
          )}
        >
          <Icon size={18} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold">{tier.title}</div>
          <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {tier.description}
          </div>
        </div>
        {saved && (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-600">
            <IconCircleCheckFilled size={12} />
            {saved.score}/{saved.total}
          </span>
        )}
        <IconChevronDown
          size={16}
          className={cn(
            "shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden">
        <div className="border-t p-4 sm:p-5">
          <TierExercises lessonKey={lessonKey} tier={tier} />
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function PracticeSection({
  lessonKey,
  data,
}: {
  lessonKey: string
  data: PracticeData
}) {
  const progress = usePracticeProgress()
  const complete = isLessonComplete(progress, lessonKey)
  const count = completedTierCount(progress, lessonKey)

  return (
    <section className="mt-12" data-pdf-exclude>
      <div className="flex items-center justify-between gap-3 border-b pb-2 mb-4">
        <h2 className="text-xl font-semibold">Práctica</h2>
        {complete ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600">
            <IconCircleCheckFilled size={14} />
            Clase completada
          </span>
        ) : (
          <span className="text-xs text-muted-foreground">
            {count}/{data.tiers.length} niveles
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-5">
        Pon en práctica lo que aprendiste en esta clase. Completa los tres
        niveles para marcarla como hecha — tu progreso se guarda en este
        navegador.
      </p>
      <div className="grid gap-3">
        {data.tiers.map((tier) => (
          <TierCard key={tier.id} lessonKey={lessonKey} tier={tier} />
        ))}
      </div>
    </section>
  )
}
