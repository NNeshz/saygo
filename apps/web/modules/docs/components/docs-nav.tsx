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
import { LessonNavCheck } from "./practice/lesson-status"
import type { DocItem, DocSection } from "@/modules/docs/types/docs.types"

type Props = {
  sections: DocSection[]
}

function navLinkClass(isActive: boolean) {
  return cn(
    "flex items-center justify-between gap-2 py-1 text-sm transition-colors",
    isActive
      ? "font-medium text-foreground"
      : "text-muted-foreground hover:text-foreground"
  )
}

/** Clase dividida en submódulos: enlace al índice del módulo + sublista plegable. */
function ModuleNavItem({ item }: { item: DocItem }) {
  const pathname = usePathname()
  const children = item.children ?? []
  const isInside =
    pathname === item.href || pathname.startsWith(item.href + "/")
  const [open, setOpen] = useState(isInside)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-1">
        <Link
          href={item.href}
          className={cn(navLinkClass(pathname === item.href), "flex-1 min-w-0")}
        >
          <span className="min-w-0 truncate">{item.title}</span>
          <LessonNavCheck
            lessonKey={item.slug.join("/")}
            childKeys={children.map((c) => c.slug.join("/"))}
          />
        </Link>
        <CollapsibleTrigger
          aria-label={open ? "Ocultar submódulos" : "Mostrar submódulos"}
          className="shrink-0 p-0.5 text-muted-foreground hover:text-foreground transition-colors"
        >
          <IconChevronDown
            size={12}
            className={cn("transition-transform duration-200", open && "rotate-180")}
          />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="overflow-hidden">
        <ul className="mt-0.5 mb-1 space-y-0.5 border-l border-border pl-3">
          {children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={navLinkClass(pathname === child.href)}
              >
                <span className="min-w-0 truncate">
                  {child.submodule && (
                    <span className="mr-1.5 font-mono text-xs">{child.submodule}</span>
                  )}
                  {child.title}
                </span>
                <LessonNavCheck lessonKey={child.slug.join("/")} />
              </Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
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
            if (item.children) {
              return (
                <li key={item.href}>
                  <ModuleNavItem item={item} />
                </li>
              )
            }
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={navLinkClass(pathname === item.href)}
                >
                  <span className="min-w-0 truncate">{item.title}</span>
                  <LessonNavCheck lessonKey={item.slug.join("/")} />
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
