"use client"

import Link from "next/link"
import { useState } from "react"
import {
  IconCircleCheckFilled,
  IconCircleXFilled,
  IconEye,
  IconRefresh,
} from "@tabler/icons-react"
import { Button } from "@saygo/ui/components/button"
import { cn } from "@saygo/ui/lib/utils"
import type { PlaygroundExercise } from "../types/playground.types"
import { completeExercise } from "../lib/playground-progress"

type Props = {
  classSlug: string
  classTitle: string
  exercise: PlaygroundExercise
}

export function FlashcardRunner({ classSlug, classTitle, exercise }: Props) {
  const total = exercise.questions.length
  const [attempt, setAttempt] = useState(0)
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [results, setResults] = useState<(boolean | null)[]>(() =>
    Array(total).fill(null)
  )

  const done = results.every((r) => r !== null)
  const score = results.filter((r) => r === true).length
  const current = exercise.questions[index]

  function grade(correct: boolean) {
    const next = [...results]
    next[index] = correct
    setResults(next)

    if (next.every((r) => r !== null)) {
      completeExercise(classSlug, exercise.id, next.filter((r) => r === true).length, total)
      return
    }

    setRevealed(false)
    setIndex((i) => Math.min(i + 1, total - 1))
  }

  function retry() {
    setResults(Array(total).fill(null))
    setIndex(0)
    setRevealed(false)
    setAttempt((a) => a + 1)
  }

  return (
    <div className="space-y-6" key={attempt}>
      <div className="flex items-center gap-1.5">
        {exercise.questions.map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-colors",
              results[i] === true && "bg-green-500",
              results[i] === false && "bg-destructive",
              results[i] === null && i === index && "bg-foreground/40",
              results[i] === null && i !== index && "bg-muted"
            )}
          />
        ))}
      </div>

      {!done ? (
        <div className="rounded-lg border p-6 sm:p-8">
          <div className="text-xs font-medium text-muted-foreground mb-3">
            Pregunta {index + 1} de {total}
          </div>
          <p className="text-lg font-medium leading-relaxed">
            {current.question}
          </p>

          {!revealed ? (
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setRevealed(true)}
            >
              <IconEye size={16} />
              Ver respuesta
            </Button>
          ) : (
            <div className="mt-6 space-y-4">
              <div className="rounded-md border bg-muted/30 px-4 py-3 text-sm">
                {current.answer}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="border-destructive/40 text-destructive hover:bg-destructive/10"
                  onClick={() => grade(false)}
                >
                  <IconCircleXFilled size={16} />
                  Incorrecto
                </Button>
                <Button
                  variant="outline"
                  className="border-green-600/40 text-green-600 hover:bg-green-500/10"
                  onClick={() => grade(true)}
                >
                  <IconCircleCheckFilled size={16} />
                  Correcto
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-lg border p-6 sm:p-8 text-center">
          <p className="text-sm text-muted-foreground">{classTitle}</p>
          <p className="mt-2 text-2xl font-semibold">
            <span className={cn(score === total ? "text-green-600" : "text-foreground")}>
              {score}/{total}
            </span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ronda {exercise.id} — {exercise.title}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Button variant="ghost" onClick={retry}>
              <IconRefresh size={14} />
              Reintentar
            </Button>
            {exercise.id < 3 ? (
              <Button asChild>
                <Link href={`/playground/${classSlug}/${exercise.id + 1}`}>
                  Siguiente ronda →
                </Link>
              </Button>
            ) : (
              <Button asChild>
                <Link href="/playground">Volver a Playground</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
