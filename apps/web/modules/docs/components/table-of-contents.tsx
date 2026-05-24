"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@saygo/ui/lib/utils"
import type { Heading } from "@/modules/docs/lib/headings"

type Props = {
  headings: Heading[]
}

export function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("")
  const [showTopFade, setShowTopFade] = useState(false)
  const [showBottomFade, setShowBottomFade] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const activeItemRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-10% 0% -70% 0%", threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  // Scroll fades
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const update = () => {
      setShowTopFade(el.scrollTop > 8)
      setShowBottomFade(el.scrollTop + el.clientHeight < el.scrollHeight - 8)
    }
    update()
    el.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      el.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [headings])

  // Scroll active item into view inside the TOC
  useEffect(() => {
    const container = scrollRef.current
    const item = activeItemRef.current
    if (!container || !item) return

    const { top: cTop, bottom: cBottom } = container.getBoundingClientRect()
    const { top: iTop, bottom: iBottom } = item.getBoundingClientRect()

    if (iTop < cTop + 24 || iBottom > cBottom - 24) {
      item.scrollIntoView({ block: "nearest", behavior: "smooth" })
    }
  }, [activeId])

  if (headings.length === 0) return null

  return (
    <div className="relative flex flex-col h-full">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 shrink-0 px-1">
        En esta página
      </p>

      {/* Top fade */}
      <div
        className={cn(
          "absolute left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none z-10 transition-opacity duration-200",
          showTopFade ? "opacity-100" : "opacity-0"
        )}
        style={{ top: "1.75rem" }}
      />

      {/* Scrollable list */}
      <div
        ref={scrollRef}
        className="overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        <ul className="space-y-0.5 py-1">
          {headings.map(({ id, text, level }) => {
            const isActive = activeId === id
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  ref={isActive ? activeItemRef : null}
                  className={cn(
                    "block text-sm leading-snug py-1 border-l-2 transition-all duration-200",
                    level === 3 ? "pl-5" : "pl-3",
                    isActive
                      ? "border-primary text-foreground font-medium"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                  )}
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Bottom fade */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background to-transparent pointer-events-none z-10 transition-opacity duration-200",
          showBottomFade ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  )
}
