export type PlaygroundExerciseId = 1 | 2 | 3

export type FlashcardQuestion = {
  question: string
  answer: string
}

export type PlaygroundExercise = {
  id: PlaygroundExerciseId
  title: string
  questions: FlashcardQuestion[]
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
