import type { PracticeExercise } from "@/modules/docs"

export type PlaygroundExerciseId = 1 | 2 | 3

export type PlaygroundExercise = {
  id: PlaygroundExerciseId
  title: string
  exercises: PracticeExercise[]
}

export type PlaygroundClass = {
  slug: string
  title: string
  level: string
  sourceHref?: string
  exercises: PlaygroundExercise[]
}

export type PlaygroundClassSummary = {
  slug: string
  title: string
  level: string
  exerciseCount: number
}
