import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@saygo/ui/components/button"

export const metadata: Metadata = {
  title: "SayGo — Clases de inglés",
  description: "Aprende inglés desde cero, paso a paso.",
}

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-2xl flex flex-col items-center gap-6">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground font-bold text-2xl shadow-sm">
          S
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            SayGo
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Aprende inglés desde cero, paso a paso. Clases organizadas por nivel
            con ejercicios y vocabulario.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <Button asChild size="lg">
            <Link href="/docs">
              Explorar clases →
            </Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-4">
          Empieza por{" "}
          <Link href="/docs/a0" className="underline underline-offset-4 hover:text-foreground transition-colors">
            A0 — Absoluto Principiante
          </Link>
          {" "}o elegí tu nivel en el menú.
        </p>
      </div>
    </div>
  )
}
