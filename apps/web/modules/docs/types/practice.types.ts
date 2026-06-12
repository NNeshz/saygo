export type PracticeTierId = "basico" | "medio" | "avanzado"

export type ChoiceExercise = {
  type: "choice"
  prompt: string
  options: string[]
  answer: number
  explanation?: string
}

export type FillExercise = {
  type: "fill"
  /** El hueco se marca con ___ dentro del prompt */
  prompt: string
  answers: string[]
  hint?: string
  explanation?: string
}

export type OrderExercise = {
  type: "order"
  prompt: string
  words: string[]
  answer: string
  explanation?: string
}

export type PracticeExercise = ChoiceExercise | FillExercise | OrderExercise

export type PracticeTier = {
  id: PracticeTierId
  title: string
  description: string
  exercises: PracticeExercise[]
}

export type PracticeData = {
  tiers: PracticeTier[]
}
