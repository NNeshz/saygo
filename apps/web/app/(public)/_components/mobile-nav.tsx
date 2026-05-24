"use client"

import Link from "next/link"
import { useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import {
  Sheet,
  SheetContent,
  SheetClose,
} from "@saygo/ui/components/sheet"
import { Button } from "@saygo/ui/components/button"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Clases", href: "/docs/zero" },
  { label: "Vocabulario", href: "/docs/vocabulario" },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        className="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
      >
        <IconMenu2 size={20} />
      </button>

      <SheetContent side="right" className="w-72 p-0 flex flex-col">
        <div className="flex items-center justify-between px-6 h-14 border-b border-border">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 font-semibold"
          >
            <div className="flex size-6 items-center justify-center bg-foreground text-background text-xs font-bold">
              S
            </div>
            <span>SayGo</span>
          </Link>
          <SheetClose className="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <IconX size={18} />
            <span className="sr-only">Cerrar</span>
          </SheetClose>
        </div>

        <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="px-4 pb-6 flex items-center justify-between border-t border-border pt-4">
          <ThemeToggle />
          <Button size="sm" className="uppercase tracking-widest" asChild>
            <Link href="/docs" onClick={() => setOpen(false)}>
              Comenzar →
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
