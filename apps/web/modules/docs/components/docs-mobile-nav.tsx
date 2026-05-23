"use client"

import { useState } from "react"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { Button } from "@saygo/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@saygo/ui/components/sheet"
import { DocsNav } from "./docs-nav"
import type { DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  sections: DocSection[]
}

export function DocsMobileNav({ sections }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <IconMenu2 size={18} />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0" aria-describedby={undefined}>
        <SheetHeader className="px-5 py-4 border-b">
          <SheetTitle className="text-left text-sm">Clases</SheetTitle>
        </SheetHeader>
        <div
          className="overflow-y-auto h-full px-5 py-4"
          onClick={() => setOpen(false)}
        >
          <DocsNav sections={sections} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
