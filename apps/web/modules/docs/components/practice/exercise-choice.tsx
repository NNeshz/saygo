"use client"

import { useState } from "react"
import { IconCheck, IconX } from "@tabler/icons-react"
import { cn } from "@saygo/ui/lib/utils"
import type { ChoiceExercise } from "../../types/practice.types"
import { Feedback } from "./feedback"

type Props = {
  exercise: ChoiceExercise
  onResult: (correct: boolean) => void
}

export function ExerciseChoice({ exercise, onResult }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const locked = selected !== null

  function choose(idx: number) {
    if (locked) return
    setSelected(idx)
    onResult(idx === exercise.answer)
  }

  return (
    <div>
      <p className="text-sm leading-6 font-medium mb-3">{exercise.prompt}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {exercise.options.map((option, idx) => {
          const isCorrect = idx === exercise.answer
          const isSelected = idx === selected
          return (
            <button
              key={idx}
              type="button"
              disabled={locked}
              onClick={() => choose(idx)}
              className={cn(
                "flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors",
                !locked && "hover:border-primary/50 hover:bg-muted/40",
                locked && isCorrect && "border-green-600/50 bg-green-500/10",
                locked &&
                  isSelected &&
                  !isCorrect &&
                  "border-destructive/50 bg-destructive/10",
                locked && !isSelected && !isCorrect && "opacity-50"
              )}
            >
              <span>{option}</span>
              {locked && isCorrect && (
                <IconCheck size={16} className="shrink-0 text-green-600" />
              )}
              {locked && isSelected && !isCorrect && (
                <IconX size={16} className="shrink-0 text-destructive" />
              )}
            </button>
          )
        })}
      </div>
      {locked && (
        <Feedback
          correct={selected === exercise.answer}
          explanation={exercise.explanation}
        />
      )}
    </div>
  )
}
