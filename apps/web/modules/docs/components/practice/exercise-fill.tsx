"use client"

import { useState } from "react"
import { Button } from "@saygo/ui/components/button"
import { cn } from "@saygo/ui/lib/utils"
import type { FillExercise } from "../../types/practice.types"
import { normalizeAnswer } from "../../lib/answer"
import { Feedback } from "./feedback"

type Props = {
  exercise: FillExercise
  onResult: (correct: boolean) => void
}

export function ExerciseFill({ exercise, onResult }: Props) {
  const [value, setValue] = useState("")
  const [result, setResult] = useState<boolean | null>(null)
  const locked = result !== null

  const parts = exercise.prompt.split("___")
  const inline = parts.length === 2

  function check() {
    if (locked || !value.trim()) return
    const ok = exercise.answers.some(
      (a) => normalizeAnswer(a) === normalizeAnswer(value)
    )
    setResult(ok)
    onResult(ok)
  }

  const input = (
    <input
      type="text"
      value={value}
      disabled={locked}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault()
          check()
        }
      }}
      autoComplete="off"
      autoCapitalize="off"
      spellCheck={false}
      aria-label="Respuesta"
      className={cn(
        "border-b bg-transparent text-center text-sm focus:outline-none transition-colors",
        inline ? "inline-block w-32 mx-1 px-1" : "w-full max-w-xs px-2 py-1",
        locked
          ? result
            ? "border-green-600 text-green-600"
            : "border-destructive text-destructive"
          : "border-input focus:border-primary"
      )}
    />
  )

  return (
    <div>
      {inline ? (
        <p className="text-sm leading-8 font-medium mb-3">
          {parts[0]}
          {input}
          {parts[1]}
        </p>
      ) : (
        <>
          <p className="text-sm leading-6 font-medium mb-3">{exercise.prompt}</p>
          <div className="mb-3">{input}</div>
        </>
      )}
      <div className="flex items-center gap-3">
        <Button
          size="sm"
          variant="outline"
          onClick={check}
          disabled={locked || !value.trim()}
        >
          Comprobar
        </Button>
        {exercise.hint && !locked && (
          <span className="text-xs text-muted-foreground italic">
            Pista: {exercise.hint}
          </span>
        )}
      </div>
      {locked && (
        <Feedback
          correct={result === true}
          correctAnswer={exercise.answers[0]}
          explanation={exercise.explanation}
        />
      )}
    </div>
  )
}
