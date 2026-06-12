"use client"

import { useSyncExternalStore } from "react"
import type { PracticeTierId } from "../types/practice.types"

const STORAGE_KEY = "saygo:practice:v1"
const CHANGE_EVENT = "saygo:practice-changed"

export type TierResult = {
  score: number
  total: number
  completedAt: string
}

export type LessonProgress = {
  tiers: Partial<Record<PracticeTierId, TierResult>>
}

export type PracticeProgress = Record<string, LessonProgress>

const TIER_IDS: PracticeTierId[] = ["basico", "medio", "avanzado"]

const EMPTY: PracticeProgress = {}

let cache: { raw: string | null; parsed: PracticeProgress } | null = null

function readProgress(): PracticeProgress {
  if (typeof window === "undefined") return EMPTY
  let raw: string | null = null
  try {
    raw = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return EMPTY
  }
  if (cache && cache.raw === raw) return cache.parsed
  let parsed: PracticeProgress = EMPTY
  if (raw) {
    try {
      parsed = JSON.parse(raw) as PracticeProgress
    } catch {
      parsed = EMPTY
    }
  }
  cache = { raw, parsed }
  return parsed
}

function writeProgress(progress: PracticeProgress) {
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

export function usePracticeProgress(): PracticeProgress {
  return useSyncExternalStore(subscribe, readProgress, () => EMPTY)
}

export function completeTier(
  lessonKey: string,
  tierId: PracticeTierId,
  score: number,
  total: number
) {
  const progress = readProgress()
  const lesson: LessonProgress = {
    tiers: { ...progress[lessonKey]?.tiers },
  }
  lesson.tiers[tierId] = {
    score,
    total,
    completedAt: new Date().toISOString(),
  }
  writeProgress({ ...progress, [lessonKey]: lesson })
}

export function getTier(
  progress: PracticeProgress,
  lessonKey: string,
  tierId: PracticeTierId
): TierResult | null {
  return progress[lessonKey]?.tiers?.[tierId] ?? null
}

export function completedTierCount(
  progress: PracticeProgress,
  lessonKey: string
): number {
  const tiers = progress[lessonKey]?.tiers
  if (!tiers) return 0
  return TIER_IDS.filter((id) => tiers[id]).length
}

export function isLessonComplete(
  progress: PracticeProgress,
  lessonKey: string
): boolean {
  return completedTierCount(progress, lessonKey) === TIER_IDS.length
}
