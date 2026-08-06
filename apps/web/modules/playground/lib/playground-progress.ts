"use client"

import { useSyncExternalStore } from "react"
import type { PlaygroundExerciseId } from "../types/playground.types"

const STORAGE_KEY = "saygo:playground:v1"
const CHANGE_EVENT = "saygo:playground-changed"

export type ExerciseResult = {
  score: number
  total: number
  completedAt: string
}

export type ClassProgress = {
  exercises: Partial<Record<PlaygroundExerciseId, ExerciseResult>>
}

export type PlaygroundProgress = Record<string, ClassProgress>

const EXERCISE_IDS: PlaygroundExerciseId[] = [1, 2, 3]

const EMPTY: PlaygroundProgress = {}

let cache: { raw: string | null; parsed: PlaygroundProgress } | null = null

function readProgress(): PlaygroundProgress {
  if (typeof window === "undefined") return EMPTY
  let raw: string | null = null
  try {
    raw = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return EMPTY
  }
  if (cache && cache.raw === raw) return cache.parsed
  let parsed: PlaygroundProgress = EMPTY
  if (raw) {
    try {
      parsed = JSON.parse(raw) as PlaygroundProgress
    } catch {
      parsed = EMPTY
    }
  }
  cache = { raw, parsed }
  return parsed
}

function writeProgress(progress: PlaygroundProgress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // localStorage no disponible (modo privado, cuota) — el progreso no persiste
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback)
  window.addEventListener("storage", callback)
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback)
    window.removeEventListener("storage", callback)
  }
}

export function usePlaygroundProgress(): PlaygroundProgress {
  return useSyncExternalStore(subscribe, readProgress, () => EMPTY)
}

export function completeExercise(
  classSlug: string,
  exerciseId: PlaygroundExerciseId,
  score: number,
  total: number
) {
  const progress = readProgress()
  const classProgress: ClassProgress = {
    exercises: { ...progress[classSlug]?.exercises },
  }
  classProgress.exercises[exerciseId] = {
    score,
    total,
    completedAt: new Date().toISOString(),
  }
  writeProgress({ ...progress, [classSlug]: classProgress })
}

export function getExercise(
  progress: PlaygroundProgress,
  classSlug: string,
  exerciseId: PlaygroundExerciseId
): ExerciseResult | null {
  return progress[classSlug]?.exercises?.[exerciseId] ?? null
}

export function completedExerciseCount(
  progress: PlaygroundProgress,
  classSlug: string
): number {
  const exercises = progress[classSlug]?.exercises
  if (!exercises) return 0
  return EXERCISE_IDS.filter((id) => exercises[id]).length
}

export function isClassComplete(
  progress: PlaygroundProgress,
  classSlug: string
): boolean {
  return completedExerciseCount(progress, classSlug) === EXERCISE_IDS.length
}
