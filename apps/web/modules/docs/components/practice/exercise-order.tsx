"use client"

import { useState } from "react"
import { Button } from "@saygo/ui/components/button"
import { cn } from "@saygo/ui/lib/utils"
import type { OrderExercise } from "../../types/practice.types"
import { normalizeAnswer } from "../../lib/answer"
import { Feedback } from "./feedback"

type Props = {
  exercise: OrderExercise
  onResult: (correct: boolean) => void
}

export function ExerciseOrder({ exercise, onResult }: Props) {
  // Se guardan índices (no palabras) para soportar palabras repetidas en el banco
  const [picked, setPicked] = useState<number[]>([])
  const [result, setResult] = useState<boolean | null>(null)
  const locked = result !== null

  const remaining = exercise.words
    .map((_, idx) => idx)
    .filter((idx) => !picked.includes(idx))
  const sentence = picked.map((idx) => exercise.words[idx]).join(" ")

  function check() {
    if (locked || remaining.length > 0) return
    const ok = normalizeAnswer(sentence) === normalizeAnswer(exercise.answer)
    setResult(ok)
    onResult(ok)
  }

  return (
    <div>
      <p className="text-sm leading-6 font-medium mb-3">{exercise.prompt}</p>

      <div
        className={cn(
          "flex min-h-11 flex-wrap items-center gap-1.5 rounded-md border border-dashed px-2.5 py-2 mb-2.5",
          locked
            ? result
              ? "border-green-600/50 bg-green-500/5"
              : "border-destructive/50 bg-destructive/5"
            : "border-input"
        )}
      >
        {picked.length === 0 && (
          <span className="text-xs text-muted-foreground">
            Toca las palabras para armar la oración…
          </span>
        )}
        {picked.map((idx) => (
          <button
            key={idx}
            type="button"
            disabled={locked}
            onClick={() => setPicked((p) => p.filter((i) => i !== idx))}
            className="rounded-md bg-primary/10 text-primary px-2 py-1 text-sm font-medium hover:bg-primary/20 transition-colors disabled:pointer-events-none"
          >
            {exercise.words[idx]}
          </button>
        ))}
      </div>

      {remaining.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {remaining.map((idx) => (
            <button
              key={idx}
              type="button"
              disabled={locked}
              onClick={() => setPicked((p) => [...p, idx])}
              className="rounded-md border bg-muted/40 px-2 py-1 text-sm hover:border-primary/50 hover:bg-muted transition-colors"
            >
              {exercise.words[idx]}
            </button>
          ))}
        </div>
      )}

      <Button
        size="sm"
        variant="outline"
        onClick={check}
        disabled={locked || remaining.length > 0}
      >
        Comprobar
      </Button>

      {locked && (
        <Feedback
          correct={result === true}
          correctAnswer={exercise.answer}
          explanation={exercise.explanation}
        />
      )}
    </div>
  )
}
