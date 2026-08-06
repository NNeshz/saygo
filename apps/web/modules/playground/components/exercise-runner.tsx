"use client"

import { useState } from "react"
import { IconRefresh } from "@tabler/icons-react"
import { Button } from "@saygo/ui/components/button"
import { cn } from "@saygo/ui/lib/utils"
import type { PracticeExercise } from "@/modules/docs"
import { ExerciseChoice } from "@/modules/docs/components/practice/exercise-choice"
import { ExerciseFill } from "@/modules/docs/components/practice/exercise-fill"
import { ExerciseOrder } from "@/modules/docs/components/practice/exercise-order"
import type { PlaygroundExercise } from "../types/playground.types"
import { completeExercise } from "../lib/playground-progress"

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

export function ExerciseRunner({
  classSlug,
  exercise,
}: {
  classSlug: string
  exercise: PlaygroundExercise
}) {
  const total = exercise.exercises.length
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
      completeExercise(
        classSlug,
        exercise.id,
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
      {exercise.exercises.map((ex, idx) => (
        <div key={`${attempt}-${idx}`} className="flex gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-mono font-semibold text-muted-foreground mt-px">
            {idx + 1}
          </div>
          <div className="flex-1 min-w-0">
            <Exercise
              exercise={ex}
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
            — ronda completada.
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
