"use client"

import * as React from "react"

type Theme = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"

const ThemeContext = React.createContext<{
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}>({
  theme: "system",
  resolvedTheme: "light",
  setTheme: () => {},
})

export function useTheme() {
  return React.useContext(ThemeContext)
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
  // Accept next-themes-compatible props and ignore them gracefully
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  themes?: string[]
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(() =>
    defaultTheme === "system" ? getSystemTheme() : defaultTheme
  )

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey) as Theme | null
      if (stored && ["light", "dark", "system"].includes(stored)) {
        setThemeState(stored)
      }
    } catch {}
  }, [storageKey])

  React.useEffect(() => {
    const root = document.documentElement

    const apply = () => {
      const resolved = theme === "system" ? getSystemTheme() : theme
      root.classList.toggle("dark", resolved === "dark")
      setResolvedTheme(resolved)
    }

    apply()

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)")
      mq.addEventListener("change", apply)
      return () => mq.removeEventListener("change", apply)
    }
  }, [theme])

  const setTheme = React.useCallback(
    (t: Theme) => {
      try {
        localStorage.setItem(storageKey, t)
      } catch {}
      setThemeState(t)
    },
    [storageKey]
  )

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
