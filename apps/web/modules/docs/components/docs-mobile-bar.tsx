"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { DocsMobileNav } from "./docs-mobile-nav"
import type { DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  sections: DocSection[]
}

export function DocsMobileBar({ sections }: Props) {
  const pathname = usePathname()

  if (pathname === "/docs") return null

  return (
    <div className="lg:hidden flex items-center gap-3 px-4 py-3 border-b text-sm text-muted-foreground">
      <DocsMobileNav sections={sections} />
      <Link href="/docs" className="hover:text-foreground transition-colors">
        Clases
      </Link>
    </div>
  )
}
