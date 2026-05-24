"use client"

import { useTheme } from "@saygo/ui/providers/theme-provider"
import { IconSun, IconMoon } from "@tabler/icons-react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Cambiar tema"
      className="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <IconSun size={17} />
      ) : (
        <IconMoon size={17} />
      )}
    </button>
  )
}
