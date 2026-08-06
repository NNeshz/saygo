import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import {
  FlashcardRunner,
  getAllPlaygroundParams,
  getPlaygroundExercise,
  isValidExerciseId,
} from "@/modules/playground"

export const dynamicParams = false

type Props = { params: Promise<{ clase: string; ejercicio: string }> }

export async function generateStaticParams() {
  return getAllPlaygroundParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { clase, ejercicio } = await params
  if (!isValidExerciseId(ejercicio)) return {}
  const data = getPlaygroundExercise(clase, Number(ejercicio))
  if (!data) return {}
  return {
    title: `${data.classTitle} — Ronda ${ejercicio} | Playground | SayGo`,
  }
}

export default async function PlaygroundExercisePage({ params }: Props) {
  const { clase, ejercicio } = await params
  if (!isValidExerciseId(ejercicio)) notFound()

  const data = getPlaygroundExercise(clase, Number(ejercicio))
  if (!data) notFound()

  const { classTitle, sourceHref, exercise } = data

  return (
    <div className="max-w-2xl">
      <div className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground mb-6">
        <Link href="/playground" className="hover:text-foreground transition-colors">
          Playground
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">{classTitle}</span>
        {sourceHref && (
          <>
            <span>·</span>
            <Link href={sourceHref} className="hover:text-foreground transition-colors">
              Ver clase
            </Link>
          </>
        )}
      </div>

      <h1 className="text-2xl font-bold tracking-tight mb-1">{classTitle}</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Ronda {exercise.id} — {exercise.title}
      </p>

      <FlashcardRunner classSlug={clase} classTitle={classTitle} exercise={exercise} />
    </div>
  )
}
