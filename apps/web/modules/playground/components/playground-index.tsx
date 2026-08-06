"use client"

import Link from "next/link"
import { IconCircleCheckFilled } from "@tabler/icons-react"
import { cn } from "@saygo/ui/lib/utils"
import type { PlaygroundClassSummary, PlaygroundExerciseId } from "../types/playground.types"
import { getExercise, usePlaygroundProgress } from "../lib/playground-progress"

const EXERCISE_IDS: PlaygroundExerciseId[] = [1, 2, 3]

export function PlaygroundIndex({ classes }: { classes: PlaygroundClassSummary[] }) {
  const progress = usePlaygroundProgress()

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Playground</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Repasa lo visto en clases anteriores con quizzes rápidos de 10
          preguntas. Tu progreso se guarda en este navegador.
        </p>
      </div>

      {classes.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>Todavía no hay ejercicios de repaso disponibles.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {classes.map((playgroundClass) => (
            <div key={playgroundClass.slug} className="rounded-lg border p-5">
              <h3 className="font-semibold text-sm">{playgroundClass.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {EXERCISE_IDS.slice(0, playgroundClass.exerciseCount).map((id) => {
                  const saved = getExercise(progress, playgroundClass.slug, id)
                  return (
                    <Link
                      key={id}
                      href={`/playground/${playgroundClass.slug}/${id}`}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted/50",
                        saved && "border-green-600/30 bg-green-500/10 text-green-600"
                      )}
                    >
                      {saved && <IconCircleCheckFilled size={14} />}
                      Ronda {id}
                      {saved && (
                        <span className="text-xs opacity-80">
                          {saved.score}/{saved.total}
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
