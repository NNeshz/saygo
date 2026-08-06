import fs from "node:fs"
import path from "node:path"
import type {
  PlaygroundClass,
  PlaygroundExercise,
  PlaygroundExerciseId,
  PlaygroundClassSummary,
} from "../types/playground.types"

const PLAYGROUND_DIR = path.join(process.cwd(), "content", "playground")

function readClassFile(file: string): PlaygroundClass | null {
  const filePath = path.join(PLAYGROUND_DIR, file)
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as PlaygroundClass
  } catch {
    return null
  }
}

function listClassFiles(): string[] {
  if (!fs.existsSync(PLAYGROUND_DIR)) return []
  return fs.readdirSync(PLAYGROUND_DIR).filter((f) => f.endsWith(".json"))
}

export function getPlaygroundClasses(): PlaygroundClassSummary[] {
  return listClassFiles()
    .map((file) => readClassFile(file))
    .filter((c): c is PlaygroundClass => c !== null)
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      level: c.level,
      exerciseCount: c.exercises.length,
    }))
}

export function getPlaygroundClass(slug: string): PlaygroundClass | null {
  return readClassFile(`${slug}.json`)
}

export function getPlaygroundExercise(
  slug: string,
  exerciseId: number
): { classTitle: string; sourceHref?: string; exercise: PlaygroundExercise } | null {
  const playgroundClass = getPlaygroundClass(slug)
  if (!playgroundClass) return null
  const exercise = playgroundClass.exercises.find((e) => e.id === exerciseId)
  if (!exercise) return null
  return {
    classTitle: playgroundClass.title,
    sourceHref: playgroundClass.sourceHref,
    exercise,
  }
}

export function getAllPlaygroundParams(): {
  clase: string
  ejercicio: string
}[] {
  const params: { clase: string; ejercicio: string }[] = []
  for (const file of listClassFiles()) {
    const playgroundClass = readClassFile(file)
    if (!playgroundClass) continue
    for (const exercise of playgroundClass.exercises) {
      params.push({
        clase: playgroundClass.slug,
        ejercicio: String(exercise.id),
      })
    }
  }
  return params
}

export function isValidExerciseId(value: string): value is `${PlaygroundExerciseId}` {
  return value === "1" || value === "2" || value === "3"
}
