import Link from "next/link"
import { ReactNode } from "react"
import { Button } from "@saygo/ui/components/button"

function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center border-b bg-background/80 backdrop-blur-sm">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity"
        >
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            S
          </div>
          <span>SayGo</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs">Clases</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
