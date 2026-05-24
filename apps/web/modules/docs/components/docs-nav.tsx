"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconChevronDown } from "@tabler/icons-react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@saygo/ui/components/collapsible"
import { cn } from "@saygo/ui/lib/utils"
import type { DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  sections: DocSection[]
}

function SectionAccordion({
  section,
  defaultOpen,
}: {
  section: DocSection
  defaultOpen: boolean
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(defaultOpen)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between gap-1 py-1 text-left text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors">
        <span>{section.label}</span>
        <IconChevronDown
          size={14}
          className={cn(
            "shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden">
        <ul className="mt-1 mb-4 space-y-0.5 border-l border-border pl-3">
          {section.items.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block py-1 text-sm transition-colors",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function DocsNav({ sections }: Props) {
  const pathname = usePathname()

  return (
    <nav className="w-full space-y-1">
      {sections.map((section) => {
        const isExpanded =
          pathname === section.href ||
          pathname.startsWith(section.href + "/")
        return (
          <SectionAccordion
            key={section.key}
            section={section}
            defaultOpen={isExpanded}
          />
        )
      })}
    </nav>
  )
}
