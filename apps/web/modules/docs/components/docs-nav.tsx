"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@saygo/ui/lib/utils"
import type { DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  sections: DocSection[]
}

export function DocsNav({ sections }: Props) {
  const pathname = usePathname()

  return (
    <nav className="w-full">
      {sections.map((section) => (
        <div key={section.key} className="mb-6">
          <Link
            href={section.href}
            className={cn(
              "block text-sm font-semibold mb-2 transition-colors",
              pathname === section.href || pathname.startsWith(section.href + "/")
                ? "text-foreground"
                : "text-foreground/80 hover:text-foreground"
            )}
          >
            {section.label}
          </Link>
          <ul className="space-y-1">
            {section.items.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block text-sm py-0.5 transition-colors",
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
