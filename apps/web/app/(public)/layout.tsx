import Link from "next/link"
import { ReactNode } from "react"
import { Button } from "@saygo/ui/components/button"
import { ThemeToggle } from "./_components/theme-toggle"
import { MobileNav } from "./_components/mobile-nav"

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Clases", href: "/docs/zero" },
  { label: "Vocabulario", href: "/docs/vocabulario" },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="flex w-full items-center justify-between px-6 lg:px-10">
        {/* Logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold hover:opacity-80 transition-opacity"
          >
            <div className="flex size-6 items-center justify-center bg-foreground text-background text-xs font-bold">
            </div>
            <span>SayGo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" className="uppercase tracking-widest" asChild>
            <Link href="/docs">Comenzar →</Link>
          </Button>
        </div>

        {/* Mobile: hamburger only */}
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-[1230px] border-x border-border flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
