import type { Metadata } from "next"
import { getPlaygroundClasses, PlaygroundIndex } from "@/modules/playground"

export const metadata: Metadata = {
  title: "Playground | SayGo",
  description: "Repasa clases anteriores con quizzes rápidos de 10 preguntas.",
}

export default function PlaygroundPage() {
  const classes = getPlaygroundClasses()
  return <PlaygroundIndex classes={classes} />
}
