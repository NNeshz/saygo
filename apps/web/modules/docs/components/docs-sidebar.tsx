"use client"

import { usePathname } from "next/navigation"
import { DocsNav } from "./docs-nav"
import type { DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  sections: DocSection[]
}

export function DocsSidebar({ sections }: Props) {
  const pathname = usePathname()

  if (pathname === "/docs") return null

  return (
    <aside className="hidden lg:block shrink-0 w-56 xl:w-64">
      <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8 px-5">
        <DocsNav sections={sections} />
      </div>
    </aside>
  )
}
